'use client'

import { FormEvent, PointerEvent, useEffect, useRef, useState } from 'react'

type SupportMessage = {
  role: 'user' | 'assistant'
  content: string
}

type SupportContact = {
  name: string
  email: string
  whatsapp: string
}

const widgetWidth = 360
const widgetHeight = 520
const closedButtonWidth = 192
const closedButtonHeight = 64
const defaultButtonPosition = { x: 24, y: 24 }

function getWhatsAppHref(message: string) {
  const number = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP_NUMBER?.replace(/\D/g, '')

  if (!number) {
    return null
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

function clampPosition(position: { x: number; y: number }, width: number, height: number) {
  return {
    x: Math.min(Math.max(12, position.x), Math.max(12, width - closedButtonWidth - 12)),
    y: Math.min(Math.max(12, position.y), Math.max(12, height - closedButtonHeight - 12)),
  }
}

export default function SupportWidget() {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [input, setInput] = useState('')
  const [contact, setContact] = useState<SupportContact>({ name: '', email: '', whatsapp: '' })
  const [contactError, setContactError] = useState('')
  const [showHumanContactForm, setShowHumanContactForm] = useState(false)
  const [sessionUser, setSessionUser] = useState<{ name?: string | null; email?: string | null } | null>(null)
  const [sessionChecked, setSessionChecked] = useState(false)
  const [position, setPosition] = useState(defaultButtonPosition)
  const [panelPosition, setPanelPosition] = useState<{ x: number; y: number } | null>(null)
  const [messages, setMessages] = useState<SupportMessage[]>([
    {
      role: 'assistant',
      content:
        'Oi. Posso ajudar com acesso, simulados, desempenho, dúvidas de estudo ou encaminhar para atendimento humano.',
    },
  ])
  const dragStartRef = useRef<{
    pointerId: number
    startClientX: number
    startClientY: number
    startX: number
    startY: number
    target: 'button' | 'panel'
    moved: boolean
  } | null>(null)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setIsMounted(true)

    const storedPosition = window.localStorage.getItem('support-widget-position')
    window.localStorage.removeItem('support-widget-hidden')

    if (storedPosition) {
      try {
        const parsed = JSON.parse(storedPosition) as { x: number; y: number }
        setPosition(clampPosition(parsed, window.innerWidth, window.innerHeight))
      } catch {
        setPosition({
          x: Math.max(12, window.innerWidth - closedButtonWidth - 24),
          y: Math.max(12, window.innerHeight - closedButtonHeight - 24),
        })
      }
    } else {
      setPosition({
        x: Math.max(12, window.innerWidth - closedButtonWidth - 24),
        y: Math.max(12, window.innerHeight - closedButtonHeight - 24),
      })
    }
  }, [])

  useEffect(() => {
    if (!isMounted) {
      return
    }

    let isActive = true

    fetch('/api/auth/session')
      .then((response) => response.json())
      .then((data: { user?: { name?: string | null; email?: string | null } }) => {
        if (!isActive) {
          return
        }

        setSessionUser(data.user ?? null)
        setSessionChecked(true)
      })
      .catch(() => {
        if (isActive) {
          setSessionUser(null)
          setSessionChecked(true)
        }
      })

    return () => {
      isActive = false
    }
  }, [isMounted])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isOpen])

  function startDrag(event: PointerEvent<HTMLButtonElement | HTMLDivElement>, target: 'button' | 'panel') {
    const currentPosition = target === 'panel' && panelPosition ? panelPosition : position

    dragStartRef.current = {
      pointerId: event.pointerId,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startX: currentPosition.x,
      startY: currentPosition.y,
      target,
      moved: false,
    }

    event.currentTarget.setPointerCapture(event.pointerId)
  }

  function moveDrag(event: PointerEvent<HTMLButtonElement | HTMLDivElement>) {
    const dragStart = dragStartRef.current

    if (!dragStart || dragStart.pointerId !== event.pointerId) {
      return
    }

    const nextPosition = {
      x: dragStart.startX + event.clientX - dragStart.startClientX,
      y: dragStart.startY + event.clientY - dragStart.startClientY,
    }

    if (Math.abs(event.clientX - dragStart.startClientX) + Math.abs(event.clientY - dragStart.startClientY) > 5) {
      dragStart.moved = true
    }

    if (dragStart.target === 'panel') {
      setPanelPosition({
        x: Math.min(Math.max(12, nextPosition.x), Math.max(12, window.innerWidth - widgetWidth - 12)),
        y: Math.min(Math.max(12, nextPosition.y), Math.max(12, window.innerHeight - widgetHeight - 12)),
      })
      return
    }

    const clampedPosition = clampPosition(nextPosition, window.innerWidth, window.innerHeight)
    setPosition(clampedPosition)
    window.localStorage.setItem('support-widget-position', JSON.stringify(clampedPosition))
  }

  function endDrag(event: PointerEvent<HTMLButtonElement | HTMLDivElement>) {
    const dragStart = dragStartRef.current

    if (!dragStart || dragStart.pointerId !== event.pointerId) {
      return
    }

    if (dragStart.target === 'button' && !dragStart.moved) {
      setIsOpen(true)
    }

    dragStartRef.current = null
  }

  async function sendMessage(
    kind: 'question' | 'report-error' | 'human',
    overrideMessage?: string,
    contactOverride?: SupportContact
  ) {
    const message = (overrideMessage ?? input).trim()

    if (!message || isSending) {
      return
    }

    const nextMessages: SupportMessage[] = [...messages, { role: 'user', content: message }]
    setMessages(nextMessages)
    setInput('')
    setIsSending(true)

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          kind,
          pageUrl: window.location.href,
          history: messages.slice(-6),
          contact: contactOverride
            ? {
                name: contactOverride.name || null,
                email: contactOverride.email || null,
                whatsapp: contactOverride.whatsapp || null,
              }
            : null,
        }),
      })

      const data = (await response.json()) as { answer?: string; needsContact?: boolean; requiresLogin?: boolean }

      if (data.needsContact) {
        setShowHumanContactForm(true)
      }

      if (data.requiresLogin) {
        setShowHumanContactForm(false)
      }

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            data.answer ||
            'Recebi sua mensagem, mas nao consegui gerar uma resposta agora. O atendimento humano pode seguir pelo WhatsApp.',
        },
      ])
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            'Nao consegui conectar com o suporte agora. Tente novamente em instantes ou continue pelo WhatsApp.',
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void sendMessage('question')
  }

  function requestHumanSupport() {
    if (sessionUser?.email) {
      void sendMessage('human', 'Quero falar com atendimento humano.')
      return
    }

    setContactError('')
    setShowHumanContactForm(true)
  }

  function requestErrorReport() {
    if (sessionChecked && !sessionUser?.email) {
      setShowHumanContactForm(false)
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: 'Para reportar erro em questao, entre na sua conta de aluno e tente novamente.',
        },
      ])
      return
    }

    void sendMessage('report-error', 'Quero reportar um erro em uma questao.')
  }

  function submitHumanSupport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextContact = {
      name: contact.name.trim(),
      email: contact.email.trim(),
      whatsapp: contact.whatsapp.trim(),
    }

    if (!nextContact.email && !nextContact.whatsapp) {
      setContactError('Informe um e-mail ou WhatsApp para a equipe conseguir responder.')
      return
    }

    setContactError('')
    setShowHumanContactForm(false)
    void sendMessage('human', 'Quero falar com atendimento humano.', nextContact)
  }

  if (!isMounted || isHidden) {
    return null
  }

  const computedPanelPosition =
    panelPosition ??
    {
      x: Math.min(Math.max(12, position.x - widgetWidth + 68), Math.max(12, window.innerWidth - widgetWidth - 12)),
      y: Math.min(Math.max(12, position.y - widgetHeight + 68), Math.max(12, window.innerHeight - widgetHeight - 12)),
    }
  const panelStyle = { left: computedPanelPosition.x, top: computedPanelPosition.y }
  const whatsAppHref = getWhatsAppHref(
    'Olá, preciso de ajuda no Simulado Capitão. Estou na página: ' + window.location.href
  )

  return (
    <>
      {!isOpen ? (
        <button
          type="button"
          onPointerDown={(event) => startDrag(event, 'button')}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          className="fixed z-50 flex h-16 w-48 touch-none items-center gap-3 rounded-full border border-white/50 bg-slate-950 px-3 text-left text-white shadow-[0_18px_42px_rgba(15,23,42,0.34)] ring-4 ring-emerald-300/45 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:ring-emerald-300/70"
          style={{ left: position.x, top: position.y }}
          aria-label="Abrir suporte"
          title="Arraste ou toque para abrir"
        >
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-base font-black text-slate-950">
            ?
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-lime-300" />
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-bold leading-4">Tire sua dúvida</span>
            <span className="block text-[11px] font-semibold leading-4 text-emerald-100">Comprar ou acessar</span>
          </span>
        </button>
      ) : null}

      {isOpen ? (
        <section
          className="fixed z-50 flex max-h-[calc(100vh-24px)] w-[min(360px,calc(100vw-24px))] flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.24)]"
          style={panelStyle}
          aria-label="Chat de suporte"
        >
          <div
            className="flex cursor-grab items-start justify-between gap-3 bg-slate-950 px-4 py-3 text-white active:cursor-grabbing"
            onPointerDown={(event) => startDrag(event, 'panel')}
            onPointerMove={moveDrag}
            onPointerUp={endDrag}
          >
            <div>
              <p className="text-sm font-semibold">Suporte</p>
              <p className="text-xs text-slate-300">Arraste a janela se quiser mudar de lugar.</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-white/20 px-2 py-1 text-xs font-semibold text-white hover:bg-white/10"
              >
                Minimizar
              </button>
              <button
                type="button"
                onPointerDown={(event) => event.stopPropagation()}
                onClick={() => {
                  setIsHidden(true)
                  setIsOpen(false)
                }}
                className="rounded-full border border-white/20 px-2 py-1 text-xs font-semibold text-white hover:bg-white/10"
              >
                Fechar
              </button>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col bg-slate-50">
            <div className="max-h-72 flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.role === 'user'
                      ? 'ml-8 bg-slate-950 text-white'
                      : 'mr-8 border border-slate-200 bg-white text-slate-800'
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isSending ? (
                <div className="mr-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
                  Pensando...
                </div>
              ) : null}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-slate-200 bg-white p-3">
              <div className="mb-3 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={requestErrorReport}
                  className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Reportar erro
                </button>
                <button
                  type="button"
                  onClick={requestHumanSupport}
                  className="rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Pedir humano
                </button>
                {whatsAppHref ? (
                  <a
                    href={whatsAppHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
                  >
                    WhatsApp
                  </a>
                ) : null}
              </div>

              {showHumanContactForm ? (
                <form onSubmit={submitHumanSupport} className="mb-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                  <p className="mb-2 text-xs font-semibold text-slate-800">
                    Para atendimento humano, informe um contato para resposta.
                  </p>
                  <div className="grid gap-2">
                    <input
                      value={contact.name}
                      onChange={(event) => setContact((current) => ({ ...current, name: event.target.value }))}
                      placeholder="Nome (opcional)"
                      className="rounded-full border border-emerald-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                      maxLength={120}
                    />
                    <input
                      value={contact.email}
                      onChange={(event) => setContact((current) => ({ ...current, email: event.target.value }))}
                      placeholder="E-mail"
                      type="email"
                      className="rounded-full border border-emerald-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                      maxLength={160}
                    />
                    <input
                      value={contact.whatsapp}
                      onChange={(event) => setContact((current) => ({ ...current, whatsapp: event.target.value }))}
                      placeholder="WhatsApp"
                      inputMode="tel"
                      className="rounded-full border border-emerald-200 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-emerald-500"
                      maxLength={40}
                    />
                  </div>
                  {contactError ? <p className="mt-2 text-xs font-semibold text-red-700">{contactError}</p> : null}
                  <div className="mt-3 flex gap-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="rounded-full bg-slate-950 px-3 py-2 text-xs font-semibold text-white hover:bg-slate-900 disabled:bg-slate-300"
                    >
                      Enviar pedido
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setShowHumanContactForm(false)
                        setContactError('')
                      }}
                      className="rounded-full border border-emerald-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-white"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : null}

              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Digite sua dúvida..."
                  className="min-w-0 flex-1 rounded-full border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
                  maxLength={2000}
                />
                <button
                  type="submit"
                  disabled={isSending || input.trim().length < 2}
                  className="rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
