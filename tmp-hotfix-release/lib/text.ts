import type { Question } from '@/types/questions'

const MOJIBAKE_MARKERS = /[\u00C2\u00C3\u00E2\u00F0\uFFFD]/g

const directReplacements: Array<[string, string]> = [
  ['\u00C3\u00A1', '\u00E1'],
  ['\u00C3\u00A2', '\u00E2'],
  ['\u00C3\u00A3', '\u00E3'],
  ['\u00C3\u00A4', '\u00E4'],
  ['\u00C3\u00A9', '\u00E9'],
  ['\u00C3\u00AA', '\u00EA'],
  ['\u00C3\u00AD', '\u00ED'],
  ['\u00C3\u00B3', '\u00F3'],
  ['\u00C3\u00B4', '\u00F4'],
  ['\u00C3\u00B5', '\u00F5'],
  ['\u00C3\u00B6', '\u00F6'],
  ['\u00C3\u00BA', '\u00FA'],
  ['\u00C3\u00A7', '\u00E7'],
  ['\u00C3\u0081', '\u00C1'],
  ['\u00C3\u0082', '\u00C2'],
  ['\u00C3\u0080', '\u00C0'],
  ['\u00C3\u0089', '\u00C9'],
  ['\u00C3\u008A', '\u00CA'],
  ['\u00C3\u008D', '\u00CD'],
  ['\u00C3\u0093', '\u00D3'],
  ['\u00C3\u0094', '\u00D4'],
  ['\u00C3\u0095', '\u00D5'],
  ['\u00C3\u009A', '\u00DA'],
  ['\u00C3\u0087', '\u00C7'],
  ['\u00C3\u00A0', '\u00E0'],
  ['\u00C3\u00A8', '\u00E8'],
  ['\u00C3\u00B9', '\u00F9'],
  ['\u00C3\u00BC', '\u00FC'],
  ['\u00C2\u00B0', '\u00B0'],
  ['\u00C2\u00BA', '\u00BA'],
  ['\u00C2\u00AA', '\u00AA'],
  ['\u00C2\u00B7', '\u00B7'],
  ['\u00E2\u20AC\u2122', '\u2019'],
  ['\u00E2\u20AC\u0153', '\u201C'],
  ['\u00E2\u20AC\u009D', '\u201D'],
  ['\u00E2\u20AC\u02DC', '\u2018'],
  ['\u00E2\u20AC\u201C', '\u2013'],
  ['\u00E2\u20AC\u201D', '\u2014'],
  ['\u00E2\u20AC\u00A6', '\u2026'],
  ['\u00E2\u2020\u2019', '\u2192'],
  ['\u00F0\u0178\u201D\u00B9', '\u2022'],
  ['\u00F0\u0178\u2018\u2030', '\u2192'],
]

const wrapperReplacements: Array<[string, string]> = [
  ['\u00C3\u0192\u00C2', '\u00C3'],
  ['\u00C3\u201A\u00C2', '\u00C2'],
]

