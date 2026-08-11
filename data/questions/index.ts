import type { Question } from '../../types/questions'
import { astronomiaQuestions } from './astronomia'
import { meteorologiaQuestions } from './meteorologia'
import { meteorologiaQuestionsPart2 } from './meteorologia-parte-2'
import { navegacaoEletronicaQuestions } from './navegacao-eletronica'
import { navegacaoEletronicaQuestionsPart2 } from './navegacao-eletronica-parte-2'
import { filterUsableQuestions } from './utils'
import { navegacaoCosteiraQuestions } from './navegacao-costeira'
import { navegacaoCosteiraQuestionsPart2 } from './navegacao-costeira-parte-2'
import { sobrevivenciaQuestions } from './sobrevivencia'
import { sobrevivenciaQuestionsPart2Reviewed } from './sobrevivencia-parte-2'
import { comunicacoesQuestions } from './comunicacoes'
import { comunicacoesQuestionsPart2 } from './comunicacoes-parte-2'
import { estabilidadeQuestions } from './estabilidade'
import { estabilidadeQuestionsPart2 } from './estabilidade-parte-2'
import { capitaoAmadorQuestionsPart1 } from './capitao-amador-parte-1'
import { capitaoAmadorQuestionsPart2 } from './capitao-amador-parte-2'
import { capitaoAmadorQuestionsPart3 } from './capitao-amador-parte-3'
import { capitaoAmadorQuestionsPrioridade } from './capitao-amador-prioridade'
import { arraisAmadorQuestions } from './arrais'
import { arraisAmadorQuestionsPart2 } from './arrais-parte-2'
import { arraisAmadorQuestionsPart3 } from './arrais-parte-3'
import { arraisAmadorQuestionsPart4 } from './arrais-parte-4'
import { arraisAmadorQuestionsPart5 } from './arrais-parte-5'
import { arraisAmadorQuestionsPart6 } from './arrais-parte-6'
import { arraisAmadorQuestionsPart7 } from './arrais-parte-7'
import { mestreAmadorQuestions } from './mestre'
import { mestreAmadorQuestionsPart2 } from './mestre-parte-2'
import { mestreAmadorQuestionsPart3 } from './mestre-parte-3'
import { mestreAmadorQuestionsPart4 } from './mestre-parte-4'
import { mestreAmadorQuestionsPart5 } from './mestre-parte-5'
import { mestreAmadorQuestionsPart6 } from './mestre-parte-6'
import { sanitizeQuestion, sanitizeText } from '@/lib/text'

function isQuestion(value: Question | undefined): value is Question {
  return value !== undefined
}

const rawQuestions = [
  ...astronomiaQuestions,
  ...meteorologiaQuestions,
  ...meteorologiaQuestionsPart2,
  ...navegacaoEletronicaQuestions,
  ...navegacaoEletronicaQuestionsPart2,
  ...navegacaoCosteiraQuestions,
  ...navegacaoCosteiraQuestionsPart2,
  ...sobrevivenciaQuestions,
  ...sobrevivenciaQuestionsPart2Reviewed,
  ...comunicacoesQuestions,
  ...comunicacoesQuestionsPart2,
  ...estabilidadeQuestions,
  ...estabilidadeQuestionsPart2,
  ...capitaoAmadorQuestionsPart1,
  ...capitaoAmadorQuestionsPart2,
  ...capitaoAmadorQuestionsPart3,
  ...capitaoAmadorQuestionsPrioridade,
  ...arraisAmadorQuestions,
  ...arraisAmadorQuestionsPart2,
  ...arraisAmadorQuestionsPart3,
  ...arraisAmadorQuestionsPart4,
  ...arraisAmadorQuestionsPart5,
  ...arraisAmadorQuestionsPart6,
  ...arraisAmadorQuestionsPart7,
  ...mestreAmadorQuestions,
  ...mestreAmadorQuestionsPart2,
  ...mestreAmadorQuestionsPart3,
  ...mestreAmadorQuestionsPart4,
  ...mestreAmadorQuestionsPart5,
  ...mestreAmadorQuestionsPart6,
] as Array<Question | undefined>

