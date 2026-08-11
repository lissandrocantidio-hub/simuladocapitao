import type { Question } from '../../types/questions'

export const mestreAmadorQuestionsPart2: Question[] = [
  {
    id: 8201,
    subject: 'mestre-amador',
    topic: 'navegacao-planejamento',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'No planejamento de uma derrota costeira, uma das providencias basicas antes da saida e:',
    options: {
      A: 'Definir a rota aproximada e verificar condicoes de tempo e mar',
      B: 'Navegar sem carta porque o GPS substitui todo planejamento',
      C: 'Ignorar locais de abrigo no trajeto',
      D: 'Sair com autonomia minima para reduzir peso',
      E: 'Dispensar qualquer consulta a avisos aos navegantes',
    },
    correct: 'A',
    explanation:
      'Planejamento adequado inclui rota, alternativas de abrigo, autonomia e verificacao de previsao e informacoes nauticas relevantes.',
    conceptKey: 'mes.planejamento.derrota-basica',
    difficulty: 'easy',
  },
  {
    id: 8202,
    subject: 'mestre-amador',
    topic: 'carta-nautica',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Ao utilizar uma carta nautica, o navegante deve considerar que profundidades e acidentes podem sofrer alteracoes, devendo por isso consultar:',
    options: {
      A: 'Somente folhetos turisticos',
      B: 'Avisos aos navegantes e atualizacoes pertinentes',
      C: 'Apenas previsao de vento',
      D: 'Qualquer mapa rodoviario da regiao',
      E: 'Exclusivamente relatos informais antigos',
    },
    correct: 'B',
    explanation:
      'Avisos aos navegantes e outras atualizacoes oficiais ajudam a manter o uso da carta compatível com a situacao mais recente da area.',
    conceptKey: 'mes.carta.atualizacao',
    difficulty: 'easy',
  },
  {
    id: 8203,
    subject: 'mestre-amador',
    topic: 'mares-e-correntes',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Ao transitar por barra estreita com corrente significativa, o comandante deve:',
    options: {
      A: 'Ignorar o efeito da corrente sobre a derrota',
      B: 'Considerar abatimento, governo e janela de maré',
      C: 'Entrar com velocidade minima sempre, independentemente das condicoes',
      D: 'Usar apenas o rumo da bussola sem observar referencias externas',
      E: 'Manter o piloto desatento ao trafego local',
    },
    correct: 'B',
    explanation:
      'Correntes alteram a derrota e exigem avaliacao de maré, espaco de manobra e governo efetivo da embarcacao.',
    conceptKey: 'mes.mares.corrente-em-barra',
    difficulty: 'medium',
  },
  {
    id: 8204,
    subject: 'mestre-amador',
    topic: 'meteorologia',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Queda acentuada de pressao, aumento de nebulosidade e piora da visibilidade sugerem ao navegante:',
    options: {
      A: 'Tendencia de deterioracao do tempo',
      B: 'Condicoes invariavelmente estaveis',
      C: 'Ausencia de vento nas horas seguintes',
      D: 'Melhora imediata do estado do mar',
      E: 'Erro certo de leitura do barometro',
    },
    correct: 'A',
    explanation:
      'Esses sinais costumam indicar aproximacao de sistema instavel e exigem reavaliacao prudente da navegacao.',
    conceptKey: 'mes.meteo.sinais-instabilidade',
    difficulty: 'easy',
  },
  {
    id: 8205,
    subject: 'mestre-amador',
    topic: 'ripeam-regras-de-governo',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Em rota de colisao entre duas embarcacoes a motor, cada uma vendo a outra pela proa ou quase pela proa, a regra geral determina:',
    options: {
      A: 'Guinada para boreste por ambas, passando por bombordo uma da outra',
      B: 'Guinada para bombordo por ambas',
      C: 'Manutencao obrigatoria de rumo e velocidade pelas duas',
      D: 'Parada imediata das duas embarcacoes',
      E: 'Prioridade automatica da embarcacao menor',
    },
    correct: 'A',
    explanation:
      'Na situacao de roda a roda entre embarcacoes a motor, a manobra geral e guinar para boreste.',
    conceptKey: 'mes.ripeam.roda-a-roda',
    difficulty: 'easy',
  },
  {
    id: 8206,
    subject: 'mestre-amador',
    topic: 'fundeio-e-atracacao',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Ao fundear em local abrigado, uma boa pratica e:',
    options: {
      A: 'Lancar a ancora sem verificar profundidade e tenedouro',
      B: 'Confirmar profundidade, espaco de giro e tipo de fundo',
      C: 'Usar o minimo de amarra para economizar cabo',
      D: 'Fundear no canal de trafego para facilitar a saida',
      E: 'Dispensar vigilancia apos o fundeio',
    },
    correct: 'B',
    explanation:
      'Fundeio seguro exige avaliar profundidade, tenedouro, espaco para giro e vigilancia posterior.',
    conceptKey: 'mes.fundeio.verificacoes',
    difficulty: 'easy',
  },
  {
    id: 8207,
    subject: 'mestre-amador',
    topic: 'radar',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Em navegacao com visibilidade restrita, o radar auxilia principalmente na:',
    options: {
      A: 'Substituicao completa da vigilancia visual e auditiva',
      B: 'Deteccao de alvos e avaliacao do entorno',
      C: 'Correcao automatica do desvio da bussola',
      D: 'Determinacao da profundidade real sob a quilha',
      E: 'Emissao de avisos radioautomaticos pelo canal 16',
    },
    correct: 'B',
    explanation:
      'O radar e valioso para detectar alvos e monitorar o entorno, mas nao substitui todas as demais medidas de seguranca.',
    conceptKey: 'mes.radar.uso-basico',
    difficulty: 'medium',
  },
  {
    id: 8208,
    subject: 'mestre-amador',
    topic: 'gnss-gps',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Mesmo navegando com GPS ou chartplotter, o condutor prudente deve:',
    options: {
      A: 'Dispensar qualquer referencia visual ou conferencia cruzada',
      B: 'Usar outras referencias e monitorar coerencia da posicao',
      C: 'Confiar exclusivamente no zoom maximo da tela',
      D: 'Ignorar alarmes do equipamento se a rota parecer correta',
      E: 'Reduzir a atencao ao trafego ao redor',
    },
    correct: 'B',
    explanation:
      'A navegacao segura utiliza conferencia cruzada entre meios eletronicos, referencias externas e situacao real da embarcacao.',
    conceptKey: 'mes.gnss.conferencia-cruzada',
    difficulty: 'easy',
  },
  {
    id: 8209,
    subject: 'mestre-amador',
    topic: 'estabilidade',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Distribuicao inadequada de pessoas e materiais em pequena embarcacao pode provocar:',
    options: {
      A: 'Melhora espontanea da estabilidade',
      B: 'Banda, trim excessivo e navegacao insegura',
      C: 'Reducao do efeito do vento lateral',
      D: 'Aumento automatico do franco-bordo',
      E: 'Anulacao do movimento do mar',
    },
    correct: 'B',
    explanation:
      'Peso mal distribuido afeta trim, banda e estabilidade, comprometendo o governo e a seguranca.',
    conceptKey: 'mes.estabilidade.distribuicao-pesos',
    difficulty: 'easy',
  },
  {
    id: 8210,
    subject: 'mestre-amador',
    topic: 'comunicacoes',
    year: 2026,
    exam: 'Simulado Mestre Amador',
    verified: true,
    statement:
      'Em uma situacao de urgencia no mar, sem perigo grave e iminente, o prefixo radiotelefonico adequado e:',
    options: {
      A: 'MAYDAY',
      B: 'PAN PAN',
      C: 'SECURITE',
      D: 'STOP',
      E: 'ROGER',
    },
    correct: 'B',
    explanation:
      'PAN PAN e usado para urgencia; MAYDAY fica reservado a situacoes de socorro grave e iminente.',
    conceptKey: 'mes.comunicacoes.pan-pan',
    difficulty: 'easy',
  },
]
