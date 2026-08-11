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
      'Mesmo recebendo posição do GPS, o navegante prudente deve:',
    options: {
      A: 'Confiar apenas no equipamento e dispensar conferencia',
      B: 'Cruzar a informação com outros meios e com a situação real',
      C: 'Desligar alarmes para evitar distracao',
      D: 'Usar a posição somente quando parado',
      E: 'Ignorar referencias visuais proximas',
    },
    correct: 'B',
    explanation:
      'A posição eletrônica deve ser conferida com outros meios e com a observação do entorno para maior segurança.',
  },
  {
    id: 2105202,
    subject: 'navegacao-eletronica',
    topic: 'chartplotter / escala',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Ao navegar em área restrita com chartplotter, e recomendavel utilizar:',
    options: {
      A: 'Escala adequada ao detalhe exigido pela área',
      B: 'Sempre a menor escala disponível',
      C: 'Zoom excessivo independentemente da carta base',
      D: 'Somente a tela de rumo, sem carta',
      E: 'Apenas a configuracao noturna',
    },
    correct: 'A',
    explanation:
      'A escala deve ser compatível com o detalhe necessário para a navegação segura, especialmente em áreas restritas.',
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
      'Ganho muito alto pode saturar a imagem com ruído e dificultar a interpretação correta dos ecos.',
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
      'O AIS contribui para a navegação ao fornecer principalmente:',
    options: {
      A: 'Profundidade instantanea do fundo',
      B: 'Identificacao e dados de movimento de embarcações equipadas',
      C: 'Correcao do desvio da bússola magnetica',
      D: 'Previsao de altura de maré',
      E: 'Temperatura da água do mar',
    },
    correct: 'B',
    explanation:
      'O AIS auxilia na consciencia situacional ao apresentar dados de identidade, rumo, velocidade e posição de outras embarcações equipadas.',
  },
  {
    id: 2105206,
    subject: 'navegacao-eletronica',
    topic: 'ecdis / carta eletrônica',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Uma boa pratica ao usar carta eletrônica é:',
    options: {
      A: 'Ignorar alarmes e limites configurados',
      B: 'Verificar se a base cartografica e apropriada e atualizada',
      C: 'Desligar a apresentacao da própria embarcação',
      D: 'Navegar apenas com orientação norte para cima',
      E: 'Dispensar vigilancia externa quando a rota estiver traçada',
    },
    correct: 'B',
    explanation:
      'A atualizacao e a adequacao da carta eletrônica são fundamentais para uso seguro do sistema.',
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
      B: 'De modo a conduzir a embarcação por água segura',
      C: 'Apenas em pontos de mudança brusca de profundidade',
      D: 'Somente na entrada e na saída, sem pontos intermediarios',
      E: 'Sem considerar margem de segurança lateral',
    },
    correct: 'B',
    explanation:
      'Waypoints devem orientar a derrota por água segura, preservando margem adequada em relacao a perigos e restricoes.',
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
      B: 'Uma pane elétrica pode comprometer vários auxilios simultaneamente',
      C: 'Baterias dispensam verificacao prévia',
      D: 'O radar substitui toda a navegação em qualquer situação',
      E: 'O GPS funciona sem antena externa ou energia',
    },
    correct: 'B',
    explanation:
      'Falhas de alimentacao ou de sistema podem afetar vários equipamentos, por isso é importante ter redundancia e meios alternativos.',
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
      B: 'Gerar alerta quando alvo entra em área predefinida',
      C: 'Aumentar automaticamente o alcance maximo',
      D: 'Transformar o radar em sonar',
      E: 'Atualizar o software da antena',
    },
    correct: 'B',
    explanation:
      'A guarda eletrônica ajuda a alertar o navegante quando um alvo entra em área crítica previamente configurada.',
  },
  {
    id: 2105210,
    subject: 'navegacao-eletronica',
    topic: 'falha de sensor',
    year: 2025,
    exam: 'Simulado Navegacao Eletronica',
    verified: true,
    statement:
      'Se a indicação de rumo do sistema eletrônico parecer incompatível com a realidade observada, o correto é:',
    options: {
      A: 'Prosseguir normalmente sem conferencia',
      B: 'Conferir sensores, referencias externas e outros instrumentos',
      C: 'Aumentar a velocidade para testar o sistema',
      D: 'Ignorar a diferenca se o GPS estiver ligado',
      E: 'Apagar a trilha anterior e continuar',
    },
    correct: 'B',
    explanation:
      'Inconsistencias entre sensores e realidade exigem conferencia imediata para evitar erro de navegação.',
  },
]
