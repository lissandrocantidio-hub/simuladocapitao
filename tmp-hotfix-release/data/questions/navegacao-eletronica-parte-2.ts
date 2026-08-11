import { Question } from '../../types/questions'

export const navegacaoEletronicaQuestionsPart2: Question[] = [
  {
    id: 2105201,
    subject: 'navegacao-eletronica',
    topic: 'gps / precisao',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Mesmo recebendo posicao do GPS, o navegante prudente deve:',
    options: {
      A: 'Confiar apenas no equipamento e dispensar conferencia',
      B: 'Cruzar a informacao com outros meios e com a situacao real',
      C: 'Desligar alarmes para evitar distracao',
      D: 'Usar a posicao somente quando parado',
      E: 'Ignorar referencias visuais proximas',
    },
    correct: 'B',
    explanation:
      'A posicao eletrônica deve ser conferida com outros meios e com a observacao do entorno para maior seguranca.',
  },
  {
    id: 2105202,
    subject: 'navegacao-eletronica',
    topic: 'chartplotter / escala',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Ao navegar em area restrita com chartplotter, e recomendavel utilizar:',
    options: {
      A: 'Escala adequada ao detalhe exigido pela area',
      B: 'Sempre a menor escala disponivel',
      C: 'Zoom excessivo independentemente da carta base',
      D: 'Somente a tela de rumo, sem carta',
      E: 'Apenas a configuracao noturna',
    },
    correct: 'A',
    explanation:
      'A escala deve ser compatível com o detalhe necessario para a navegacao segura, especialmente em areas restritas.',
  },
  {
    id: 2105203,
    subject: 'navegacao-eletronica',
    topic: 'radar / ganho',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Em radar, ajuste de ganho excessivamente alto tende a:',
    options: {
      A: 'Melhorar sempre a identificacao de alvos pequenos',
      B: 'Preencher a tela com ecos e ruidos desnecessarios',
      C: 'Eliminar ecos de chuva automaticamente',
      D: 'Aumentar o alcance fisico da antena',
      E: 'Corrigir erro de marcacao magnetica',
    },
    correct: 'B',
    explanation:
      'Ganho muito alto pode saturar a imagem com ruido e dificultar a interpretacao correta dos ecos.',
  },
  {
    id: 2105204,
    subject: 'navegacao-eletronica',
    topic: 'radar / clutter de chuva',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'O controle de rain clutter no radar serve para:',
    options: {
      A: 'Reduzir interferencias causadas por precipitacao',
      B: 'Aumentar o volume do alarme sonoro',
      C: 'Corrigir automaticamente a proa giroscopica',
      D: 'Substituir a regulagem de ganho',
      E: 'Medir a profundidade abaixo da quilha',
    },
    correct: 'A',
    explanation:
      'Esse recurso ajuda a minimizar ecos provocados por chuva, tornando a tela mais util para identificacao de alvos.',
  },
  {
    id: 2105205,
    subject: 'navegacao-eletronica',
    topic: 'ais / identificacao de trafego',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'O AIS contribui para a navegacao ao fornecer principalmente:',
    options: {
      A: 'Profundidade instantanea do fundo',
      B: 'Identificacao e dados de movimento de embarcacoes equipadas',
      C: 'Correcao do desvio da bussola magnetica',
      D: 'Previsao de altura de maré',
      E: 'Temperatura da agua do mar',
    },
    correct: 'B',
    explanation:
      'O AIS auxilia na consciencia situacional ao apresentar dados de identidade, rumo, velocidade e posicao de outras embarcacoes equipadas.',
  },
  {
    id: 2105206,
    subject: 'navegacao-eletronica',
    topic: 'ecdis / carta eletrônica',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Uma boa pratica ao usar carta eletrônica e:',
    options: {
      A: 'Ignorar alarmes e limites configurados',
      B: 'Verificar se a base cartografica e apropriada e atualizada',
      C: 'Desligar a apresentacao da propria embarcacao',
      D: 'Navegar apenas com orientacao norte para cima',
      E: 'Dispensar vigilancia externa quando a rota estiver traçada',
    },
    correct: 'B',
    explanation:
      'A atualizacao e a adequacao da carta eletrônica sao fundamentais para uso seguro do sistema.',
  },
  {
    id: 2105207,
    subject: 'navegacao-eletronica',
    topic: 'waypoints / planejamento',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Ao criar waypoints para uma derrota, o ideal e posiciona-los:',
    options: {
      A: 'Sobre perigos isolados para facilitar identificacao',
      B: 'De modo a conduzir a embarcacao por agua segura',
      C: 'Apenas em pontos de mudanca brusca de profundidade',
      D: 'Somente na entrada e na saida, sem pontos intermediarios',
      E: 'Sem considerar margem de seguranca lateral',
    },
    correct: 'B',
    explanation:
      'Waypoints devem orientar a derrota por agua segura, preservando margem adequada em relacao a perigos e restricoes.',
  },
  {
    id: 2105208,
    subject: 'navegacao-eletronica',
    topic: 'backup de energia',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Dependencia excessiva de equipamentos eletronicos sem plano alternativo aumenta o risco porque:',
    options: {
      A: 'Equipamentos nunca falham ao mesmo tempo',
      B: 'Uma pane eletrica pode comprometer varios auxilios simultaneamente',
      C: 'Baterias dispensam verificacao previa',
      D: 'O radar substitui toda a navegacao em qualquer situacao',
      E: 'O GPS funciona sem antena externa ou energia',
    },
    correct: 'B',
    explanation:
      'Falhas de alimentacao ou de sistema podem afetar varios equipamentos, por isso e importante ter redundancia e meios alternativos.',
  },
  {
    id: 2105209,
    subject: 'navegacao-eletronica',
    topic: 'alarme de guard zone',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'No radar, uma guard zone serve para:',
    options: {
      A: 'Desligar ecos fora de determinada proa',
      B: 'Gerar alerta quando alvo entra em area predefinida',
      C: 'Aumentar automaticamente o alcance maximo',
      D: 'Transformar o radar em sonar',
      E: 'Atualizar o software da antena',
    },
    correct: 'B',
    explanation:
      'A guarda eletrônica ajuda a alertar o navegante quando um alvo entra em area critica previamente configurada.',
  },
  {
    id: 2105210,
    subject: 'navegacao-eletronica',
    topic: 'falha de sensor',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Se a indicacao de rumo do sistema eletrônico parecer incompatível com a realidade observada, o correto e:',
    options: {
      A: 'Prosseguir normalmente sem conferencia',
      B: 'Conferir sensores, referencias externas e outros instrumentos',
      C: 'Aumentar a velocidade para testar o sistema',
      D: 'Ignorar a diferenca se o GPS estiver ligado',
      E: 'Apagar a trilha anterior e continuar',
    },
    correct: 'B',
    explanation:
      'Inconsistencias entre sensores e realidade exigem conferencia imediata para evitar erro de navegacao.',
  },
]
