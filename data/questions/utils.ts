import type { Question } from '../../types/questions'
import { sanitizeText } from '@/lib/text'

const BLOCKED_HINTS = [
  'observe a figura',
  'observe o gráfico',
  'observe a tabela',
  'observando a imagem',
  'conforme a figura',
  'com base na figura',
  'com base no gráfico',
  'veja a figura',
  'analise a figura',
  'analise o gráfico',
  'figura abaixo',
  'imagem abaixo',
  'tabela abaixo',
  'gráfico abaixo',
  'carta',
  'anexo',
  'almanaque náutico',
  'almanaque nautico',
  'situação apresentada',
  'situacao apresentada',
  'posição estimada',
  'posicao estimada',
  'dados fornecidos',
  'tábua',
  'tabua',
]

export function questionNeedsAttachment(question: Question): boolean {
  const text = sanitizeText(`${question.statement} ${question.explanation}`).toLowerCase()

  return BLOCKED_HINTS.some((hint) => text.includes(hint))
}

export function isQuestionUsable(question: Question): boolean {
  if (questionNeedsAttachment(question)) {
    return Array.isArray(question.attachments) && question.attachments.length > 0
  }

  return true
}

export function filterUsableQuestions(questions: Question[]): Question[] {
  return questions.filter(isQuestionUsable)
}
