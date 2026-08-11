const exactStudyLabels: Record<string, string> = {
  astronomia: 'Navegação astronômica',
  comunicacoes: 'Comunicações',
  estabilidade: 'Estabilidade',
  meteorologia: 'Meteorologia',
  navegacao: 'Navegação costeira',
  'navegacao-eletronica': 'Navegação eletrônica',
  sobrevivencia: 'Sobrevivência no mar',
  'capitao-amador': 'Capitão-Amador',
  'arrais-amador': 'Arrais-Amador',
  'mestre-amador': 'Mestre-Amador',
}

const wordReplacements: Record<string, string> = {
  agua: 'água',
  aguas: 'águas',
  amortizacao: 'amortização',
  aproximacao: 'aproximação',
  areas: 'áreas',
  astronomica: 'astronômica',
  balanco: 'balanço',
  bussola: 'bússola',
  calculo: 'cálculo',
  capitao: 'capitão',
  comunicacao: 'comunicação',
  comunicacoes: 'comunicações',
  condicao: 'condição',
  condicoes: 'condições',
  consciencia: 'consciência',
  correcao: 'correção',
  critica: 'crítica',
  critico: 'crítico',
  decisao: 'decisão',
  degradacao: 'degradação',
  direcao: 'direção',
  distancia: 'distância',
  distribuicao: 'distribuição',
  eletronica: 'eletrônica',
  eletronico: 'eletrônico',
  embarcacao: 'embarcação',
  embarcacoes: 'embarcações',
  emergencia: 'emergência',
  emergencias: 'emergências',
  equilibrio: 'equilíbrio',
  estacao: 'estação',
  estimada: 'estimada',
  evolucao: 'evolução',
  fundeio: 'fundeio',
  identificacao: 'identificação',
  incendio: 'incêndio',
  inclinacao: 'inclinação',
  integracao: 'integração',
  legislacao: 'legislação',
  liquidos: 'líquidos',
  marcacao: 'marcação',
  marcacoes: 'marcações',
  mare: 'maré',
  mares: 'marés',
  meteorologia: 'meteorologia',
  nautica: 'náutica',
  nautico: 'náutico',
  navegacao: 'navegação',
  observacao: 'observação',
  operacao: 'operação',
  pane: 'pane',
  posicao: 'posição',
  protecao: 'proteção',
  propulsao: 'propulsão',
  referencia: 'referência',
  referencias: 'referências',
  revisao: 'revisão',
  rotacao: 'rotação',
  seguranca: 'segurança',
  solucao: 'solução',
  sobrevivencia: 'sobrevivência',
  superficie: 'superfície',
  tecnico: 'técnico',
  termica: 'térmica',
  trafego: 'tráfego',
  variacao: 'variação',
  verificacao: 'verificação',
}

const lowercaseConnectors = new Set(['a', 'ao', 'as', 'com', 'da', 'de', 'do', 'dos', 'e', 'em', 'na', 'no', 'para'])
const acronyms = new Set(['ais', 'cog', 'epirb', 'gmdss', 'gm', 'gnss', 'gps', 'hdop', 'iala', 'mmsi', 'ripeam', 'sart', 'sog', 'tpc', 'vhf'])

function formatWord(word: string, index: number) {
  const normalizedWord = word.toLowerCase()

  if (acronyms.has(normalizedWord)) {
    return normalizedWord.toUpperCase()
  }

  const replaced = wordReplacements[normalizedWord] ?? normalizedWord

  if (index > 0 && lowercaseConnectors.has(replaced)) {
    return replaced
  }

  return replaced.charAt(0).toUpperCase() + replaced.slice(1)
}

function formatSegment(segment: string) {
  return segment
    .trim()
    .split(/[-_\s]+/g)
    .filter(Boolean)
    .map(formatWord)
    .join(' ')
}

export function formatStudyLabel(value: string) {
  const trimmedValue = value.trim()
  const normalizedValue = trimmedValue.toLowerCase()

  if (exactStudyLabels[normalizedValue]) {
    return exactStudyLabels[normalizedValue]
  }

  return trimmedValue
    .split('/')
    .map(formatSegment)
    .filter(Boolean)
    .join(' / ')
}
