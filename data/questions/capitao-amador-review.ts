import type { Question } from '../../types/questions'

function repairTextArtifacts(value: string) {
  return value
    .replace(/l\?quido/gi, 'liquido')
    .replace(/l\?quidos/gi, 'liquidos')
    .replace(/\s+/g, ' ')
    .trim()
}

function normalizeKey(value: string) {
  return repairTextArtifacts(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function getArea(question: Question) {
  const text = repairTextArtifacts(`${question.topic} ${question.conceptKey || ''}`)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

  if (text.includes('estabilidade')) {
    return 'estabilidade'
  }

  if (text.includes('eletronica') || text.includes('gnss') || text.includes('gps') || text.includes('radar') || text.includes('ais') || text.includes('chartplotter')) {
    return 'eletronica'
  }

  return 'costeira'
}

function hasOperationalContext(statement: string) {
  const cleaned = repairTextArtifacts(statement)

  if (cleaned.length >= 135) {
    return true
  }

  return /^(ao|em|na|no|durante|antes|quando|se|para)\b/i.test(cleaned)
}

function buildStatementContext(question: Question) {
  const área = getArea(question)
  const topic = normalizeKey(question.topic)

  if (área === 'eletronica') {
    if (topic.includes('radar')) {
      return 'Durante uma derrota costeira com visibilidade reduzida ou tráfego relevante, considerando o uso do radar como apoio à identificação de alvos, controle da aproximação e confirmação da segurança da derrota'
    }

    if (topic.includes('ais') || topic.includes('gnss') || topic.includes('gps') || topic.includes('integracao')) {
      return 'Durante o planejamento e a execução de uma navegação com apoio de GNSS, AIS e outros recursos integrados de bordo, considerando a necessidade de confrontar os dados eletrônicos com a situação real'
    }

    return 'Durante à navegação eletrônica de uma embarcação de esporte e recreio, considerando alarmes, configurações, limites dos sensores e a necessidade de confirmação crítica dos dados apresentados'
  }

  if (área === 'estabilidade') {
    return 'Ao avaliar a estabilidade de uma embarcação de esporte e recreio em condições reais de operação, considerando distribuição de pesos, líquidos livres, borda livre e margem de segurança antes de enfrentar mar alterado'
  }

  if (topic.includes('maré')) {
    return 'Durante o planejamento de uma passagem em águas rasas ou de uma demanda a porto, considerando a profundidade cartografada, a variação da maré ao longo do tempo e a folga sob a quilha necessária'
  }

  if (topic.includes('isobata') || topic.includes('sondagem')) {
    return 'Durante à navegação costeira em trecho com poucas referências visuais, considerando o acompanhamento das isobatas, as leituras de sonda e a necessidade de manter distância segura dos perigos'
  }

  if (topic.includes('alinhamento') || topic.includes('ponto-corrido') || topic.includes('marcacao')) {
    return 'Durante a execução de uma derrota costeira com necessidade de controle rigoroso da posição, considerando o emprego de alinhamentos, marcações e transporte de linhas de posição na carta'
  }

  return 'Durante o planejamento ou a execução de uma derrota costeira de Capitão-Amador, considerando carta náutica, profundidade disponível, margem em relação aos perigos e monitoramento contínuo da posição'
}

function lowerFirst(value: string) {
  return value.charAt(0).toLowerCase() + value.slice(1)
}

function buildReviewedStatement(question: Question) {
  const statement = repairTextArtifacts(question.statement)

  if (hasOperationalContext(statement)) {
    return statement
  }

  const normalizedStatement = statement.replace(/[.]\s*$/, '').trim()
  const first = lowerFirst(normalizedStatement)

  return `${buildStatementContext(question)}, ${first}`
}

function withContext(question: Question) {
  return buildReviewedStatement(question)
}

function didacticAddon(question: Question) {
  const área = getArea(question)
  const topic = normalizeKey(question.topic)

  if (área === 'eletronica') {
    if (topic.includes('radar')) {
      return 'Em prova e na prática, a resposta correta costuma ser a que reconhece o radar como ferramenta de apoio valiosa, mas dependente de ajuste de ganho, escala, interpretação dos ecos e comparação com outros meios de navegação.'
    }

    return 'O ponto didático é que o equipamento eletrônico auxilia a decisão, mas precisa ser interpretado junto com carta, vigia, alarmes e condições reais de navegação.'
  }

  if (área === 'estabilidade') {
    return 'Para resolver questões desse tipo, relacione a resposta ao centro de gravidade, ao empuxo, ao braço de adriçamento e à reserva de borda livre disponível.'
  }

  if (topic.includes('maré')) {
    return 'Em questões de maré, vale sempre conferir o horário da passagem, a referência vertical da carta, a necessidade de interpolação e a folga sob a quilha desejada antes de concluir qual alternativa é mais segura.'
  }

  if (topic.includes('isobata') || topic.includes('sondagem')) {
    return 'Quando a prova tratar de isobatas ou sondagens, a melhor leitura é a que usa a profundidade como confirmação de posição, nunca como único elemento isolado da carta e da observação ao redor.'
  }

  return 'Na prática, a alternativa correta é a que mantém margem de segurança, usa a carta de forma crítica e confirma a posição por mais de uma referência sempre que possível.'
}

function withDidacticExplanation(question: Question) {
  const explanation = repairTextArtifacts(question.explanation)

  if (explanation.length >= 210) {
    return explanation
  }

  const addon = didacticAddon(question)

  if (explanation.includes(addon)) {
    return explanation
  }

  return `${explanation} ${addon}`
}

export function reviewCapitaoAmadorQuestion(question: Question): Question {
  return {
    ...question,
    topic: repairTextArtifacts(question.topic),
    conceptKey: question.conceptKey ? repairTextArtifacts(question.conceptKey) : question.conceptKey,
    groupKey: question.groupKey || `capitao-amador.${normalizeKey(question.topic)}`,
    statement: withContext(question),
    options: {
      A: repairTextArtifacts(question.options.A),
      B: repairTextArtifacts(question.options.B),
      C: repairTextArtifacts(question.options.C),
      D: repairTextArtifacts(question.options.D),
      E: repairTextArtifacts(question.options.E),
    },
    explanation: withDidacticExplanation(question),
  }
}
