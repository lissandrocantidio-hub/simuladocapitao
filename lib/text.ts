import type { Question } from '@/types/questions'

const directReplacements: Array<[string, string]> = [
  ['\u00C3\u00A1', 'á'],
  ['\u00C3\u00A2', 'â'],
  ['\u00C3\u00A3', 'ã'],
  ['\u00C3\u00A4', 'ä'],
  ['\u00C3\u00A9', 'é'],
  ['\u00C3\u00AA', 'ê'],
  ['\u00C3\u00AD', 'í'],
  ['\u00C3\u00B3', 'ó'],
  ['\u00C3\u00B4', 'ô'],
  ['\u00C3\u00B5', 'õ'],
  ['\u00C3\u00B6', 'ö'],
  ['\u00C3\u00BA', 'ú'],
  ['\u00C3\u00A7', 'ç'],
  ['\u00C3\u0081', 'Á'],
  ['\u00C3\u0082', 'Â'],
  ['\u00C3\u0080', 'À'],
  ['\u00C3\u0089', 'É'],
  ['\u00C3\u008A', 'Ê'],
  ['\u00C3\u008D', 'Í'],
  ['\u00C3\u0093', 'Ó'],
  ['\u00C3\u0094', 'Ô'],
  ['\u00C3\u0095', 'Õ'],
  ['\u00C3\u009A', 'Ú'],
  ['\u00C3\u0087', 'Ç'],
  ['\u00C3\u00A0', 'à'],
  ['\u00C2\u00B0', '°'],
  ['\u00C2\u00BA', 'º'],
  ['\u00C2\u00AA', 'ª'],
  ['\u00C2\u00B7', '·'],
  ['\u00E2\u20AC\u2122', '’'],
  ['\u00E2\u20AC\u0153', '“'],
  ['\u00E2\u20AC\u009D', '”'],
  ['\u00E2\u20AC\u02DC', '‘'],
  ['\u00E2\u20AC\u201C', '–'],
  ['\u00E2\u20AC\u201D', '—'],
  ['\u00E2\u20AC\u00A6', '…'],
  ['\u00E2\u2030\u02C6', '≈'],
]

const phraseReplacements: Array<[RegExp, string]> = [
  [/\bSitua\?o\b/g, 'Situação'],
  [/\bSituacao\b/g, 'Situação'],
  [/\bmar\?o\b/g, 'março'],
  [/\bCapit\?o\b/g, 'Capitão'],
  [/\bMediterr\?neo\b/g, 'Mediterrâneo'],
  [/\bM\?naco\b/g, 'Mônaco'],
  [/\bposi\?o\b/g, 'posição'],
  [/\bastron\?mica\b/g, 'astronômica'],
  [/\bM\?dia\b/g, 'Média'],
  [/\bculmina\?o\b/g, 'culminação'],
  [/\bembarca\?o\b/g, 'embarcação'],
  [/\bDiferen\?a\b/g, 'Diferença'],
  [/\bdeclina\?o\b/g, 'declinação'],
  [/\brela\?o\b/g, 'relação'],
  [/\bdist\?ncia\b/g, 'distância'],
  [/\bcompat\?vel\b/g, 'compatível'],
  [/\bcorre\?\?es\b/g, 'correções'],
  [/\bcorre\?o\b/g, 'correção'],
  [/\brefra\?o\b/g, 'refração'],
  [/\bal\?m\b/g, 'além'],
  [/\bN\?utico\b/g, 'Náutico'],
  [/\bc\?lculo\b/g, 'cálculo'],
  [/\bnecess\?ria\b/g, 'necessária'],
  [/\bhor\?rio\b/g, 'horário'],
  [/\bpadr\?o\b/g, 'padrão'],
  [/\b\?ngulo\b/g, 'ângulo'],
  [/\bZ\?nite\b/g, 'Zênite'],
  [/\bz\?nite\b/g, 'zênite'],
  [/\bpar\?metros\b/g, 'parâmetros'],
  [/\bmanh\?\b/g, 'manhã'],
  [/\bn\?uticas\b/g, 'náuticas'],
  [/\bn\?utico\b/g, 'náutico'],
  [/\bpa\?s\b/g, 'país'],
  [/\bm\?ximo\b/g, 'máximo'],
  [/\bvis\?vel\b/g, 'visível'],
  [/\bpr\?prio\b/g, 'próprio'],
  [/\bind\?ce\b/g, 'índice'],
  [/\bp\?e\b/g, 'põe'],
  [/\bp\?r\b/g, 'pôr'],
  [/\bn\?o\b/g, 'não'],
  [/\bquest\?o\b/g, 'questão'],
  [/\bquest\?es\b/g, 'questões'],
]

const symbolReplacements: Array<[RegExp, string]> = [
  [/\?\u00C6\u2019[^A-Za-z0-9]*\u00E2\u201A\u00AC\u00C5\u00A1[^A-Za-z0-9]*\u00E2\u20AC\u0161\u00C3\u201A\u00B0/g, '°'],
  [/\?{2,}\u00C6\u2019[^A-Za-z0-9]*\u00E2\u201A\u00AC\u00C5\u00A1[^A-Za-z0-9]*\u00E2\u20AC\u0161\u00C3\u201A\u00B0/g, '°'],
  [/\?{4}/g, "'"],
  [/\?\u00C6\u2019\u00C3\u2026\u00BD\?\u00E2\u20AC\u0161\u00C3\u201A\u00BB/g, 'λ'],
  [/\?\?\u00E2\u20AC\u0161\u00AC\u00C3\u201A\u00A0/g, 'φ'],
]

export function sanitizeText(value: string): string {
  let result = value

  for (const [from, to] of directReplacements) {
    result = result.split(from).join(to)
  }

  for (const [pattern, replacement] of symbolReplacements) {
    result = result.replace(pattern, replacement)
  }

  for (const [pattern, replacement] of phraseReplacements) {
    result = result.replace(pattern, replacement)
  }

  return result.normalize('NFC')
}

export function sanitizeQuestion(question: Question): Question {
  return {
    ...question,
    subject: sanitizeText(question.subject),
    topic: sanitizeText(question.topic),
    exam: sanitizeText(question.exam),
    source: question.source ? sanitizeText(question.source) : question.source,
    statement: sanitizeText(question.statement),
    options: {
      A: sanitizeText(question.options.A),
      B: sanitizeText(question.options.B),
      C: sanitizeText(question.options.C),
      D: sanitizeText(question.options.D),
      E: sanitizeText(question.options.E),
    },
    explanation: sanitizeText(question.explanation),
    attachments: question.attachments?.map((attachment) => ({
      ...attachment,
      label: sanitizeText(attachment.label),
    })),
  }
}
