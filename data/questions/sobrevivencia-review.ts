import type { Question } from '../../types/questions'

function normalizeKey(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function hasOperationalContext(statement: string) {
  if (statement.length >= 110) {
    return true
  }

  return statement.length >= 85 && statement.includes(',')
}

function buildTopicContext(topic: string) {
  const normalized = topic
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

  if (normalized.includes('resgate')) {
    return 'Em uma situação de sobrevivencia no mar, quando o grupo já esta organizado em balsa ou na água e precisa se preparar para o resgate'
  }

  if (normalized.includes('hipotermia') || normalized.includes('água fria')) {
    return 'Em uma situação real de sobrevivencia no mar, com exposição prolongada a água fria'
  }

  if (normalized.includes('balsa')) {
    return 'Durante a permanência de sobreviventes em uma balsa salva-vidas, com recursos limitados e necessidade de coordenacao do grupo'
  }

  if (normalized.includes('sinalização')) {
    return 'Em uma situação de sobrevivencia no mar, na qual a chance de deteccao por unidade de busca depende do uso correto dos recursos de sinalização'
  }

  return 'Em uma situação de sobrevivencia no mar, considerando fadiga, exposição ao tempo e a necessidade de preservar as chances reais de resgate'
}

function withContext(question: Question) {
  if (hasOperationalContext(question.statement)) {
    return question.statement
  }

  const statement = question.statement.trim()
  const first = statement.charAt(0).toLowerCase() + statement.slice(1)

  return `${buildTopicContext(question.topic)}, ${first}`
}

export function reviewSobrevivenciaQuestion(question: Question): Question {
  return {
    ...question,
    groupKey: question.groupKey || `sobrevivencia.${normalizeKey(question.topic)}`,
    statement: withContext(question),
  }
}
