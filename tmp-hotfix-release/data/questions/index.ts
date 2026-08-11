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
    'Isobatas ligam pontos de mesma profundidade. Na pratica, ajudam o comandante a perceber faixas rasas, taludes e margens de seguranca ao planejar ou conferir a derrota.',
  ],
  [
    8002,
    'A projecao de Mercator e a mais usada nas cartas nauticas porque preserva angulos. Isso facilita o tracado e a leitura de rumos constantes na navegacao pratica.',
  ],
  [
    8003,
    'Na carta de Mercator, a loxodromia aparece como linha reta. Isso explica por que ela e tao util para derrotas governadas com rumo constante.',
  ],
  [
    8004,
    'A ortodromia segue um circulo maximo e, por isso, representa a menor distancia sobre a esfera terrestre. Ela nao coincide, em geral, com a loxodromia da carta de Mercator.',
  ],
  [
    8005,
    'Quanto maior a escala, mais detalhe a carta mostra e menor e a area abrangida. Por isso, cartas grandes sao mais adequadas para aproximacao, entrada de porto e navegacao fina.',
  ],
  [
    8006,
    'O datum horizontal precisa ser compativel com o sistema de posicionamento utilizado. Se carta e equipamento estiverem em datums diferentes, a posicao pode ser plotada deslocada.',
  ],
  [
    8007,
    'As profundidades da carta sao referidas ao nivel de reducao. Para estimar a agua disponivel no momento, o navegador ainda precisa considerar o efeito da mare observada ou prevista.',
  ],
  [
    8008,
    'Carta nautica nao e documento para uso passivo. O correto e verificar atualizacao, avisos aos navegantes, datum, simbolos e se a informacao continua coerente com a realidade observada.',
  ],
  [
    8009,
    'A rosa dos ventos da carta traz, entre outros dados, a declinacao magnetica e sua variacao anual. Essa informacao e essencial para converter rumos e marcacoes com criterio.',
  ],
  [
    8010,
    'Uma derrota costeira segura nao busca apenas encurtar caminho. Ela preserva margem para perigos, considera profundidade, balizamento, areas restritas e cria pontos de conferencia ao longo do trajeto.',
  ],
  [
    8061,
    'Em situacao de proa a proa, as duas embarcacoes devem manobrar para boreste para passar por bombordo uma da outra. O importante e que a manobra seja clara e percebida a tempo.',
  ],
  [
    8062,
    'No cruzamento entre embarcacoes a motor, quem avista a outra por boreste deve manobrar para se manter fora do caminho. Ainda assim, ambas conservam o dever de evitar a colisao se a situacao se degradar.',
  ],
  [
    8063,
    'Na ultrapassagem, a responsabilidade principal e da embarcacao alcancadora. Ela deve manter-se completamente safa da alcancada ate que a manobra tenha terminado de forma segura.',
  ],
  [
    8064,
    'Ter preferencia de passagem nao autoriza passividade. O RIPEAM mantem para todos o dever continuo de vigiar, avaliar o risco e agir se necessario para evitar abalroamento.',
  ],
  [
    8096,
    'Quando a posicao indicada por um equipamento nao combina com a realidade observada, o procedimento maduro e conferir por outros meios. Verificacao cruzada evita que um erro isolado vire decisao errada de navegacao.',
  ],
  [
    8097,
    'Na navegacao noturna, luzes, profundidade e posicao exigem atencao redobrada porque ha menos referencias visuais e menos margem para corrigir erro tarde demais.',
  ],
  [
    8098,
    'Aproximacao de porto ou barra pede leitura integrada: carta, mare, corrente, balizamento, mar e condicoes locais. E justamente a combinacao desses fatores que define a seguranca da manobra.',
  ],
  [
    8099,
    'O objetivo do estudo para Mestre-Amador nao e decorar termos isolados, mas desenvolver seguranca, julgamento tecnico e responsabilidade para decidir melhor na navegacao real.',
  ],
  [
    8100,
    'Boa aprovacao e boa conducao pratica caminham juntas quando o aluno combina teoria, repeticao de questoes, interpretacao e prudencia operacional. Esse conjunto gera decisao melhor, nao apenas mais memoria.',
  ],
])

const questionTextOverrides = new Map<
  number,
  Partial<Pick<Question, 'statement' | 'topic' | 'correct' | 'explanation'>> & {
    options?: Partial<Question['options']>
  }
>([
  [
    20212011,
    {
      statement: 'Em relação às cartas náuticas, assinale a alternativa incorreta.',
      correct: 'D',
      options: {
        C: 'Servem de base à navegação.',
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
