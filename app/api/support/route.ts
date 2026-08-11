import { getServerSession } from 'next-auth'
import { z } from 'zod'
import { authOptions } from '@/lib/auth'
import { sendSupportAlertEmail } from '@/lib/support-alert-email'

const supportRequestSchema = z.object({
  message: z.string().trim().min(2).max(2000),
  pageUrl: z.string().trim().max(500).optional().nullable(),
  kind: z.enum(['question', 'report-error', 'human']).default('question'),
  contact: z
    .object({
      name: z.string().trim().max(120).optional().nullable(),
      email: z.string().trim().email().optional().nullable(),
      whatsapp: z.string().trim().max(40).optional().nullable(),
    })
    .optional()
    .nullable(),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().trim().min(1).max(1200),
      })
    )
    .max(8)
    .default([]),
})

const supportInstructions = `
Voce e o suporte do Simulado Capitao, uma plataforma brasileira de simulados para Capitao-Amador, Arrais-Amador e Mestre-Amador.
Responda em portugues do Brasil, de forma curta, clara e acolhedora.
Ajude com uso da plataforma, acesso, simulados, desempenho, revisao de conteudo nautico e orientacoes de estudo.
Nao invente dados de conta, pagamento ou acesso. Para problemas de compra, login, liberacao de acesso, reembolso, erro tecnico ou erro em questao, oriente o aluno a falar com atendimento humano.
Quando a pergunta envolver prova/conteudo, explique o raciocinio e incentive revisar o comentario da questao.
`

function fallbackAnswer(kind: 'question' | 'report-error' | 'human') {
  if (kind === 'report-error') {
    return 'Obrigado por avisar. Eu registrei esse relato para revisao. Se puder, envie tambem o numero da questao ou um print pelo WhatsApp para o atendimento conferir mais rapido.'
  }

  if (kind === 'human') {
    return 'Claro. Vou encaminhar seu pedido para atendimento humano. Toque em "WhatsApp" para continuar a conversa com a equipe.'
  }

  return 'No momento nao consegui responder com IA. Sua mensagem foi registrada para o suporte humano, e voce tambem pode continuar pelo WhatsApp.'
}

function getOutputText(response: unknown) {
  if (
    response &&
    typeof response === 'object' &&
    'output_text' in response &&
    typeof response.output_text === 'string'
  ) {
    return response.output_text.trim()
  }

  if (response && typeof response === 'object' && 'output' in response && Array.isArray(response.output)) {
    return response.output
      .flatMap((item: unknown) => {
        if (!item || typeof item !== 'object' || !('content' in item) || !Array.isArray(item.content)) {
          return []
        }

        return item.content
          .map((contentItem: unknown) => {
            if (!contentItem || typeof contentItem !== 'object') {
              return ''
            }

            if ('text' in contentItem && typeof contentItem.text === 'string') {
              return contentItem.text
            }

            return ''
          })
          .filter(Boolean)
      })
      .join('\n')
      .trim()
  }

  return ''
}

function sanitizeAiError(error: string) {
  return error.replace(/sk-[A-Za-z0-9_-]+/g, 'sk-***')
}

async function createAiAnswer(input: {
  message: string
  history: Array<{ role: 'user' | 'assistant'; content: string }>
  pageUrl: string | null
}) {
  if (!process.env.OPENAI_API_KEY) {
    return { ok: false as const, answer: null, error: 'missing-openai-api-key' }
  }

  const historyText = input.history
    .map((item) => `${item.role === 'user' ? 'Aluno' : 'Suporte'}: ${item.content}`)
    .join('\n')

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: process.env.OPENAI_SUPPORT_MODEL || 'gpt-5-mini',
      instructions: supportInstructions,
      input: [
        historyText ? `Historico recente:\n${historyText}` : 'Sem historico recente.',
        input.pageUrl ? `Pagina atual: ${input.pageUrl}` : 'Pagina atual nao informada.',
        `Mensagem do aluno: ${input.message}`,
      ].join('\n\n'),
      max_output_tokens: 600,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text().catch(() => 'openai-request-failed')
    return { ok: false as const, answer: null, error: sanitizeAiError(errorText) }
  }

  const data = await response.json()
  const answer = getOutputText(data)

  if (!answer) {
    return { ok: false as const, answer: null, error: 'empty-openai-answer' }
  }

  return { ok: true as const, answer, error: null }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  try {
    const body = await request.json()
    const parsed = supportRequestSchema.safeParse(body)

    if (!parsed.success) {
      return Response.json({ error: 'invalid-support-request' }, { status: 400 })
    }

    const { message, history, kind } = parsed.data
    const pageUrl = parsed.data.pageUrl || null
    const contact = parsed.data.contact || null
    const contactEmail = contact?.email?.trim() || null
    const contactWhatsApp = contact?.whatsapp?.trim() || null
    const contactName = contact?.name?.trim() || null
    const userEmail = session?.user?.email ?? contactEmail
    const userName = session?.user?.name ?? contactName

    if (kind === 'report-error' && !session?.user?.id) {
      return Response.json(
        {
          answer: 'Para reportar erro em questao, entre na sua conta de aluno e tente novamente.',
          escalated: false,
          requiresLogin: true,
        },
        { status: 401 }
      )
    }

    if (kind === 'human' && !userEmail && !contactWhatsApp) {
      return Response.json(
        {
          answer: 'Para pedir atendimento humano, informe seu e-mail ou WhatsApp para que a equipe consiga responder.',
          escalated: false,
          needsContact: true,
        },
        { status: 400 }
      )
    }

    if (kind === 'human' || kind === 'report-error') {
      await sendSupportAlertEmail({
        reason: kind === 'human' ? 'Aluno pediu atendimento humano' : 'Aluno reportou erro',
        message,
        pageUrl,
        userEmail: userEmail ?? null,
        userName: userName ?? null,
        contactWhatsApp,
      })

      return Response.json({
        answer: fallbackAnswer(kind),
        escalated: true,
      })
    }

    const aiResponse = await createAiAnswer({ message, history, pageUrl })

    if (!aiResponse.ok || !aiResponse.answer) {
      console.error('[support] ai unavailable', {
        error: aiResponse.error,
        hasOpenAiKey: Boolean(process.env.OPENAI_API_KEY),
        model: process.env.OPENAI_SUPPORT_MODEL || 'gpt-5-mini',
      })

      await sendSupportAlertEmail({
        reason: 'IA indisponivel ou sem resposta',
        message,
        pageUrl,
        userEmail: session?.user?.email ?? null,
        userName: session?.user?.name ?? null,
      })

      return Response.json({
        answer: fallbackAnswer('question'),
        escalated: true,
      })
    }

    return Response.json({
      answer: aiResponse.answer,
      escalated: false,
    })
  } catch (error) {
    console.error('[support] failed to handle support request', error)

    return Response.json(
      {
        answer: fallbackAnswer('question'),
        escalated: true,
      },
      { status: 500 }
    )
  }
}
