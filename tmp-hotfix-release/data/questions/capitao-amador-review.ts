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
  const area = getArea(question)
  const topic = normalizeKey(question.topic)

  if (area === 'eletronica') {
    if (topic.includes('radar')) {
      return 'Durante uma derrota costeira com visibilidade reduzida ou trafego relevante, considerando o uso do radar como apoio a identificacao de alvos, controle da aproximacao e confirmacao da seguranca da derrota'
    }

    if (topic.includes('ais') || topic.includes('gnss') || topic.includes('gps') || topic.includes('integracao')) {
      return 'Durante o planejamento e a execucao de uma navegacao com apoio de GNSS, AIS e outros recursos integrados de bordo, considerando a necessidade de confrontar os dados eletronicos com a situacao real'
    }

    return 'Durante a navegacao eletronica de uma embarcacao de esporte e recreio, considerando alarmes, configuracoes, limites dos sensores e a necessidade de confirmacao critica dos dados apresentados'
  }

  if (area === 'estabilidade') {
    return 'Ao avaliar a estabilidade de uma embarcacao de esporte e recreio em condicoes reais de operacao, considerando distribuicao de pesos, liquidos livres, borda livre e margem de seguranca antes de enfrentar mar alterado'
  }

  if (topic.includes('mare')) {
    return 'Durante o planejamento de uma passagem em aguas rasas ou de uma demanda a porto, considerando a profundidade cartografada, a variacao da mare ao longo do tempo e a folga sob a quilha necessaria'
  }

  if (topic.includes('isobata') || topic.includes('sondagem')) {
    return 'Durante a navegacao costeira em trecho com poucas referencias visuais, considerando o acompanhamento das isobatas, as leituras de sonda e a necessidade de manter distancia segura dos perigos'
  }

  if (topic.includes('alinhamento') || topic.includes('ponto-corrido') || topic.includes('marcacao')) {
    return 'Durante a execucao de uma derrota costeira com necessidade de controle rigoroso da posicao, considerando o emprego de alinhamentos, marcacoes e transporte de linhas de posicao na carta'
  }

  return 'Durante o planejamento ou a execucao de uma derrota costeira de Capitao-Amador, considerando carta nautica, profundidade disponivel, margem em relacao aos perigos e monitoramento continuo da posicao'
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
  const area = getArea(question)
  const topic = normalizeKey(question.topic)

  if (area === 'eletronica') {
    if (topic.includes('radar')) {
      return 'Em prova e na pratica, a resposta correta costuma ser a que reconhece o radar como ferramenta de apoio valiosa, mas dependente de ajuste de ganho, escala, interpretacao dos ecos e comparacao com outros meios de navegacao.'
    }

    return 'O ponto didatico e que o equipamento eletronico auxilia a decisao, mas precisa ser interpretado junto com carta, vigia, alarmes e condicoes reais de navegacao.'
  }

  if (area === 'estabilidade') {
    return 'Para resolver questoes desse tipo, relacione a resposta ao centro de gravidade, ao empuxo, ao braco de adricamento e a reserva de borda livre disponivel.'
  }

  if (topic.includes('mare')) {
    return 'Em questoes de mare, vale sempre conferir o horario da passagem, a referencia vertical da carta, a necessidade de interpolacao e a folga sob a quilha desejada antes de concluir qual alternativa e mais segura.'
  }

  if (topic.includes('isobata') || topic.includes('sondagem')) {
    return 'Quando a prova tratar de isobatas ou sondagens, a melhor leitura e a que usa a profundidade como confirmacao de posicao, nunca como unico elemento isolado da carta e da observacao ao redor.'
  }

  return 'Na pratica, a alternativa correta e a que mantem margem de seguranca, usa a carta de forma critica e confirma a posicao por mais de uma referencia sempre que possivel.'
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
