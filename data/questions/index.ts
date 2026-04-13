import type { Question } from '../../types/questions'
import { astronomiaQuestions } from './astronomia'
import { meteorologiaQuestions } from './meteorologia'
import { navegacaoEletronicaQuestions } from './navegacao-eletronica'
import { filterUsableQuestions } from './utils'
import { navegacaoCosteiraQuestions } from './navegacao-costeira'
import { sobrevivenciaQuestions } from './sobrevivencia'
import { comunicacoesQuestions } from './comunicacoes'
import { estabilidadeQuestions } from './estabilidade'
import { arraisAmadorQuestions } from './arrais'
import { sanitizeQuestion } from '@/lib/text'

function isQuestion(value: Question | undefined): value is Question {
  return value !== undefined
}

const rawQuestions = [
  ...astronomiaQuestions,
  ...meteorologiaQuestions,
  ...navegacaoEletronicaQuestions,
  ...navegacaoCosteiraQuestions,
  ...sobrevivenciaQuestions,
  ...comunicacoesQuestions,
  ...estabilidadeQuestions,
  ...arraisAmadorQuestions,
] as Array<Question | undefined>

export const allQuestions = filterUsableQuestions(rawQuestions.filter(isQuestion)).map(
  sanitizeQuestion
)