function buildDeduplicationKey(question: Question) {
  const options = [question.options.A, question.options.B, question.options.C, question.options.D, question.options.E]
    .map((option) => sanitizeText(option).trim())
    .join('|')

  return [
    sanitizeText(question.subject).trim(),
    sanitizeText(question.exam).trim(),
    sanitizeText(question.statement).trim(),
    options,
    question.correct,
  ].join('::')
}

function dedupeQuestions(questions: Question[]) {
  const uniqueQuestions = new Map<string, Question>()

  for (const question of questions) {
    const key = buildDeduplicationKey(question)

    if (!uniqueQuestions.has(key)) {
      uniqueQuestions.set(key, question)
    }
  }

  return Array.from(uniqueQuestions.values())
}

const explanationOverrides = new Map<number, string>([
  [
    8001,
    'Isobatas ligam pontos de mesma profundidade. Na pratica, ajudam o comandante a perceber faixas rasas, taludes e margens de segurança ao planejar ou conferir a derrota.',
  ],
  [
    8002,
    'A projecao de Mercator e a mais usada nas cartas náuticas porque preserva ângulos. Isso facilita o tracado e a leitura de rumos constantes na navegação pratica.',
  ],
  [
    8003,
    'Na carta de Mercator, a loxodromia aparece como linha reta. Isso explica por que ela e tao util para derrotas governadas com rumo constante.',
  ],
  [
    8004,
    'A ortodromia segue um circulo maximo e, por isso, representa a menor distância sobre a esfera terrestre. Ela nao coincide, em geral, com a loxodromia da carta de Mercator.',
  ],
  [
    8005,
    'Quanto maior a escala, mais detalhe a carta mostra e menor e a área abrangida. Por isso, cartas grandes são mais adequadas para aproximação, entrada de porto e navegação fina.',
  ],
  [
    8006,
    'O datum horizontal precisa ser compativel com o sistema de posicionamento utilizado. Se carta e equipamento estiverem em datums diferentes, a posição pode ser plotada deslocada.',
  ],
  [
    8007,
    'As profundidades da carta são referidas ao nivel de redução. Para estimar a água disponível no momento, o navegador ainda precisa considerar o efeito da maré observada ou prevista.',
  ],
  [
    8008,
    'Carta náutica nao e documento para uso passivo. O correto e verificar atualizacao, avisos aos navegantes, datum, simbolos e se a informação continua coerente com a realidade observada.',
  ],
  [
    8009,
    'A rosa dos ventos da carta traz, entre outros dados, a declinacao magnetica e sua variacao anual. Essa informação é essencial para converter rumos e marcacoes com criterio.',
  ],
  [
    8010,
    'Uma derrota costeira segura nao busca apenas encurtar caminho. Ela preserva margem para perigos, considera profundidade, balizamento, áreas restritas e cria pontos de conferencia ao longo do trajeto.',
  ],
  [
    8061,
    'Em situação de proa a proa, as duas embarcações devem manobrar para boreste para passar por bombordo uma da outra. O importante e que a manobra seja clara e percebida a tempo.',
  ],
  [
    8062,
    'No cruzamento entre embarcações a motor, quem avista a outra por boreste deve manobrar para se manter fora do caminho. Ainda assim, ambas conservam o dever de evitar a colisao se a situação se degradar.',
  ],
  [
    8063,
    'Na ultrapassagem, a responsabilidade principal e da embarcação alcancadora. Ela deve manter-se completamente safa da alcancada ate que a manobra tenha terminado de forma segura.',
  ],
  [
    8064,
    'Ter preferencia de passagem nao autoriza passividade. O RIPEAM mantem para todos o dever continuo de vigiar, avaliar o risco e agir se necessário para evitar abalroamento.',
  ],
  [
    8096,
    'Quando a posição indicada por um equipamento nao combina com a realidade observada, o procedimento maduro e conferir por outros meios. Verificacao cruzada evita que um erro isolado vire decisão errada de navegação.',
  ],
  [
    8097,
    'Na navegação noturna, luzes, profundidade e posição exigem atenção redobrada porque ha menos referencias visuais e menos margem para corrigir erro tarde demais.',
  ],
  [
    8098,
    'Aproximacao de porto ou barra pede leitura integrada: carta, maré, corrente, balizamento, mar e condições locais. E justamente a combinacao desses fatores que define a segurança da manobra.',
  ],
  [
    8099,
    'O objetivo do estudo para Mestre-Amador nao e decorar termos isolados, mas desenvolver segurança, julgamento tecnico e responsabilidade para decidir melhor na navegação real.',
  ],
  [
    8100,
    'Boa aprovacao é boa conducao pratica caminham juntas quando o aluno combina teoria, repeticao de questoes, interpretação e prudencia operacional. Esse conjunto gera decisão melhor, nao apenas mais memoria.',
  ],
])

