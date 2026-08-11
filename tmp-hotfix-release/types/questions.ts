export type QuestionOptionKey = 'A' | 'B' | 'C' | 'D' | 'E'

export interface QuestionAttachment {
  label: string
  path: string
}

export interface Question {
  id: number
  subject: string
  topic: string
  conceptKey?: string
  groupKey?: string
  difficulty?: 'easy' | 'medium' | 'hard'
  year: number
  exam: string
  source?: string
  verified?: boolean
  statement: string
  options: {
    A: string
    B: string
    C: string
    D: string
    E: string
  }
  correct: QuestionOptionKey
  explanation: string
  attachments?: QuestionAttachment[]
}
