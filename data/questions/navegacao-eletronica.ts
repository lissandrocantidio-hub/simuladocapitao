import { Question } from '../../types/questions'

export const navegacaoEletronicaQuestions: Question[] = [
  {
    id: 2022007,
    subject: 'navegacao-eletronica',
    topic: 'ECDIS / navegação em tempo real',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um Electronic Chart Display and Information System - ECDIS tem subsistemas ligados a ele. Qual subsistema, dentre as alternativas abaixo, possibilita ao navegante a navegação em tempo real na carta eletrônica?',
    options: {
      A: 'AIS.',
      B: 'Odômetro.',
      C: 'Anemômetro.',
      D: 'ARPA.',
      E: 'GNSS.',
    },
    correct: 'E',
    explanation:
      'O GNSS fornece o posicionamento em tempo real usado pelo ECDIS na carta eletrônica.',
  },
  {
    id: 2022008,
    subject: 'navegacao-eletronica',
    topic: 'radar / águas restritas',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Ao realizar uma “aterragem”, o experiente navegante vai ajustar o RADAR ARPA na melhor configuração, para navegar corretamente e evitar abalroamentos. Assinale a alternativa que, em um sistema RADAR de um navio entrando em um porto (águas restritas), apresenta o melhor resultado de imagem para esse ambiente.',
    options: {
      A: 'Uso da banda S em long pulse.',
      B: 'Uso da banda S em short pulse.',
      C: 'Uso da banda X em long pulse.',
      D: 'Uso da banda X em short pulse.',
      E: 'Uso da banda S ou X em power pulse.',
    },
    correct: 'D',
    explanation:
      'Para águas restritas, a banda X com short pulse oferece melhor definição e discriminação a curta distância.',
  },
  {
  id: 2022017,
  subject: 'navegacao',
  topic: 'radar',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `A rosa de manobra abaixo representa a apresentação PPI de um radar de uma embarcação que navega no rumo verdadeiro 030° com velocidade de 20 nós. Foram plotados três alvos em dois instantes distintos (minuto 03 e minuto 09).

Com base nas informações apresentadas, marque a alternativa correta:`,

  attachments: [
    {
      label: 'Radar PPI - CPA 2022',
      path: '/anexos/cpa2022-q17-radar.png'
    }
  ],

  options: {
    A: 'O alvo "A" está com velocidade zero, o alvo "B" está com o mesmo rumo e velocidade da embarcação "Maré" e o alvo "C" está em rumo de colisão.',
    B: 'O alvo "A" está com velocidade zero, o alvo "B" está em rumo de colisão e o alvo "C" está com o mesmo rumo e velocidade da embarcação "Maré".',
    C: 'O alvo "A" está com o mesmo rumo e velocidade da embarcação "Maré", o alvo "B" está em rumo de colisão e o alvo "C" está com velocidade zero.',
    D: 'O alvo "A" está em rumo de colisão, o alvo "B" está com o mesmo rumo e velocidade da embarcação "Maré" e o alvo "C" está com velocidade zero.',
    E: 'O alvo "A" está em rumo de colisão, o alvo "B" está com velocidade zero e o alvo "C" está com o mesmo rumo e velocidade da embarcação "Maré".',
  },

  correct: 'E',

  explanation: `Analisando o movimento relativo dos alvos no radar:

🔹 Alvo A:
Mantém marcação praticamente constante e reduz a distância.
👉 Isso caracteriza risco de colisão.

🔹 Alvo B:
Permanece praticamente na mesma posição relativa ao navio.
👉 Indica que possui mesma direção e velocidade (movimento relativo nulo).

🔹 Alvo C:
Mantém posição fixa no radar, sem deslocamento significativo.
👉 Caracteriza alvo parado (velocidade zero).

Resumo:
- A → rumo de colisão
- B → mesmo rumo e velocidade
- C → velocidade zero

👉 Alternativa correta: E.`,
},
  {
    id: 2022009,
    subject: 'navegacao-eletronica',
    topic: 'radar / orientação da PPI',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Ao deixar de receber as informações provenientes da agulha giroscópica, o sistema radar irá operar com o display (PPI)',
    options: {
      A: 'orientado em course-up, centralizado e estabilizado.',
      B: 'orientado em head-up, centralizado e sem estabilização.',
      C: 'orientado em north-up, descentralizado e sem estabilização.',
      D: 'orientado em course-up, descentralizado e estabilizado.',
      E: 'em stand-by, centralizado e estabilizado.',
    },
    correct: 'B',
    explanation:
      'Sem dados da giroscópica, o radar perde estabilização e tende a operar em head-up.',
  },
  {
    id: 2022010,
    subject: 'navegacao-eletronica',
    topic: 'radar / anti-clutter rain',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Qual controle atenuador de reverberação de um RADAR deve ser usado para atenuar os efeitos da chuva?',
    options: {
      A: 'Ganho.',
      B: 'Brilho.',
      C: 'Anti-clutter RAIN.',
      D: 'Anti-clutter SEA.',
      E: 'Electronic Bearing Line (EBL).',
    },
    correct: 'C',
    explanation:
      'O controle Anti-clutter RAIN é específico para atenuar ecos meteorológicos, como chuva.',
  },
  {
    id: 2022011,
    subject: 'navegacao-eletronica',
    topic: 'ARPA / informações apresentadas',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No RADAR com ARPA, a aquisição de alvos é um recurso importante. Assinale, dentre as alternativas, qual informação o ARPA NÃO apresenta ao navegante.',
    options: {
      A: 'Rumo do alvo.',
      B: 'Velocidade relativa do alvo.',
      C: 'Ponto de Maior Aproximação (PMA) do alvo.',
      D: 'Tempo para o Ponto de Maior Aproximação (PMA) do alvo.',
      E: 'Distância do alvo.',
    },
    correct: 'B',
    explanation:
      'O ARPA fornece rumo, distância, CPA e TCPA dos contatos acompanhados, mas não apresenta como informação primária a velocidade relativa do alvo da forma pedida na questão. Por isso, a alternativa B é a correta.',
  },
  {
    id: 2022012,
    subject: 'navegacao-eletronica',
    topic: 'carta vetorial',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'As cartas náuticas vetoriais apresentam diversas características distintas das cartas náuticas raster. Indique, dentre as alternativas abaixo, qual característica é EXCLUSIVA das cartas vetoriais.',
    options: {
      A: 'É um banco de dados com muitas informações disponíveis.',
      B: 'É uma “imagem” idêntica à carta náutica em papel.',
      C: 'Permite a navegação em tempo real.',
      D: 'Apresenta as profundidades em todas as áreas navegáveis.',
      E: 'É possível ser apresentada em display de um sistema ECDIS.',
    },
    correct: 'A',
    explanation:
      'A principal diferença é que a carta vetorial é um banco de dados estruturado.',
  },
  {
    id: 2022013,
    subject: 'navegacao-eletronica',
    topic: 'ARPA / AIS / GNSS',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Assinale a alternativa INCORRETA sobre as características de operação do RADAR com ARPA, AIS e GNSS.',
    options: {
      A: 'O AIS pode processar dados de até 450 navios, enquanto o ARPA só acompanha cerca de 20 contatos.',
      B: 'O ARPA tem o alcance usualmente maior do que o AIS.',
      C: 'Se configurado corretamente, o AIS permite transmissões de forma contínua e automática.',
      D: 'O ARPA está sujeito a ecos falsos, o AIS não está sujeito a ecos falsos.',
      E: 'O AIS é completamente dependente de um GNSS para sincronia de suas transmissões e geração de muitos dados dinâmicos.',
    },
    correct: 'B',
    explanation:
      'A alternativa incorreta é a B porque não se pode afirmar genericamente que o ARPA tenha alcance maior que o AIS. O desempenho de cada sistema depende de propagação, altura de antena, linha de visada e características próprias do sensor.',
  },
  {
    id: 2022014,
    subject: 'navegacao-eletronica',
    topic: 'GPS / TTG',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No display de um GNSS, qual o trigrama que significa “tempo estimado para atingir um ponto de guinada”?',
    options: {
      A: 'ETA.',
      B: 'XTE.',
      C: 'LOG.',
      D: 'TTG.',
      E: 'ETD.',
    },
    correct: 'D',
    explanation:
      'TTG significa Time To Go.',
  },
  {
    id: 2022015,
    subject: 'navegacao-eletronica',
    topic: 'radar estabilizado',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Quando um RADAR está interfaceado com uma agulha giroscópica sua tela exibe uma imagem estabilizada. Portanto, quando o navio guina, os ecos:',
    options: {
      A: 'permanecem apresentados na PPI com praticamente a mesma marcação verdadeira.',
      B: 'permanecem apresentados na PPI com as marcações verdadeiras variando de acordo com a guinada.',
      C: 'se deslocam dando “saltos”, até a guinada parar.',
      D: 'ficam “borrados” por algum tempo, até que a guinada cesse.',
      E: 'desaparecem durante a guinada e reaparecem ao término da guinada.',
    },
    correct: 'A',
    explanation:
      'Com estabilização por giroscópica, a referência verdadeira é mantida na tela.',
  },
  {
    id: 2022016,
    subject: 'navegacao-eletronica',
    topic: 'VTS / serviços e ferramentas',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Analise as afirmativas abaixo:\n\nI - A Estação de Praticagem (Atalaia) possui equipamentos de VHF, AIS, radar e sensores meteorológicos, constituem um VTS e tem autoridade para interferir no tráfego de embarcações.\nII - Radar, AIS, comunicações VHF, circuito fechado de TV, radiogoniômetro, sensores meteorológicos e sistema de gerenciamento de dados (SGD) são ferramentas essenciais de auxílio à navegação de um VTS.\nIII - O Serviço de Informações (INS – Information Service) provê informações essenciais e tempestivas para subsidiar os processos de tomada de decisão a bordo, em intervalos regulares ou por solicitação do navegante.\nIV - O Serviço de Organização de Tráfego (TOS – Traffic Organization Service) cuida do gerenciamento operacional e do planejamento das movimentações, evitando congestionamentos e situações perigosas para a navegação.\n\nAssinale a alternativa correta.',
    options: {
      A: 'Apenas a afirmativa II é verdadeira.',
      B: 'Apenas as afirmativas I e III são verdadeiras.',
      C: 'Apenas as afirmativas II e IV são verdadeiras.',
      D: 'Apenas as afirmativas II, III e IV são verdadeiras.',
      E: 'Apenas as afirmativas I, III e IV são verdadeiras.',
    },
    correct: 'D',
    explanation:
      'A afirmativa I está incorreta porque uma estação de praticagem pode utilizar recursos semelhantes, mas isso não significa automaticamente constituir um VTS com autoridade para interferir no tráfego. Já as afirmativas II, III e IV estão corretas: elas descrevem adequadamente as ferramentas do VTS, o serviço de informações (INS) e o serviço de organização do tráfego (TOS). Por isso, a alternativa correta é a D.',
  },
  {
    id: 2023009,
    subject: 'navegacao-eletronica',
    topic: 'paralela indexada',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Sobre a navegação radar, mais precisamente a “Navegação Paralela Indexada” (PI), assinale a alternativa correta.',
    options: {
      A: 'A PI só é possível ser utilizada em radares que possuam ARPA.',
      B: 'Tem a função específica de evitar abalroamentos nas entradas e saídas dos portos.',
      C: 'Possibilita acompanhar em tempo real a posição do navio sobre uma derrota planejada.',
      D: 'Dispensa a necessidade da presença de referências de porções de terra na tela do radar (PPI).',
      E: 'O Automatic Identification System (AIS) permitiu um avanço na PI.',
    },
    correct: 'C',
    explanation:
      'A PI permite acompanhar a posição do navio em relação à derrota planejada usando referências radar.',
  },
  {
    id: 2023010,
    subject: 'navegacao-eletronica',
    topic: 'radar / controles',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Analise as afirmativas abaixo: I - O Anti-clutter SEA é uma função de ganho auxiliar, que permite diminuir o ganho dos ecos mais próximos ao navio, sem alterar os mais distantes. II - O Anti-clutter RAIN tem efeito até o limite de 8 milhas náutica da posição do navio, não atuando a maiores distâncias. III - A EBL, Electronic Bearing Line, é uma linha radial que permite ao operador obter a marcação de um contato. IV - O operador de um equipamento radar dotado de ARPA poderá descentralizar a imagem para, com isso, ver uma área maior em uma determinada marcação, sem alterar a escala de distância. Assinale a alternativa correta.',
    options: {
      A: 'Apenas a afirmativa I é verdadeira.',
      B: 'Apenas as afirmativas II e III são verdadeiras.',
      C: 'Apenas as afirmativas II e IV são verdadeiras.',
      D: 'Apenas as afirmativas I, II e IV são verdadeiras.',
      E: 'Apenas as afirmativas I, III e IV são verdadeiras.',
    },
    correct: 'E',
    explanation:
      'Na lista proposta, as afirmativas I, III e IV estão corretas: o SEA reduz ecos próximos, a EBL fornece marcação e a descentralização amplia a área de interesse sem trocar a escala. A II está errada, então o conjunto correto é a alternativa E.',
  },
  {
    id: 2023011,
    subject: 'navegacao-eletronica',
    topic: 'ARPA / tracking conditions',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O ARPA permite que o operador faça o ajuste nas “Tracking Conditions” do Limite do Ponto de Maior Aproximação (CPA LIMIT) e do Tempo Limite para o Ponto de Maior Aproximação (TCPA LIMIT). Assinale a alternativa correta sobre o assunto.',
    options: {
      A: 'Se o valor do CPA LIMIT for “zero”, o sistema não alarmará em nenhuma condição.',
      B: 'Se o CPA LIMIT for excessivo, o sistema alarmará em caso de “rumo de colisão”.',
      C: 'Se o CPA LIMIT for alcançado por um contato, o sistema irá informar Alvo Perdido (LOST TARGET).',
      D: 'O TCPA LIMIT deverá ser ajustado para que o operador avalie a situação de risco de abalroamento de um hipotético contato à luz do RIPEAM.',
      E: 'O TCPA LIMIT é utilizado como ajuste para as Zonas de Proteção (GUARD ZONES), que ficarão maiores ou menores, de acordo com a necessidade.',
    },
    correct: 'D',
    explanation:
      'O ajuste de TCPA LIMIT deve dar tempo para o operador perceber, avaliar e agir diante de um risco de abalroamento, sempre à luz do RIPEAM. Por isso, a alternativa correta é a D.',
  },
  {
    id: 2023012,
    subject: 'navegacao-eletronica',
    topic: 'horizonte radar',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Com relação ao horizonte-radar em condições atmosféricas padrão e refração normal, qual será o alcance em Milhas Náuticas (MN) de um equipamento radar em que a antena se encontra a 9 metros de altura em relação ao nível do mar?',
    options: {
      A: '5,67 MN.',
      B: '6,63 MN.',
      C: '7,62 MN.',
      D: '8,35 MN.',
      E: '9,00 MN.',
    },
    correct: 'B',
    explanation:
      'Em condições padrão, o horizonte-radar pode ser estimado por fórmula aproximada proporcional à raiz quadrada da altura da antena. Para 9 metros, o valor fica em torno de 6,6 MN, compatível com a alternativa B.',
  },
  {
    id: 2023013,
    subject: 'navegacao-eletronica',
    topic: 'refletor-radar',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Embarcações menores, que tenham pouca refletividade radar, podem usar um recurso passivo muito útil para se tornarem “visíveis” aos radares dos navios de grande porte. Esse recurso é o(a):',
    options: {
      A: 'Refletor-radar.',
      B: 'Radar Target Enhancer (RTE).',
      C: 'Tinta reflexiva na superestrutura.',
      D: 'Radar Beacon (RACON).',
      E: 'Radar Marker (RAMARK).',
    },
    correct: 'A',
    explanation:
      'O refletor-radar é um recurso passivo clássico para aumentar a refletividade da embarcação.',
  },
  {
    id: 2023014,
    subject: 'navegacao-eletronica',
    topic: 'radar / travessia com chuva',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Ao iniciar um planejamento de viagem de Recife para Fernando de Noronha, com previsão de chuva constante, o experiente Capitão-Amador estudou o ajuste ideal do radar ARPA na travessia e concluiu que o melhor ajuste para a banda, pulso, orientação da PPI e tipo de movimento durante o trânsito seria:',
    options: {
      A: 'Banda X, long pulse, North-up e relative motion.',
      B: 'Banda X, short pulse, Course-up e true motion.',
      C: 'Banda S, long pulse, Head-up e true motion.',
      D: 'Banda S, short pulse, Course-up e true motion.',
      E: 'Banda S, long pulse, North-up e relative motion.',
    },
    correct: 'E',
    explanation:
      'Para travessia longa com chuva, a banda S oferece melhor penetração em precipitação e o long pulse favorece detecção a maiores distâncias. North-up e relative motion também são escolhas clássicas para consciência situacional, fechando na alternativa E.',
  },
  {
    id: 20222009,
    subject: 'navegacao-eletronica',
    topic: 'radar / superrefração',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Durante uma aterragem com radar, a navegante mediu 40 milhas náuticas até o litoral. Ao comparar com a posição GNSS (GPS), encontrou uma discrepância de 6 milhas para menos na posição GPS, embora ambos os equipamentos estivessem em perfeito funcionamento. A que se deve essa discrepância?',
    options: {
      A: 'Ao efeito da superrefração, que aumenta o alcance do radar em condições especiais da atmosfera.',
      B: 'Ao ajuste indevido do radar pelo excesso de ganho, que distorce e borra a imagem apresentada na PPI.',
      C: 'À acurácia em distância dos radares, que fica prejudicada em até 60% em nevoeiro e umidade elevada.',
      D: 'Ao ajuste indevido do GPS, pois a acurácia em distância do radar é sempre superior.',
      E: 'Às terras mais para o interior, que geralmente são mais altas do que a linha de costa.',
    },
    correct: 'E',
    explanation:
      'O radar pode detectar primeiro alvos mais altos situados para dentro da costa, e não exatamente a linha costeira ao nível do mar. Isso explica uma distância aparente maior no radar sem defeito em nenhum dos dois sistemas. Por isso, a alternativa correta é a E.',
  },
  {
    id: 20222011,
    subject: 'navegacao-eletronica',
    topic: 'radar / controles operacionais',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Sobre controles operacionais do radar, analise as afirmações abaixo e assinale a alternativa correta. I - O anti-clutter sea (STC) é um controle de ganho auxiliar que reduz ecos mais próximos sem alterar os mais distantes. II - O anti-clutter sea (STC) não é um controle efetivo para atenuar chuva forte nas proximidades do navio. III - O anti-clutter rain (FTC) destina-se a diminuir, tanto quanto possível, os ecos de chuva, granizo e neve. IV - A linha de fé luminosa permite estabelecer uma linha indicadora da proa do barco na tela do radar.',
    options: {
      A: 'Somente as afirmações I, II e III são verdadeiras.',
      B: 'Somente as afirmações I, III e IV são verdadeiras.',
      C: 'Somente as afirmações II, III e IV são verdadeiras.',
      D: 'Somente as afirmações III e IV são verdadeiras.',
      E: 'Somente as afirmações I, II e IV são verdadeiras.',
    },
    correct: 'B',
    explanation:
      'As afirmativas I, III e IV estão corretas: o STC atua nos ecos próximos de mar, o FTC ajuda a reduzir ecos meteorológicos e a linha de fé indica a proa na apresentação. A II é incorreta na forma como generaliza o uso do STC para chuva forte. Por isso, a alternativa correta é a B.',
  },
  {
    id: 20222012,
    subject: 'navegacao-eletronica',
    topic: 'radar / precisão de posicionamento',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Dentre os métodos abaixo para obter a posição da embarcação, qual fornece a posição mais precisa?',
    options: {
      A: 'Distâncias-radar e marcações visuais.',
      B: 'Cruzamentos de distâncias-radar.',
      C: 'Distâncias e marcações-radar.',
      D: 'Cruzamento de marcações-radar.',
      E: 'Marcações-radar e marcações visuais.',
    },
    correct: 'A',
    explanation:
      'Em regra prática de navegação costeira, as distâncias-radar combinadas com marcações visuais tendem a produzir uma posição mais precisa, aproveitando boa definição de distância pelo radar e boa definição angular pela observação visual. Por isso, a alternativa correta é a A.',
  },
  {
    id: 20222014,
    subject: 'navegacao-eletronica',
    topic: 'ARPA / lost target',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Em um radar dotado de ARPA, a função Alvo Perdido (Lost Target) é muito importante. Analise as afirmações abaixo e assinale a alternativa correta. I - Quando dois alvos passam muito próximos um do outro, o sistema pode determinar que um deles foi perdido, acionando alarmes visual e sonoro. II - Os alarmes serão acionados para qualquer alvo perdido em acompanhamento, mesmo que ele não esteja sendo exibido na escala selecionada. III - Quando um alvo acompanhado desaparece da tela e não pode mais ser detectado, o sistema o determina como perdido, acionando alarmes visual e sonoro. IV - O uso da aquisição automática é recomendável em áreas com intenso tráfego de embarcações.',
    options: {
      A: 'Somente as afirmações I, II e III são verdadeiras.',
      B: 'Somente as afirmações I e IV são verdadeiras.',
      C: 'Somente as afirmações II e III são verdadeiras.',
      D: 'Somente as afirmações I, III e IV são verdadeiras.',
      E: 'Somente as afirmações II e IV são verdadeiras.',
    },
    correct: 'A',
    explanation:
      'As afirmativas I, II e III descrevem comportamentos típicos do Lost Target em acompanhamento ARPA. Já a IV não é adequada como regra geral, porque aquisição automática em tráfego muito intenso pode gerar excesso de acompanhamento e reduzir a utilidade operacional. Por isso, a alternativa correta é a A.',
  },
  {
    id: 20222015,
    subject: 'navegacao-eletronica',
    topic: 'radar / discriminação de alvos',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Durante navegação costeira noturna, um radar em banda X apresentou um único alvo na tela, mas a verificação visual mostrou que havia duas embarcações próximas. Quais controles operacionais poderiam ser ajustados para que o radar passasse a apresentar efetivamente os dois alvos?',
    options: {
      A: 'Largura do feixe, ganho, anti-clutter sea e anti-clutter rain.',
      B: 'Frequência de repetição de impulsos, brilho e ganho.',
      C: 'Brilho, ganho e linha de fé.',
      D: 'Ganho, anti-clutter sea, anti-clutter rain e largura de pulso.',
      E: 'Largura do feixe e largura de pulso.',
    },
    correct: 'D',
    explanation:
      'A separação prática de dois ecos próximos depende de bom ajuste de ganho, redução de interferências de mar e chuva quando existirem, e também de largura de pulso adequada para melhorar a discriminação em distância. Por isso, a alternativa correta é a D.',
  },
  {
    id: 20222016,
    subject: 'navegacao-eletronica',
    topic: 'radar / configuração em águas restritas',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Dentre as alternativas abaixo, assinale a que apresenta a melhor configuração de ajustes para o radar de uma embarcação que realiza navegação em águas restritas no período noturno.',
    options: {
      A: 'North-up, movimento verdadeiro, banda X, pulso longo.',
      B: 'North-up, movimento relativo, banda X, pulso curto.',
      C: 'Head-up, movimento relativo, banda S, pulso curto.',
      D: 'Head-up, movimento verdadeiro, banda S, pulso longo.',
      E: 'Course-up, movimento relativo, banda X, pulso longo.',
    },
    correct: 'B',
    explanation:
      'Em águas restritas, a banda X e o pulso curto favorecem melhor definição a curtas distâncias. O movimento relativo e a apresentação north-up compõem uma configuração operacional clássica para análise tática e consciência situacional. Por isso, a alternativa correta é a B.',
  },
  {
    id: 20212013,
    subject: 'navegacao-eletronica',
    topic: 'AIS / dados dinÃ¢micos',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Os dados dinÃ¢micos transmitidos pelo AIS sÃ£o normalmente recebidos de equipamentos interfaceados, exceto um dado dinÃ¢mico introduzido manualmente e que deve ser coerente com as luzes e marcas exibidas pela embarcaÃ§Ã£o. Qual Ã© esse dado?',
    options: {
      A: 'PosiÃ§Ã£o da embarcaÃ§Ã£o.',
      B: 'Rumo no fundo.',
      C: 'Derrota percorrida.',
      D: 'Bandeira.',
      E: 'SituaÃ§Ã£o da embarcaÃ§Ã£o.',
    },
    correct: 'E',
    explanation:
      'No AIS, a situaÃ§Ã£o da embarcaÃ§Ã£o pode ser inserida manualmente e deve refletir corretamente o estado operacional indicado por luzes e marcas. Por isso, a alternativa correta Ã© a E.',
  },
  {
    id: 20212014,
    subject: 'navegacao-eletronica',
    topic: 'radar / RACON',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Para melhorar a detecÃ§Ã£o radar de objetos de pequeno porte ou maus refletores, pode-se usar um equipamento que recebe o sinal do radar e transmite outro de volta na mesma frequÃªncia, exibindo um eco forte em cÃ³digo Morse na tela. Como se chama esse equipamento?',
    options: {
      A: 'RACON (Radar Transponder Beacon).',
      B: 'ReforÃ§ador de alvo radar (RTE).',
      C: 'Refletor radar.',
      D: 'RAMARK.',
      E: 'SART.',
    },
    correct: 'A',
    explanation:
      'O RACON responde ao pulso radar na mesma frequÃªncia e aparece como um eco caracterÃ­stico codificado em Morse, auxiliando a identificaÃ§Ã£o do ponto onde estÃ¡ instalado. Por isso, a alternativa correta Ã© a A.',
  },
  {
    id: 20212015,
    subject: 'navegacao-eletronica',
    topic: 'radar / poder separador em distÃ¢ncia',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Como se chama a menor distÃ¢ncia entre dois alvos situados na mesma marcaÃ§Ã£o, para que esses alvos apareÃ§am como imagens distintas na tela do radar?',
    options: {
      A: 'DiscriminaÃ§Ã£o tangencial.',
      B: 'Poder separador em distÃ¢ncia.',
      C: 'Poder separador em marcaÃ§Ã£o.',
      D: 'Largura do feixe.',
      E: 'Largura de pulso.',
    },
    correct: 'B',
    explanation:
      'Quando dois alvos estÃ£o na mesma marcaÃ§Ã£o, o critÃ©rio relevante Ã© a capacidade do radar de distingui-los ao longo da linha de visada. Essa caracterÃ­stica Ã© o poder separador em distÃ¢ncia. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 20212016,
    subject: 'navegacao-eletronica',
    topic: 'radar / poder separador em marcaÃ§Ã£o',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Como se chama a diferenÃ§a mÃ­nima em marcaÃ§Ã£o para que dois alvos situados Ã  mesma distÃ¢ncia do radar apareÃ§am como imagens distintas na tela do radar?',
    options: {
      A: 'RefraÃ§Ã£o.',
      B: 'Poder separador em distÃ¢ncia.',
      C: 'Largura do feixe.',
      D: 'Poder separador em marcaÃ§Ã£o.',
      E: 'Largura de pulso.',
    },
    correct: 'D',
    explanation:
      'Quando os alvos estÃ£o Ã mesma distÃ¢ncia, o que importa Ã© a separaÃ§Ã£o angular mÃ­nima que o radar consegue distinguir. Essa caracterÃ­stica Ã© o poder separador em marcaÃ§Ã£o. Por isso, a alternativa correta Ã© a D.',
  },
  {
    id: 20212017,
    subject: 'navegacao-eletronica',
    topic: 'radar / movimento relativo',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Nossa embarcaÃ§Ã£o estÃ¡ no rumo 000Â°, velocidade 10 nÃ³s, e opera um radar com apresentaÃ§Ã£o estabilizada na escala de 12 milhas, com 2 milhas entre os anÃ©is de distÃ¢ncia. A figura mostra a posiÃ§Ã£o de cinco alvos (A, B, C, D e E) nos minutos 00 e 06. Qual desses alvos estÃ¡ no mesmo rumo e velocidade que o nosso navio?',
    attachments: [
      {
        label: 'Figura radar - CPA-II 2021 Q17',
        path: '/anexos/cpa2-2021/cpa2-2021-p6-radar.png',
      },
    ],
    options: {
      A: 'Alvo A.',
      B: 'Alvo B.',
      C: 'Alvo C.',
      D: 'Alvo D.',
      E: 'Alvo E.',
    },
    correct: 'B',
    explanation:
      'Em apresentaÃ§Ã£o estabilizada, um alvo com mesmo rumo e mesma velocidade do nosso navio tende a manter movimento relativo nulo ou quase nulo na tela. Na figura, esse comportamento corresponde ao alvo B. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 20212018,
    subject: 'navegacao-eletronica',
    topic: 'DGPS / RTE / ECDIS / navegaÃ§Ã£o paralela indexada',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Analise as afirmativas abaixo. I - O DGPS auxilia na identificaÃ§Ã£o de embarcaÃ§Ãµes, no rastreamento de alvos e permite detectar alvos em torno de curvas e atrÃ¡s de ilhas. II - O RTE Ã© normalmente instalado no mastro de pequenas embarcaÃ§Ãµes, recebendo o sinal do transmissor radar, amplificando-o e devolvendo-o ao transmissor. III - O ECDIS possibilita navegaÃ§Ã£o em tempo real e operar com cartas raster. IV - A navegaÃ§Ã£o paralela indexada permite constatar em tempo real se a embarcaÃ§Ã£o estÃ¡ navegando sobre uma derrota planejada. Assinale a opÃ§Ã£o correta.',
    options: {
      A: 'Apenas as afirmativas II e IV sÃ£o verdadeiras.',
      B: 'Apenas a afirmativa IV Ã© verdadeira.',
      C: 'Apenas as afirmativas II e III sÃ£o verdadeiras.',
      D: 'Apenas as afirmativas II, III e IV sÃ£o verdadeiras.',
      E: 'Apenas as afirmativas I e IV sÃ£o verdadeiras.',
    },
    correct: 'D',
    explanation:
      'A afirmativa I Ã© falsa porque o DGPS nÃ£o Ã© um sensor de detecÃ§Ã£o de alvos. As afirmativas II, III e IV descrevem corretamente o uso do RTE, do ECDIS e da navegaÃ§Ã£o paralela indexada. Por isso, a alternativa correta Ã© a D.',
  },
  {
    id: 20212019,
    subject: 'navegacao-eletronica',
    topic: 'radar / mÃ©todos de posicionamento',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Coloque por ordem da maior precisÃ£o para a menor precisÃ£o os mÃ©todos abaixo utilizados para obtenÃ§Ã£o de uma posiÃ§Ã£o usando o radar. 1) Cruzamento de distÃ¢ncias radar. 2) Cruzamento de marcaÃ§Ãµes radar. 3) Cruzamento de distÃ¢ncias radar e marcaÃ§Ãµes visuais. 4) Cruzamento de distÃ¢ncias radar e marcaÃ§Ãµes radar.',
    options: {
      A: '1, 2, 3 e 4.',
      B: '3, 4, 1 e 2.',
      C: '1, 4, 2 e 3.',
      D: '3, 1, 4 e 2.',
      E: '4, 3, 2 e 1.',
    },
    correct: 'D',
    explanation:
      'Na prÃ¡tica costeira, distÃ¢ncias radar combinadas com marcaÃ§Ãµes visuais tendem a oferecer a melhor precisÃ£o, seguidas por cruzamento de distÃ¢ncias radar, depois combinaÃ§Ãµes radar-radar e, por Ãºltimo, cruzamento exclusivo de marcaÃ§Ãµes radar. Por isso, a alternativa correta Ã© a D.',
  },
  {
    id: 20212020,
    subject: 'navegacao-eletronica',
    topic: 'radar / history trails',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Em um radar em movimento relativo com a funÃ§Ã£o History Trails ativada, a figura mostra quatro alvos com histÃ³rico. Relacione os alvos com as situaÃ§Ãµes abaixo e assinale a sequÃªncia correta: ilha ou morro em terra; prÃ³ximo ao ponto de maior aproximaÃ§Ã£o; rumo de colisÃ£o e meu navio Ã© obrigado a manobrar; mesmo rumo e velocidade do nosso navio.',
    attachments: [
      {
        label: 'Figura radar - CPA-II 2021 Q20',
        path: '/anexos/cpa2-2021/cpa2-2021-p8-radar.png',
      },
    ],
    options: {
      A: '1, 2, 3 e 4.',
      B: '3, 2, 1 e 4.',
      C: '2, 1, 4 e 3.',
      D: '1, 4, 3 e 2.',
      E: '4, 3, 2 e 1.',
    },
    correct: 'B',
    explanation:
      'Pelo histÃ³rico mostrado na figura, o alvo 3 corresponde ao ponto fixo em terra, o alvo 2 estÃ¡ prÃ³ximo ao CPA, o alvo 1 caracteriza situaÃ§Ã£o de colisÃ£o com obrigaÃ§Ã£o de manobra do nosso navio, e o alvo 4 acompanha o mesmo rumo e velocidade relativa do navio prÃ³prio. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 20212021,
    subject: 'navegacao-eletronica',
    topic: 'VTS / serviÃ§os de trÃ¡fego',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Sobre o Vessel Traffic Service (VTS), analise as afirmativas. I - A participaÃ§Ã£o de uma embarcaÃ§Ã£o em um VTS pode ser mandatÃ³ria ou voluntÃ¡ria, dependendo das regras locais. II - A autoridade de um VTS se sobrepÃµe Ã competÃªncia do comandante pela seguranÃ§a da embarcaÃ§Ã£o. III - As normas da Autoridade MarÃ­tima para serviÃ§o de VTS constam da NORMAM-26/DHN. IV - O ServiÃ§o de AssistÃªncia Ã NavegaÃ§Ã£o (NAS) de um VTS provÃª informaÃ§Ãµes relevantes para a navegaÃ§Ã£o e contribui para a tomada de decisÃ£o a bordo. Assinale a opÃ§Ã£o correta.',
    options: {
      A: 'Apenas as afirmativas II e IV sÃ£o verdadeiras.',
      B: 'Apenas a afirmativa IV Ã© verdadeira.',
      C: 'Apenas as afirmativas I, III e IV sÃ£o verdadeiras.',
      D: 'Apenas as afirmativas II, III e IV sÃ£o verdadeiras.',
      E: 'Apenas as afirmativas I e IV sÃ£o verdadeiras.',
    },
    correct: 'C',
    explanation:
      'A afirmativa II Ã© falsa porque a responsabilidade do comandante pela seguranÃ§a da embarcaÃ§Ã£o permanece. As afirmativas I, III e IV estÃ£o de acordo com a estrutura do serviÃ§o VTS. Por isso, a alternativa correta Ã© a C.',
  },
  {
    id: 20212022,
    subject: 'navegacao-eletronica',
    topic: 'ECDIS / RCDS',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No que diz respeito Ã utilizaÃ§Ã£o do ECDIS, assinale a opÃ§Ã£o incorreta.',
    options: {
      A: 'Permite a apresentaÃ§Ã£o da imagem radar e de informaÃ§Ãµes meteorolÃ³gicas grÃ¡ficas em sobreposiÃ§Ã£o Ã ENC.',
      B: 'Durante a execuÃ§Ã£o de uma derrota, caso o sistema nÃ£o disponha de carta nÃ¡utica digital oficial para o trecho selecionado, pode exibir alerta para utilizaÃ§Ã£o de carta oficial em papel.',
      C: 'Permite acesso a informaÃ§Ãµes digitais de publicaÃ§Ãµes nÃ¡uticas, como roteiro, auxÃ­lio-rÃ¡dio, lista de farÃ³is e avisos aos navegantes.',
      D: 'Tem capacidade de integraÃ§Ã£o com agulha giroscÃ³pica, radar, diversos sensores e AIS.',
      E: 'Quando utiliza cartas raster no modo RCDS, passa Ã condiÃ§Ã£o de ferramenta auxiliar de navegaÃ§Ã£o e dispensa o uso das respectivas cartas nÃ¡uticas em papel.',
    },
    correct: 'E',
    explanation:
      'Quando o ECDIS opera em modo RCDS com cartas raster, ele nÃ£o substitui plenamente a documentaÃ§Ã£o cartogrÃ¡fica oficial em papel exigida para conduÃ§Ã£o da navegaÃ§Ã£o. Por isso, a alternativa incorreta Ã© a E.',
  },
]
