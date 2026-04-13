import { Question } from '../../types/questions'

export const meteorologiaQuestions: Question[] = [
  {
    id: 3001,
    subject: 'meteorologia',
    topic: 'pressão atmosférica',
    year: 2016,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A pressão atmosférica é definida como:',
    options: {
      A: 'A força do vento sobre o mar',
      B: 'O peso da coluna de ar sobre uma superfície',
      C: 'A temperatura do ar',
      D: 'A umidade relativa',
      E: 'A densidade da água do mar',
    },
    correct: 'B',
    explanation:
      'Pressão atmosférica é o peso exercido pela coluna de ar sobre a superfície.',
  },
  {
    id: 3002,
    subject: 'meteorologia',
    topic: 'isóbaras',
    year: 2018,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Em uma carta meteorológica, as isóbaras representam:',
    options: {
      A: 'Linhas de igual temperatura',
      B: 'Linhas de igual pressão atmosférica',
      C: 'Linhas de igual vento',
      D: 'Linhas de igual umidade',
      E: 'Linhas de igual altitude',
    },
    correct: 'B',
    explanation:
      'Isóbaras são linhas que unem pontos de mesma pressão atmosférica.',
  },
  {
    id: 3003,
    subject: 'meteorologia',
    topic: 'vento',
    year: 2017,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O vento se desloca, em geral:',
    options: {
      A: 'De baixa para alta pressão',
      B: 'De alta para baixa pressão',
      C: 'Do mar para a terra sempre',
      D: 'Do equador para os polos apenas',
      E: 'Sem relação com pressão',
    },
    correct: 'B',
    explanation:
      'O vento sopra das áreas de alta pressão para áreas de baixa pressão.',
  },
  {
    id: 3004,
    subject: 'meteorologia',
    topic: 'frente fria',
    year: 2019,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Uma frente fria é caracterizada por:',
    options: {
      A: 'Ar quente avançando sobre ar frio',
      B: 'Ar frio avançando sobre ar quente',
      C: 'Ausência de vento',
      D: 'Alta pressão constante',
      E: 'Céu sempre limpo',
    },
    correct: 'B',
    explanation:
      'Frente fria ocorre quando uma massa de ar frio avança sobre uma massa de ar quente.',
  },
  {
    id: 3005,
    subject: 'meteorologia',
    topic: 'frente quente',
    year: 2019,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Uma frente quente ocorre quando:',
    options: {
      A: 'Ar quente avança sobre ar frio',
      B: 'Ar frio avança sobre ar quente',
      C: 'Não há deslocamento de massas',
      D: 'Há queda brusca de temperatura',
      E: 'Há aumento da pressão',
    },
    correct: 'A',
    explanation:
      'Frente quente ocorre quando o ar quente avança sobre o ar frio.',
  },
  {
    id: 3006,
    subject: 'meteorologia',
    topic: 'ciclone',
    year: 2020,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um ciclone é caracterizado por:',
    options: {
      A: 'Alta pressão no centro',
      B: 'Baixa pressão no centro',
      C: 'Ausência de vento',
      D: 'Céu sempre limpo',
      E: 'Temperatura constante',
    },
    correct: 'B',
    explanation:
      'Ciclones possuem baixa pressão no centro e circulação convergente.',
  },
  {
    id: 3007,
    subject: 'meteorologia',
    topic: 'anticiclone',
    year: 2020,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um anticiclone é caracterizado por:',
    options: {
      A: 'Baixa pressão no centro',
      B: 'Alta pressão no centro',
      C: 'Tempestades intensas',
      D: 'Chuvas constantes',
      E: 'Ventos convergentes',
    },
    correct: 'B',
    explanation:
      'Anticiclones possuem alta pressão e geralmente tempo estável.',
  },
  {
    id: 3008,
    subject: 'meteorologia',
    topic: 'umidade relativa',
    year: 2016,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A umidade relativa do ar representa:',
    options: {
      A: 'Quantidade total de água no mar',
      B: 'Quantidade de vapor de água em relação ao máximo possível',
      C: 'Temperatura do ar',
      D: 'Pressão atmosférica',
      E: 'Velocidade do vento',
    },
    correct: 'B',
    explanation:
      'É a relação entre o vapor presente e o máximo que o ar pode conter.',
  },
  {
    id: 3009,
    subject: 'meteorologia',
    topic: 'nevoeiro',
    year: 2018,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O nevoeiro é caracterizado por:',
    options: {
      A: 'Alta visibilidade',
      B: 'Baixa visibilidade',
      C: 'Alta pressão',
      D: 'Temperatura elevada',
      E: 'Ausência de umidade',
    },
    correct: 'B',
    explanation:
      'Nevoeiro reduz significativamente a visibilidade.',
  },
  {
    id: 3010,
    subject: 'meteorologia',
    topic: 'brisa marítima',
    year: 2017,
    exam: 'CPA',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A brisa marítima ocorre quando:',
    options: {
      A: 'O vento sopra do mar para a terra durante o dia',
      B: 'O vento sopra da terra para o mar durante o dia',
      C: 'O vento não varia',
      D: 'O vento é constante à noite',
      E: 'Não depende da temperatura',
    },
    correct: 'A',
    explanation:
      'Durante o dia, o continente aquece mais rápido, gerando vento do mar para terra.',
  },  {
    id: 2014036,
    subject: 'meteorologia',
    topic: 'furacão / semicírculo perigoso',
    year: 2014,
    exam: 'CPA-II 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Navegando no mês de setembro, numa área sujeita a furacões, onde predominam os ventos alísios, um navegante verificou que o vento aumentou e rondou na sequência NE–E–SE–S. Portanto, em relação a um possível furacão, seu navio encontrava-se',
    options: {
      A: 'no semicírculo perigoso no Hemisfério Norte.',
      B: 'no semicírculo navegável do Hemisfério Sul.',
      C: 'na trajetória do olho, adiante do fenômeno.',
      D: 'no semicírculo navegável no Hemisfério Norte.',
      E: 'no semicírculo perigoso no Hemisfério Sul.',
    },
    correct: 'A',
    explanation:
      'A ronda NE–E–SE–S, em área de furacões, caracteriza a situação do navio no semicírculo perigoso do Hemisfério Norte.',
  },
  {
    id: 2014040,
    subject: 'meteorologia',
    topic: 'imagem de satélite / cumulonimbus',
    year: 2014,
    exam: 'CPA-II 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Na interpretação de uma imagem de satélite, canal IR, uma região com aspecto de uma nuvem cumulonimbus (Cb) apresenta área com',
    options: {
      A: 'extensa faixa cinza claro.',
      B: 'nebulosidade redonda cinza bem escuro.',
      C: 'conglomerados de nuvens bem brancas.',
      D: 'larga faixa de nebulosidade branca e cinza.',
      E: 'nuvens brancas esfiapadas.',
    },
    correct: 'C',
    explanation:
      'Em imagem IR, cumulonimbus costuma aparecer como conglomerados muito brancos, associados a topos frios e grande desenvolvimento vertical.',
  },
  {
    id: 2014041,
    subject: 'meteorologia',
    topic: 'ronda dos ventos após frente fria',
    year: 2014,
    exam: 'CPA-II 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Nas regiões costeiras sul e sudeste do Brasil, depois da passagem de uma frente fria, os navegantes observam a seguinte ronda dos ventos, respectivamente:',
    options: {
      A: 'NW / SW.',
      B: 'NE / NW.',
      C: 'S / SW.',
      D: 'S / NW.',
      E: 'SW / N.',
    },
    correct: 'A',
    explanation:
      'Após a passagem de uma frente fria no Sul e Sudeste do Brasil, o vento costuma rondar para quadrantes de oeste/sudoeste, conforme a reorganização do campo de pressão atrás do sistema frontal. Por isso, a combinação NW / SW é a compatível com o cenário.',
  },
  {
    id: 2014042,
    subject: 'meteorologia',
    topic: 'área geradora de vagas',
    year: 2014,
    exam: 'CPA-II 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Na identificação de área geradora de vagas, em uma carta sinótica de pressão ao nível do mar, o navegante observa os seguintes aspectos das isóbaras:',
    options: {
      A: 'paralelas, curvas e estreitas.',
      B: 'curtas, largas e curvas.',
      C: 'retilíneas, longas e estreitas.',
      D: 'longas, largas e paralelas.',
      E: 'largas, retilíneas e paralelas.',
    },
    correct: 'C',
    explanation:
      'Isóbaras retilíneas, longas e com espaçamento estreito indicam pista de vento forte e persistente, condição típica de área geradora de vagas.',
  },
  {
    id: 2017035,
    subject: 'meteorologia',
    topic: 'frente fria / análise sinótica',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um Capitão Amador navegando numa linda tarde ao largo do Cabo Frio (RJ), analisou a carta sinótica de 12:00Z do dia 27/abril e observou a existência de um ciclone extratropical a leste de Santos (SP) com uma frente fria associada se deslocando para nordeste (NE). O anemômetro de bordo indicava, naquele momento, o vento verdadeiro vindo de noroeste (NW) tendo rondado no sentido anti-horário durante as horas precedentes. Em vista dessa situação, pode-se concluir que',
    options: {
      A: 'a frente fria ainda não passou por Cabo Frio, e a pressão na área está aumentando.',
      B: 'a frente fria já passou por Cabo Frio, e a temperatura na área está em ascensão.',
      C: 'o tempo no Cabo Frio é bom, pois a massa de ar frio ainda está presente.',
      D: 'a faixa de nuvens na área é bastante larga, devido à superfície frontal apresentar pequena inclinação.',
      E: 'a embarcação do capitão se encontra na massa de ar quente do sistema frontal e a pressão na área está diminuindo.',
    },
    correct: 'C',
    explanation:
      'A posição do ciclone e da frente, somada à ronda do vento observada, indica situação pós-frontal, com presença de ar frio e melhora relativa do tempo. Isso torna correta a alternativa que identifica permanência da massa de ar frio na área.',
  },
  {
    id: 2019001,
    subject: 'meteorologia',
    topic: 'nevoeiro de radiação',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Como é chamado o nevoeiro que se forma pelo ar úmido em contato com a superfície da terra que foi submetida a um resfriamento noturno?',
    options: {
      A: 'Frontal.',
      B: 'Advecção.',
      C: 'Orográfico.',
      D: 'Radiação.',
      E: 'Vapor.',
    },
    correct: 'D',
    explanation:
      'Nevoeiro de radiação é o que se forma por resfriamento noturno da superfície continental.',
  },
  {
    id: 2017037,
    subject: 'meteorologia',
    topic: 'corrente de deriva / costa',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Faça a análise das afirmativas abaixo e assinale a opção correta. I. Após a passagem de uma frente fria, um Capitão Amador, navegando na região sul do Brasil, numa região costeira com forte gradiente horizontal de profundidade, deve ter atenção para que a corrente de deriva não o ponha em perigo, empurrando-o para a costa. II. A corrente de ressaca põe o navegante na região costeira em risco ao empurrá-lo na direção da costa. III. Quanto maior o comprimento de onda, mais distante da costa se encontrará a profundidade de interferência.',
    options: {
      A: 'todas as afirmativas são falsas.',
      B: 'todas as afirmativas são verdadeiras.',
      C: 'apenas a afirmativa I é verdadeira.',
      D: 'apenas a afirmativa I é falsa.',
      E: 'as afirmativas I e III são verdadeiras.',
    },
    correct: 'E',
    explanation:
      'A III é verdadeira porque ondas mais longas passam a sentir o fundo em maiores profundidades; a II é falsa porque corrente de ressaca tende a afastar da praia.',
  },
  {
    id: 2017038,
    subject: 'meteorologia',
    topic: 'ondas de Kelvin',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um Capitão Amador, navegando na região tropical do Atlântico Sul, sabe que a continentalidade devida à Amazônia contribui para a ocorrência de ondas de Kelvin, cujos efeitos são:',
    options: {
      A: 'forte cisalhamento do vento de leste, que inibe a formação de furacões.',
      B: 'intensificação de anticiclones subtropicais no Atlântico Sul.',
      C: 'resfriamento abrupto da TSM e redução da umidade relativa.',
      D: 'subsidência intensa e dissipação de nebulosidade convectiva.',
      E: 'favorecimento da convecção e organização de sistemas meteorológicos em determinadas situações tropicais.',
    },
    correct: 'E',
    explanation:
      'Ondas de Kelvin podem favorecer organização de convecção em ambiente tropical, ajudando no desenvolvimento de áreas de instabilidade. Por isso, a alternativa correta é a que associa esse mecanismo ao favorecimento da convecção.',
  },
  {
    id: 2017039,
    subject: 'meteorologia',
    topic: 'ZCIT / tempestades isoladas',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Sempre que se navega no Atlântico norte próximo ao Equador, a previsão de tempestade isolada com chuvas torrenciais de curta duração deve-se:',
    options: {
      A: 'à zona de convergência intertropical.',
      B: 'ao prolongamento das frentes frias vindas do sul.',
      C: 'à bifurcação da corrente norte equatorial.',
      D: 'à ressurgência das águas profundas na região do Caribe.',
      E: 'ao fenômeno El Niño.',
    },
    correct: 'A',
    explanation:
      'Próximo ao Equador, esse padrão convectivo intenso está associado à ZCIT.',
  },
  {
    id: 2019002,
    subject: 'meteorologia',
    topic: 'sistema frontal / deslocamento da massa fria',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um sistema frontal apresenta uma depressão junto à frente fria e dois anticiclones das massas de ar fria e quente. A diferença de pressão entre os dois anticiclones irá determinar a',
    options: {
      A: 'velocidade angular do ciclone.',
      B: 'pressão no centro de baixa pressão.',
      C: 'intensidade da precipitação do sistema frontal.',
      D: 'velocidade de deslocamento da massa de ar frio.',
      E: 'nebulosidade da massa de ar quente.',
    },
    correct: 'D',
    explanation:
      'O gradiente entre os anticiclones está diretamente ligado ao avanço da massa fria e ao deslocamento do sistema.',
  },
  {
    id: 2018036,
    subject: 'meteorologia',
    topic: 'TSM',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Quanto à Temperatura da Superfície do Mar (TSM), podemos afirmar que',
    options: {
      A: 'apresenta grande variação entre o dia e a noite.',
      B: 'influi significativamente na umidade absoluta do ar sobrejacente.',
      C: 'quando TSM > T não há possibilidade de haver circulação direta.',
      D: 'as superfícies secas (continente) necessitam 3 vezes mais calor para se aquecer do que as úmidas (oceano – TSM).',
      E: 'só é possível haver visibilidade restrita devido a um nevoeiro de advecção, quando TPO < TSM.',
    },
    correct: 'B',
    explanation:
      'A TSM afeta diretamente evaporação e disponibilidade de vapor d’água no ar sobrejacente.',
  },
  {
    id: 2019003,
    subject: 'meteorologia',
    topic: 'nuvens pré-frontais',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Qual é o tipo de nuvem que forma uma densa camada com os discos solar ou lunar podendo ser vistos de forma difusa, porém sem apresentar halo, e prenuncia a chegada de uma frente fria, quando a massa de ar quente ainda está presente?',
    options: {
      A: 'Stratus.',
      B: 'Cumulonimbus.',
      C: 'Altostratus.',
      D: 'Cirrocumulus.',
      E: 'Stratocumulus.',
    },
    correct: 'C',
    explanation:
      'Altostratus costuma formar camada uniforme, deixando Sol ou Lua visíveis de forma difusa e sem halo marcado.',
  },
  {
    id: 2018038,
    subject: 'meteorologia',
    topic: 'ciclone subtropical / ZCAS',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Qual é o fenômeno perigoso à navegação originário de um centro de baixa pressão não associado a um sistema frontal que, quando ocorre no Brasil, se organiza na região Sudeste ou Sul sobre águas quentes do oceano, e se origina de um ar muito úmido transportado da região amazônica pela Zona de Convergência do Atlântico Sul (ZCAS)?',
    options: {
      A: 'Ciclone tropical.',
      B: 'Perturbação baroclínica.',
      C: 'Ciclone extratropical.',
      D: 'Tormenta barotrópica.',
      E: 'Ciclone subtropical.',
    },
    correct: 'E',
    explanation:
      'O enunciado descreve um centro de baixa pressão sem frente associada, organizado sobre águas quentes e alimentado por ar muito úmido da Amazônia via ZCAS. Esse conjunto de características corresponde a ciclone subtropical.',
  },
  {
    id: 2018039,
    subject: 'meteorologia',
    topic: 'ventos alísios',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Com relação aos ventos alísios, qual das assertivas abaixo está correta?',
    options: {
      A: 'Ocorrem em latitudes médias na célula de Ferrel.',
      B: 'São ventos constantes e moderados de direção geral leste (nordeste ou sudeste), entre a faixa de Altas Pressões Subtropicais e os Doldrums.',
      C: 'Sopram com direção geral W entre as latitudes de 30° ou 35°.',
      D: 'No Hemisfério Sul, abaixo da ZCIT, têm direção nordeste (NE).',
      E: 'São ventos muito fortes que causam grandes vagas de direção NW ou W.',
    },
    correct: 'B',
    explanation:
      'A descrição clássica dos alísios é de ventos persistentes de leste entre os anticiclones subtropicais e a faixa de convergência equatorial.',
  },
    {
    id: 2015035,
    subject: 'meteorologia',
    topic: 'carta sinótica / área geradora de vagas',
    year: 2015,
    exam: 'CPA-I 2015',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Na interpretação da carta sinótica, o navegante identifica área geradora de vagas, pelas seguintes características das isóbaras:',
    options: {
      A: 'isóbaras longas e estreitas, em um centro de baixa pressão à superfície.',
      B: 'isóbaras paralelas com vento forte.',
      C: 'isóbaras com espaçamento estreito e retilíneas, em alta ou baixa pressão à superfície.',
      D: 'vento forte, com isóbaras curvas e bem longas.',
      E: 'gradiente horizontal de pressão forte e vento forte com isóbaras longas.',
    },
    correct: 'C',
    explanation:
      'Área geradora de vagas aparece quando há vento forte e persistente sobre grande extensão. Em carta sinótica, isso é reconhecido por isóbaras próximas e retilíneas, que indicam forte gradiente de pressão e pista de vento.',
  },
  {
    id: 2015036,
    subject: 'meteorologia',
    topic: 'meteoromarinha / mar severo',
    year: 2015,
    exam: 'CPA-I 2015',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Na interpretação de um boletim Meteoromarinha, METAREA V, o navegante identifica uma situação de mar severo, na costa da região sudeste, quando as ondas apresentam as seguintes características:',
    options: {
      A: 'direção para S e altura superior a 3 metros.',
      B: 'grande comprimento e altura superior a 3 metros.',
      C: 'altura superior a 3 metros e direção de NW.',
      D: 'direção de SE e grande comprimento.',
      E: 'ondas de NW, com grande volume.',
    },
    correct: 'B',
    explanation:
      'Mar severo está associado a ondas altas e com grande comprimento, sinal de energia elevada e mar já desenvolvido. Por isso, a descrição mais compatível é altura superior a 3 metros com grande comprimento de onda.',
  },
  {
    id: 2015037,
    subject: 'meteorologia',
    topic: 'imagem de satélite / frente fria',
    year: 2015,
    exam: 'CPA-I 2015',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Na interpretação de uma imagem de satélite, da região Sul e Sudeste do Brasil, com ocorrência de uma frente fria (FF), o navegante identifica uma situação de mar calmo, na navegação costeira, da seguinte área:',
    options: {
      A: 'área da passagem da frente fria (FF).',
      B: 'em toda a região de ocorrência da FF.',
      C: 'área antes da FF.',
      D: 'com FF, não há área calma.',
      E: 'área depois da FF.',
    },
    correct: 'E',
    explanation:
      'Depois da frente fria, a tendência é de estabilização progressiva do mar na retaguarda do sistema, enquanto na faixa frontal e à frente dele o tempo é mais agitado. Por isso, a área de mar calmo é a área depois da FF.',
  },
  {
    id: 2016036,
    subject: 'meteorologia',
    topic: 'nevoeiro de advecção',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No mar, é importante o navegante estar atento à previsão de nevoeiro de advecção (nevoeiro do mar), que consiste em acompanhar a trajetória do ar quente e úmido e avaliar o resfriamento que o ar sofre no seu trajeto. São características do nevoeiro de advecção:',
    options: {
      A: 'TSM > TPO e calmaria.',
      B: 'TPO > TSM e vento fraco a moderado.',
      C: 'Não tem hora para ocorrer e TSM > TPO.',
      D: 'Umidade relativa (UR) > 95% e ar instável.',
      E: 'T > TPO e vento fraco.',
    },
    correct: 'B',
    explanation:
      'No nevoeiro de advecção, ar quente e úmido desloca-se sobre uma superfície do mar mais fria, resfria-se por baixo e condensa. Isso corresponde à condição TPO > TSM, com vento fraco a moderado para manter o transporte de ar.',
  },
  {
    id: 2017036,
    subject: 'meteorologia',
    topic: 'nevoeiro de radiação',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Como é chamado o nevoeiro que se forma pelo ar úmido em contato com a superfície da terra que foi submetida a um resfriamento noturno?',
    options: {
      A: 'Frontal.',
      B: 'Advecção.',
      C: 'Orográfico.',
      D: 'Radiação.',
      E: 'Vapor.',
    },
    correct: 'D',
    explanation:
      'Nevoeiro de radiação forma-se sobre a terra quando a superfície perde calor durante a noite, resfria o ar úmido adjacente e provoca condensação. Por isso, a resposta correta é radiação.',
  },
  {
    id: 2018035,
    subject: 'meteorologia',
    topic: 'sistema frontal / deslocamento da massa fria',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um sistema frontal apresenta uma depressão junto à frente fria e dois anticiclones das massas de ar fria e quente. A diferença de pressão entre os dois anticiclones irá determinar a',
    options: {
      A: 'velocidade angular do ciclone.',
      B: 'pressão no centro de baixa pressão.',
      C: 'intensidade da precipitação do sistema frontal.',
      D: 'velocidade de deslocamento da massa de ar frio.',
      E: 'nebulosidade da massa de ar quente.',
    },
    correct: 'D',
    explanation:
      'A diferença de pressão entre os anticiclones controla o empuxo da massa fria e, consequentemente, a velocidade de avanço da frente. Por isso, o parâmetro determinado por essa diferença é a velocidade de deslocamento da massa de ar frio.',
  },
  {
    id: 2018037,
    subject: 'meteorologia',
    topic: 'nuvens pré-frontais',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Qual é o tipo de nuvem que forma uma densa camada com os discos solar ou lunar podendo ser vistos de forma difusa, porém sem apresentar halo, e prenuncia a chegada de uma frente fria, quando a massa de ar quente ainda está presente?',
    options: {
      A: 'Stratus.',
      B: 'Cumulonimbus.',
      C: 'Altostratus.',
      D: 'Cirrocumulus.',
      E: 'Stratocumulus.',
    },
    correct: 'C',
    explanation:
      'Altostratus forma camada extensa e uniforme, deixando Sol ou Lua visíveis de forma difusa, sem halo marcado, e é típico da aproximação de sistema frontal. Por isso, a alternativa correta é Altostratus.',
  },
  {
    id: 2020007,
    subject: 'meteorologia',
    topic: 'carta sinótica + satélite / associação',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      `Na interpretacao das informacoes de uma carta sinotica e de uma imagem de satelite meteorologico do oceano Atlantico Sul, o navegante pode identificar os elementos de um sistema frontal. Baseado nessa interpretacao, faca a associacao dos parametros meteorologicos das colunas 1 e 2.

Coluna 1
1. Frente fria
2. Frente quente
3. Centro de baixa pressao
4. Centro de alta pressao
5. Faixa principal de nebulosidade
6. Ar frio pos-frontal
7. Ar quente pre-frontal
8. Cavado

Coluna 2
1. Banda de nuvens compacta e alongada associada ao sistema frontal
2. Setor situado atras da frente fria
3. Regiao ciclonica identificada pelas isobaras fechadas
4. Regiao anticiclonica identificada pelas isobaras fechadas
5. Descontinuidade entre massas de ar com avanço do ar frio
6. Descontinuidade frontal com ar quente ascendendo sobre ar frio
7. Setor quente a frente da frente fria
8. Alongamento do campo de baixa pressao sem circulacao fechada`,
    options: {
      A: '(1) (-) (3) (6) (2) (5) (-) (4)',
      B: '(3) (5) (1) (6) (-) (2) (4) (-)',
      C: '(5) (-) (3) (6) (2) (1) (4) (-)',
      D: '(3) (4) (1) (5) (2) (-) (6) (-)',
      E: '(5) (6) (3) (-) (2) (1) (4) (-)',
    },
    correct: 'A',
    explanation:
      'A associacao correta e a que preserva as relacoes sinoticas classicas: frente fria com sua descontinuidade propria, banda principal de nebulosidade acompanhando o sistema, centro de baixa pressao na area ciclonica, centro de alta pressao na area anticiclonica e ar frio ocupando o setor pos-frontal. A sequencia compativel com esse conjunto e a da alternativa A.',
    attachments: [
      { label: 'Carta sinótica', path: '/anexos/meteorologia/carta-sinotica-atlantico-sul.pdf' },
      { label: 'Imagem de satélite meteorológico', path: '/anexos/meteorologia/satelite-atlantico-sul.pdf' },
    ],
  },
  {
    id: 2020012,
    subject: 'meteorologia',
    topic: 'frente fria / análise sinótica',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um Capitão-Amador navegando numa tarde de verão ao largo do Guarujá (SP), analisou a carta sinótica das 12:00Z e observou a existência de um ciclone extratropical a leste de Paranaguá (PR) com uma frente fria associada se deslocando para Nordeste (NE). O anemômetro de bordo indicava, naquele momento, o vento verdadeiro vindo de Noroeste (NW) tendo rondado no sentido anti-horário durante as horas precedentes. Em vista desta situação, pode-se concluir que',
    options: {
      A: 'a frente fria ainda não passou pelo Guarujá e a pressão na área está aumentando.',
      B: 'o tempo no Guarujá é bom, pois a massa de ar frio ainda está presente.',
      C: 'a faixa de nuvens na dianteira da frente fria é bastante larga, devido à superfície frontal apresentar suave inclinação.',
      D: 'a embarcação do Capitão se encontra na massa de ar quente do sistema frontal e a pressão na área está diminuindo.',
      E: 'a temperatura no Guarujá está em declínio com a presença de nuvens estratiformes.',
    },
    correct: 'D',
    explanation:
      'Vento de NW com ronda anti-horária antes da passagem da frente indica permanência da embarcação no setor quente do sistema frontal. Nessa situação, a pressão tende a cair, tornando correta a alternativa D.',
  },
  {
    id: 2025021,
    subject: 'meteorologia',
    topic: 'ZCIT',
    year: 2025,
    exam: 'CPA-I 2025',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A convergência dos ventos Alísios do Hemisfério Sul e do Hemisfério Norte desencadeia um cinturão de baixas pressões em superfície, consequentemente muitas nuvens do tipo Cb (cumulonimbus). Esse sistema é chamado de:',
    options: {
      A: 'Frente Fria.',
      B: 'Frente Quente.',
      C: 'Zona de Convergência da América do Sul.',
      D: 'Zona de Convergência Intertropical.',
      E: 'Área das “Freak Waves”.',
    },
    correct: 'D',
    explanation:
      'A convergência dos alísios dos dois hemisférios gera uma faixa de baixa pressão com forte convecção e muitos cumulonimbus. Esse sistema é justamente a Zona de Convergência Intertropical.',
  },
  {
    id: 2025022,
    subject: 'meteorologia',
    topic: 'carta sinótica / pista de vento forte',
    year: 2025,
    exam: 'CPA-I 2025',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Assinale a alternativa que representa um critério para localização de vento forte e de formação de uma “pista” em uma carta sinótica.',
    options: {
      A: 'Centro de alta pressão distante do centro de baixa pressão.',
      B: 'Um cavado apontando para as altas latitudes.',
      C: 'Isóbaras próximas e retilíneas.',
      D: 'Isóbaras afastadas.',
      E: 'Isóbaras curvadas.',
    },
    correct: 'C',
    explanation:
      'Uma pista de vento forte em carta sinótica aparece onde o gradiente de pressão é intenso e organizado, o que se traduz em isóbaras próximas e relativamente retilíneas. Por isso, a alternativa correta é a C.',
  },
  {
    id: 2022025,
    subject: 'meteorologia',
    topic: 'ciclone tropical',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um Capitão-Amador pode afirmar, em relação a um ciclone tropical, que são corretas as seguintes características abaixo:\n\nI - Ocorre em área de alta pressão.\nII - Temperatura da Superfície do Mar (TSM) maior que 27°.\nIII - Corrente de ar quente descendente.\nIV - Presença da força de Coriolis.\nV - Presença de ar seco e quente.',
    options: {
      A: 'I, II e V.',
      B: 'II e V.',
      C: 'II e IV.',
      D: 'I, III e IV.',
      E: 'III e V.',
    },
    correct: 'C',
    explanation:
      'Ciclones tropicais se desenvolvem sobre águas muito quentes, com TSM tipicamente acima de 27 °C, e dependem da força de Coriolis para organizar a circulação. Eles não se formam em área de alta pressão, nem têm como característica básica ar seco e quente ou corrente descendente no núcleo de desenvolvimento. Por isso, as afirmações corretas são II e IV.',
  },
  {
    id: 2022026,
    subject: 'meteorologia',
    topic: 'isóbaras / ressaca',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um Capitão-Amador pode afirmar em relação às isóbaras de uma carta sinótica, que é correta a seguinte conclusão abaixo.',
    options: {
      A: 'Maior espaçamento entre as linhas de igual pressão nos indica uma maior intensidade dos ventos.',
      B: 'Isóbaras com longos trechos retilíneos, paralelas à costa causam ressaca.',
      C: 'Isóbaras curvilíneas, extensas, perpendiculares e espaçadas formam áreas geradoras de ondas.',
      D: 'Menor espaçamento entre as isóbaras nos indica uma menor intensidade dos ventos.',
      E: 'Isóbaras com longos trechos retilíneos, perpendiculares à costa causam ressaca.',
    },
    correct: 'E',
    explanation:
      'Quanto menor o espaçamento entre as isóbaras, maior tende a ser a intensidade do vento, então as alternativas A e D estão invertidas. Para geração de ressaca na costa, interessa uma pista de vento persistente empurrando o mar na direção do litoral, o que é compatível com isóbaras longas e aproximadamente perpendiculares à costa. Por isso, a alternativa correta é a E.',
  },
  
]