const phraseReplacements: Array<[RegExp, string]> = [
  [/\bsituacao\b/g, 'situação'],
  [/\bsituacoes\b/g, 'situações'],
  [/\bSituacao\b/g, 'Situa\u00E7\u00E3o'],
  [/\bSituações\b/g, 'Situações'],
  [/\bCapitao\b/g, 'Capit\u00E3o'],
  [/\bMediterraneo\b/g, 'Mediterr\u00E2neo'],
  [/\bMonaco\b/g, 'M\u00F4naco'],
  [/\bposicao\b/g, 'posi\u00E7\u00E3o'],
  [/\bPosicao\b/g, 'Posição'],
  [/\bcondicao\b/g, 'condição'],
  [/\bcondicoes\b/g, 'condições'],
  [/\bCondicoes\b/g, 'Condições'],
  [/\bseguranca\b/g, 'segurança'],
  [/\bSeguranca\b/g, 'Segurança'],
  [/\bnavegacao\b/g, 'navegação'],
  [/\bNavegacao\b/g, 'Navegação'],
  [/\bastronomica\b/g, 'astron\u00F4mica'],
  [/\bMedia\b/g, 'M\u00E9dia'],
  [/\bculminacao\b/g, 'culmina\u00E7\u00E3o'],
  [/\bembarcacao\b/g, 'embarca\u00E7\u00E3o'],
  [/\bEmbarcacao\b/g, 'Embarcação'],
  [/\bembarcacoes\b/g, 'embarcações'],
  [/\bEmbarcacoes\b/g, 'Embarcações'],
  [/\bDiferenca\b/g, 'Diferen\u00E7a'],
  [/\bdeclinacao\b/g, 'declina\u00E7\u00E3o'],
  [/\brelacao\b/g, 'rela\u00E7\u00E3o'],
  [/\brelacoes\b/g, 'relações'],
  [/\bdistancia\b/g, 'dist\u00E2ncia'],
  [/\bdistancias\b/g, 'distâncias'],
  [/\bcompativel\b/g, 'compat\u00EDvel'],
  [/\bcompativeis\b/g, 'compatíveis'],
  [/\bcorrecoes\b/g, 'corre\u00E7\u00F5es'],
  [/\bcorrecao\b/g, 'corre\u00E7\u00E3o'],
  [/\brefracao\b/g, 'refra\u00E7\u00E3o'],
  [/\balem\b/g, 'al\u00E9m'],
  [/\bNautico\b/g, 'N\u00E1utico'],
  [/\bcalculo\b/g, 'c\u00E1lculo'],
  [/\bcalculos\b/g, 'cálculos'],
  [/\bnecessaria\b/g, 'necess\u00E1ria'],
  [/\bnecessario\b/g, 'necessário'],
  [/\bnecessarios\b/g, 'necessários'],
  [/\bnecessarias\b/g, 'necessárias'],
  [/\bhorario\b/g, 'hor\u00E1rio'],
  [/\bhorarios\b/g, 'horários'],
  [/\bpadrao\b/g, 'padr\u00E3o'],
  [/\bangulo\b/g, '\u00E2ngulo'],
  [/\bZenite\b/g, 'Z\u00EAnite'],
  [/\bzenite\b/g, 'z\u00EAnite'],
  [/\bparametros\b/g, 'par\u00E2metros'],
  [/\bmanha\b/g, 'manh\u00E3'],
  [/\bnauticas\b/g, 'n\u00E1uticas'],
  [/\bnautico\b/g, 'n\u00E1utico'],
  [/\bpais\b/g, 'pa\u00EDs'],
  [/\bmaximo\b/g, 'm\u00E1ximo'],
  [/\bmaxima\b/g, 'máxima'],
  [/\bminimo\b/g, 'mínimo'],
  [/\bminima\b/g, 'mínima'],
  [/\bvisivel\b/g, 'vis\u00EDvel'],
  [/\bvisiveis\b/g, 'visíveis'],
  [/\bproprio\b/g, 'pr\u00F3prio'],
  [/\bpropria\b/g, 'própria'],
  [/\bproximos\b/g, 'próximos'],
  [/\bproximo\b/g, 'próximo'],
  [/\bproxima\b/g, 'próxima'],
  [/\bproximas\b/g, 'próximas'],
  [/\bindice\b/g, '\u00EDndice'],
  [/\bpoe\b/g, 'p\u00F5e'],
  [/\bnao\b/g, 'n\u00E3o'],
  [/\bquestao\b/g, 'quest\u00E3o'],
  [/\bquestoes\b/g, 'quest\u00F5es'],
  [/\bmare\b/g, 'maré'],
  [/\bMare\b/g, 'Maré'],
  [/\bagua\b/g, 'água'],
  [/\bAgua\b/g, 'Água'],
  [/\bhelice\b/g, 'hélice'],
  [/\bHelice\b/g, 'Hélice'],
  [/\bbussola\b/g, 'bússola'],
  [/\bBussola\b/g, 'Bússola'],
  [/\btrafego\b/g, 'tráfego'],
  [/\bTrafego\b/g, 'Tráfego'],
  [/\bcolisao\b/g, 'colisão'],
  [/\bColisao\b/g, 'Colisão'],
  [/\bcomunicacao\b/g, 'comunicação'],
  [/\bComunicacao\b/g, 'Comunicação'],
  [/\binformacao\b/g, 'informação'],
  [/\bInformacao\b/g, 'Informação'],
  [/\bavaliacao\b/g, 'avaliação'],
  [/\bAvaliacao\b/g, 'Avaliação'],
  [/\binterpretacao\b/g, 'interpretação'],
  [/\bInterpretacao\b/g, 'Interpretação'],
  [/\bidentificacao\b/g, 'identificação'],
  [/\bIdentificacao\b/g, 'Identificação'],
  [/\baproximacao\b/g, 'aproximação'],
  [/\bAproximacao\b/g, 'Aproximação'],
  [/\borganizacao\b/g, 'organização'],
  [/\bOrganizacao\b/g, 'Organização'],
  [/\bprotecao\b/g, 'proteção'],
  [/\bProtecao\b/g, 'Proteção'],
  [/\bpropulsao\b/g, 'propulsão'],
  [/\bPropulsao\b/g, 'Propulsão'],
  [/\bemergencia\b/g, 'emergência'],
  [/\bEmergencia\b/g, 'Emergência'],
  [/\bmedica\b/g, 'médica'],
  [/\bMedica\b/g, 'Médica'],
  [/\bvitima\b/g, 'vítima'],
  [/\bVitima\b/g, 'Vítima'],
  [/\bconsciencia\b/g, 'consciência'],
  [/\bConsciencia\b/g, 'Consciência'],
  [/\brespiracao\b/g, 'respiração'],
  [/\bRespiracao\b/g, 'Respiração'],
  [/\brotacao\b/g, 'rotação'],
  [/\bRotacao\b/g, 'Rotação'],
  [/\bdirecao\b/g, 'direção'],
  [/\bDirecao\b/g, 'Direção'],
  [/\bsinalizacao\b/g, 'sinalização'],
  [/\bSinalizacao\b/g, 'Sinalização'],
  [/\bconteudo\b/g, 'conteúdo'],
  [/\bConteudo\b/g, 'Conteúdo'],
  [/\bconfianca\b/g, 'confiança'],
  [/\bConfianca\b/g, 'Confiança'],
  [/\brazoavel\b/g, 'razoável'],
  [/\bRazoavel\b/g, 'Razoável'],
  [/\bperiodo\b/g, 'período'],
  [/\bPeriodo\b/g, 'Período'],
  [/\bpossivel\b/g, 'possível'],
  [/\bPossivel\b/g, 'Possível'],
  [/\bcritico\b/g, 'crítico'],
  [/\bCritico\b/g, 'Crítico'],
]

function countMojibakeMarkers(value: string) {
  return (value.match(MOJIBAKE_MARKERS) ?? []).length
}

function repairLatin1Utf8(value: string) {
  const bytes = Uint8Array.from(Array.from(value, (char) => char.charCodeAt(0) & 0xff))

  return new TextDecoder('utf-8', { fatal: false }).decode(bytes)
}

function repairMojibake(value: string) {
  let result = value

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const currentScore = countMojibakeMarkers(result)

    if (currentScore === 0) {
      break
    }

    const repaired = repairLatin1Utf8(result)
    const repairedScore = countMojibakeMarkers(repaired)

    if (repairedScore < currentScore) {
      result = repaired
      continue
    }

    break
  }

  return result
}

export function sanitizeText(value: string): string {
  for (const [from, to] of wrapperReplacements) {
    value = value.split(from).join(to)
  }

  for (const [from, to] of directReplacements) {
    value = value.split(from).join(to)
  }

  let result = repairMojibake(value)

  for (const [from, to] of wrapperReplacements) {
    result = result.split(from).join(to)
  }

  for (const [from, to] of directReplacements) {
    result = result.split(from).join(to)
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