const questionTextOverrides = new Map<
  number,
  Partial<Pick<Question, 'statement' | 'topic' | 'correct' | 'explanation'>> & {
    options?: Partial<Question['options']>
  }
>([
  [
    20212009,
    {
      topic: 'carta náutica / definição',
      statement:
        "Como se chama o documento cartográfico resultante de levantamentos de áreas oceânicas, marés, baías, rios, canais, lagos, lagoas ou qualquer outra massa d'água navegável, destinado a servir de base à navegação?",
      explanation:
        'O documento cartográfico oficial elaborado para representar águas navegáveis e apoiar a segurança da navegação é a carta náutica. Por isso, a alternativa correta é a E.',
      options: {
        A: 'Projeção transversa de Mercator.',
        D: 'Carta de auxílio.',
        E: 'Carta náutica.',
      },
    },
  ],
  [
    20212010,
    {
      topic: 'projeção de Mercator',
      statement:
        'Cartas náuticas para baixas latitudes são, em sua maioria, construídas na projeção de:',
      explanation:
        'A projeção de Mercator é a mais empregada nas cartas náuticas usuais de baixas e médias latitudes por preservar os rumos como linhas retas. Por isso, a alternativa correta é a C.',
    },
  ],
  [
    20212011,
    {
      topic: 'carta náutica / conceitos gerais',
      statement: 'Em relação às cartas náuticas, assinale a alternativa incorreta.',
      correct: 'D',
      explanation:
        'Nem todas as cartas náuticas são construídas na projeção policônica. A formulação da alternativa D generaliza incorretamente esse aspecto cartográfico. Por isso, a alternativa correta é a D.',
      options: {
        B: 'São documentos cartográficos.',
        C: 'Servem de base à navegação.',
        D: 'Todas são construídas na projeção policônica.',
        E: 'Fornecem informações sobre profundidades, perigos à navegação e natureza do fundo.',
      },
    },
  ],
  [
    20212012,
    {
      topic: 'carta náutica / informações representadas',
      statement:
        'Informações sobre profundidades, perigos à navegação, natureza do fundo, fundeadouros, áreas de fundeio, auxílios à navegação, altitudes, pontos notáveis, linha de costa, marés, correntes e magnetismo estão representadas em qual documento?',
      explanation:
        'A carta náutica concentra o conjunto essencial de informações hidrográficas, cartográficas e operacionais necessárias à segurança da navegação. Por isso, a alternativa correta é a D.',
      options: {
        A: 'Lista de faróis.',
        C: 'Carta de marés.',
        D: 'Carta náutica.',
        E: 'Lista de auxílio-rádio.',
      },
    },
  ],
])

function applyQuestionOverrides(question: Question): Question {
  const explanation = explanationOverrides.get(question.id)
  const textOverrides = questionTextOverrides.get(question.id)

  if (!explanation && !textOverrides) {
    return question
  }

  return {
    ...question,
    ...textOverrides,
    options: textOverrides?.options
      ? {
          ...question.options,
          ...textOverrides.options,
        }
      : question.options,
    explanation: explanation ?? textOverrides?.explanation ?? question.explanation,
  }
}

export const allQuestions = dedupeQuestions(filterUsableQuestions(rawQuestions.filter(isQuestion)))
  .map(applyQuestionOverrides)
  .map(sanitizeQuestion)
