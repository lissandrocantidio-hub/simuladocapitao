import { Question } from '../../types/questions'

export const comunicacoesQuestionsPart2: Question[] = [
  {
    id: 2102201,
    subject: 'comunicacoes',
    topic: 'VHF / canal 16',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'No servico movel maritimo, o canal 16 em VHF e tradicionalmente utilizado para:',
    options: {
      A: 'Comunicacoes recreativas prolongadas',
      B: 'Chamada, socorro, urgencia e segurança',
      C: 'Transmissao exclusiva de dados meteorologicos locais',
      D: 'Conversas privadas entre embarcações do mesmo clube',
      E: 'Teste continuo de equipamentos',
    },
    correct: 'B',
    explanation:
      'O canal 16 deve ficar livre para chamada e mensagens de socorro, urgencia e segurança, sendo canal fundamental no VHF maritimo.',
  },
  {
    id: 2102202,
    subject: 'comunicacoes',
    topic: 'PAN PAN',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'A expressao radiotelefonica "PAN PAN" deve ser empregada quando houver:',
    options: {
      A: 'Situacao de urgencia sem perigo imediato para a vida ou a embarcação',
      B: 'Socorro com risco grave e iminente',
      C: 'Somente teste de transmissor',
      D: 'Mensagem de rotina ao porto',
      E: 'Aviso de previsao do tempo',
    },
    correct: 'A',
    explanation:
      'PAN PAN indica urgencia: situação importante que requer atenção, mas sem gravidade extrema que caracterize MAYDAY.',
  },
  {
    id: 2102203,
    subject: 'comunicacoes',
    topic: 'SECURITE',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'A palavra "SECURITE" é usada para anunciar mensagens relativas a:',
    options: {
      A: 'Seguranca da navegação ou avisos meteorologicos',
      B: 'Abandono imediato da embarcação',
      C: 'Pedido de reboque com risco de afundamento',
      D: 'Prioridade administrativa portuaria',
      E: 'Confirmacao de recebimento de PAN PAN',
    },
    correct: 'A',
    explanation:
      'SECURITE antecede mensagens de segurança, como avisos a navegantes e informacoes meteorologicas relevantes.',
  },
  {
    id: 2102204,
    subject: 'comunicacoes',
    topic: 'VHF / disciplina de radio',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'Ao utilizar o rádio VHF, a pratica mais adequada é:',
    options: {
      A: 'Transmitir mensagens longas e sem identificacao',
      B: 'Ocupar o canal 16 com conversas operacionais demoradas',
      C: 'Falar de modo claro, breve e objetivo',
      D: 'Usar codigo nao padronizado para evitar entendimento externo',
      E: 'Testar o equipamento continuamente no canal de chamada',
    },
    correct: 'C',
    explanation:
      'Boa disciplina de rádio exige comunicação clara, curta e objetiva, preservando os canais para uso eficiente e seguro.',
  },
  {
    id: 2102205,
    subject: 'comunicacoes',
    topic: 'EPIRB / finalidade',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'A principal finalidade de um EPIRB é:',
    options: {
      A: 'Medir profundidade sob a quilha',
      B: 'Indicar emergência e facilitar localizacao para busca e salvamento',
      C: 'Transmitir previsao de maré para marinas',
      D: 'Substituir o radar em nevoeiro',
      E: 'Determinar a proa verdadeira',
    },
    correct: 'B',
    explanation:
      'O EPIRB emite alerta de emergência e ajuda os servicos de busca e salvamento na localizacao da ocorrencia.',
  },
  {
    id: 2102206,
    subject: 'comunicacoes',
    topic: 'SART / radar',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'O SART e um equipamento utilizado principalmente para:',
    options: {
      A: 'Gerar cartas meteorologicas a bordo',
      B: 'Responder a radares e auxiliar na localizacao de sobreviventes',
      C: 'Substituir o GPS em navegação oceanica',
      D: 'Transmitir rotineiramente a posição ao porto',
      E: 'Calcular o rumo magnetico',
    },
    correct: 'B',
    explanation:
      'O SART responde a sinais de radar, ajudando a localizar balsas ou embarcações em situação de emergência.',
  },
  {
    id: 2102207,
    subject: 'comunicacoes',
    topic: 'NAVTEX / MSI',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'O receptor NAVTEX destina-se a receber automaticamente:',
    options: {
      A: 'Chamadas telefonicas da autoridade maritima',
      B: 'Informacoes de segurança maritima, como avisos e meteorologia',
      C: 'Imagens de radar costeiro',
      D: 'Dados de consumo de combustível',
      E: 'Instrucao de manobra entre rebocadores',
    },
    correct: 'B',
    explanation:
      'O NAVTEX recebe MSI, incluindo avisos aos navegantes e boletins meteorologicos importantes para a segurança.',
  },
  {
    id: 2102208,
    subject: 'comunicacoes',
    topic: 'MAYDAY / conteudo da mensagem',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'Em uma mensagem MAYDAY, uma das informacoes mais importantes a ser transmitida é:',
    options: {
      A: 'Preferencia musical da tripulacao',
      B: 'Cor da defensagem da embarcação',
      C: 'Posicao da embarcação e natureza da emergência',
      D: 'Nome do estaleiro construtor',
      E: 'Consumo medio horário do motor',
    },
    correct: 'C',
    explanation:
      'Em socorro, a posição e a natureza da emergência são essenciais para orientar rapidamente a resposta de busca e salvamento.',
  },
  {
    id: 2102209,
    subject: 'comunicacoes',
    topic: 'DSC / VHF',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'O DSC no VHF permite principalmente:',
    options: {
      A: 'Chamada seletiva digital entre estacoes',
      B: 'Medição da velocidade da embarcação',
      C: 'Geracao automatica de cartas',
      D: 'Correcao do desvio da bússola',
      E: 'Controle remoto do leme',
    },
    correct: 'A',
    explanation:
      'DSC significa chamada seletiva digital, recurso usado para alertas é chamadas automatizadas entre estacoes rádio.',
  },
  {
    id: 2102210,
    subject: 'comunicacoes',
    topic: 'obrigacao de assistencia',
    year: 2025,
    exam: 'Simulado Comunicacoes',
    verified: true,
    statement:
      'Ao receber um pedido de socorro por rádio e estando em condição de auxiliar com segurança, a embarcação deve:',
    options: {
      A: 'Ignorar a chamada ate nova confirmacao',
      B: 'Registrar apenas no diario e seguir viagem',
      C: 'Prestar ou providenciar assistencia conforme as possibilidades',
      D: 'Desligar o rádio para evitar interferencia',
      E: 'Aguardar ordem exclusiva da marina mais próxima',
    },
    correct: 'C',
    explanation:
      'A assistencia a quem esta em perigo no mar e dever relevante, desde que prestada sem comprometer indevidamente a própria segurança.',
  },
]
