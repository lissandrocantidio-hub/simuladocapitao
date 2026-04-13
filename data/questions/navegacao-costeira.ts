import { Question } from '../../types/questions'

export const navegacaoCosteiraQuestions: Question[] = [{
  id: 2022028,
  subject: 'navegacao',
  topic: 'marés',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Determine a altura de maré demandando um porto às 14:24 horas, conforme a tábua de marés apresentada para o referido dia. O Capitão-Amador deverá usar os elementos das tabelas dos quadros abaixo.`,

  attachments: [
    {
      label: 'Tábua de marés (CPA-I 2022)',
      path: '/anexos/cpa2022-q28-mares.pdf',
    }
  ],

  options: {
    A: '1,2 m',
    B: '1,1 m',
    C: '1,0 m',
    D: '0,9 m',
    E: '0,8 m',
  },

  correct: 'C',

  explanation: `Pela tábua, a preamar mais próxima antes do horário pedido ocorre às 12:24 com altura de 1,2 m, e a baixamar seguinte às 19:24 com altura de 0,3 m. Portanto, a maré está vazando.

A amplitude é de 0,9 m e, de 12:24 até 14:24, decorrem 2 horas em um intervalo total de 7 horas. Usando as tabelas fornecidas na prova para a fração da amplitude e a correção correspondente, a redução aproximada da altura leva a uma maré de 1,0 m às 14:24.

Por isso, a alternativa correta é a C.`,
},
{
  id: 2022029,
  subject: 'navegacao',
  topic: 'marés',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Em relação às causas das oscilações de marés, assinale a opção com as afirmativas corretas:

I - pela atração da Lua
II - pela atração do Sol
III - pela força centrípeta
IV - pela força de Coriolis
V - pela força centrífuga`,

  options: {
    A: 'I, II e V.',
    B: 'I, III e V.',
    C: 'II e IV.',
    D: 'I, III e IV.',
    E: 'III, IV e V.',
  },

  correct: 'A',

  explanation: `As marés resultam principalmente da atração gravitacional da Lua e do Sol, combinada com o efeito centrífugo do sistema Terra-Lua. Já a força de Coriolis influencia movimentos sobre a Terra, mas não é a causa geradora básica das marés, e a força centrípeta não é listada como causa física independente nesse contexto de prova.

Por isso, o conjunto correto é I, II e V.`,
},
{
  id: 2022019,
  subject: 'navegacao',
  topic: 'ecobatímetro / cartas náuticas',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Quanto ao correto uso do ecobatímetro e ao uso das cartas náuticas, analise as seguintes afirmações e assinale a afirmativa correta:

I - O navegante irá avaliar se a profundidade medida oferece perigo, de acordo com o calado da embarcação.
II - O navegante irá comparar a profundidade medida com a posição obtida na carta náutica por outros métodos ou sistemas de navegação.
III - O navegante poderá obter uma LDP que se lança mão na navegação costeira, em condições especiais.
IV - As profundidades registradas nas cartas náuticas têm como origem o Nível de Redução que, nas cartas da DHN, é definido como a média das baixa-mares de quadratura.`,

  options: {
    A: 'Apenas as afirmativas I, II e IV são verdadeiras.',
    B: 'Apenas as afirmativas III e IV são verdadeiras.',
    C: 'Apenas as afirmativas I, II e III são verdadeiras.',
    D: 'Apenas as afirmativas II e III são verdadeiras.',
    E: 'Apenas as afirmativas I e IV são verdadeiras.',
  },

  correct: 'C',

  explanation: `As afirmativas I e II estão corretas porque o ecobatímetro deve ser interpretado à luz do calado da embarcação e comparado com a posição obtida por outros meios. A III também é correta, pois a profundidade pode ajudar na obtenção de uma Linha de Posição em condições específicas de navegação costeira.

A IV está incorreta porque o Nível de Redução adotado nas cartas da DHN não é definido como média das baixa-mares de quadratura. Por isso, a alternativa correta é a C.`,
},
{
  id: 2022031,
  subject: 'navegacao',
  topic: 'declinação magnética / marcação verdadeira',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Uma embarcação navegava em fevereiro desse ano no rumo magnético 230° e avistou um farol na marcação magnética 330°. As informações da declinação magnética retirada da rosa dos ventos da carta náutica são de 16° 30’E (2002) (8’W). Qual é a marcação verdadeira do farol?`,

  options: {
    A: '244°.',
    B: '249°.',
    C: '344°.',
    D: '346°.',
    E: '349°.',
  },

  correct: 'C',

  explanation: `A declinação indicada na carta é 16°30’ E em 2002 com variação anual de 8’ W. Atualizando até fevereiro de 2022, a declinação fica reduzida em aproximadamente 2°40’, resultando em cerca de 13°50’ E.

Como a marcação magnética observada foi 330°, para obter a marcação verdadeira soma-se a declinação leste: 330° + 13°50’ ≈ 343°50’, arredondando para 344°.

Por isso, a alternativa correta é a C.`,
},
{
  id: 2022032,
  subject: 'navegacao',
  topic: 'projeção de Mercator / ortodromia',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Geralmente as cartas náuticas são construídas na projeção de Mercator. Como é representado numa carta náutica de Mercator uma ortodromia?`,

  options: {
    A: 'Uma curva.',
    B: 'Um arco de círculo menor.',
    C: 'Uma elipse.',
    D: 'Um arco de meridiano.',
    E: 'Uma reta.',
  },

  correct: 'A',

  explanation: `Na projeção de Mercator, a loxodromia aparece como reta, enquanto a ortodromia, por ser o caminho de círculo máximo, é representada como uma curva na maior parte dos casos. Por isso, a alternativa correta é a A.`,
},
{
  id: 2022033,
  subject: 'navegacao',
  topic: 'carta náutica / elementos',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `NÃO é um elemento de uma carta náutica:`,

  options: {
    A: 'o reticulado.',
    B: 'a escala natural de velocidade.',
    C: 'a rosa de rumos.',
    D: 'as notas de precaução e explanatórias.',
    E: 'o título da carta náutica.',
  },

  correct: 'B',

  explanation: `Reticulado, rosa de rumos, notas explanatórias e título são elementos usuais de uma carta náutica. Já “escala natural de velocidade” não é elemento cartográfico de carta náutica. Por isso, a alternativa correta é a B.`,
},
{
  id: 2022034,
  subject: 'navegacao',
  topic: 'escala da carta náutica',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `“Escala é definida como a relação entre um valor gráfico, na carta náutica, e o valor real correspondente, na superfície da Terra”. Em relação à escala, um dos elementos representados na carta náutica, pode-se afirmar que`,

  options: {
    A: 'em uma Carta de Mercator a escala de longitudes não é constante.',
    B: 'cartas de “pequena escala” são utilizadas para a aproximação de portos, em águas costeiras.',
    C: 'a escala de longitudes varia em função das latitudes crescidas.',
    D: 'quanto menor o denominador da escala, menor a escala',
    E: 'a escala natural só é perfeitamente válida ao longo do paralelo médio.',
  },

  correct: 'E',

  explanation: `Em cartas náuticas, a escala gráfica e natural precisa ser interpretada com cuidado conforme a projeção. Na formulação cobrada pela prova, a afirmação correta é que a escala natural só é perfeitamente válida ao longo do paralelo médio. As demais alternativas trazem generalizações incorretas ou conceitos invertidos sobre escala.`,
},
{
  id: 2022035,
  subject: 'navegacao',
  topic: 'cartas de maior escala',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Cartas de maior escala:`,

  options: {
    A: 'apresentam maior grau de detalhamento da área a ser navegada.',
    B: 'apresentam maior grau de detalhe do relevo submarino e da área a ser navegada.',
    C: 'impedem erros gráficos de plotagem.',
    D: 'são utilizadas para a navegação em alto-mar.',
    E: 'são construídas na projeção gnomônica.',
  },

  correct: 'A',

  explanation: `Cartas de maior escala cobrem áreas menores com mais detalhes, sendo justamente as mais adequadas para navegação costeira, aproximação e manobras em áreas restritas. Elas não impedem erros de plotagem, não são típicas de alto-mar e não se definem pela projeção gnomônica. Por isso, a alternativa correta é a A.`,
},
{
  id: 20222022,
  subject: 'navegacao',
  topic: 'balizamento IALA / Lista de Faróis',
  year: 2022,
  exam: 'CPA-II 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `A publicação da DHN "Lista de Faróis" informa que o Sistema de Balizamento Marítimo IALA da Região B possui cinco tipos de sinais, que podem ser usados de forma combinada. Dentre as alternativas abaixo, assinale a que NÃO é verdadeira.`,

  options: {
    A: 'Sinais laterais, associados a uma Direção Convencional do Balizamento, são usados em canais bem definidos, indicando bombordo e boreste da rota a ser seguida; quando um canal se bifurca, um sinal lateral modificado pode indicar a via preferencial.',
    B: 'Sinais setoriais, cujo emprego está associado ao da agulha de navegação, indicam o setor onde se poderão encontrar águas perigosas à navegação.',
    C: 'Sinais de perigo isolado são usados para indicar perigos isolados de tamanho limitado, cercados por águas navegáveis.',
    D: 'Sinais de águas seguras são usados para indicar que em torno de sua posição as águas são navegáveis, como sinais de meio de canal ou de aterragem.',
    E: 'Sinais especiais têm como objetivo principal indicar uma área ou peculiaridade mencionada em documentos náuticos, e não orientar a navegação.',
  },

  correct: 'B',

  explanation: `Os sinais setoriais não indicam diretamente o setor de águas perigosas a partir do uso da agulha como descrito na alternativa B. Eles delimitam setores por cores e luzes, orientando o navegante quanto a águas seguras ou perigos relativas ao setor observado. Por isso, a alternativa incorreta é a B.`,
},
{
  id: 20222024,
  subject: 'navegacao',
  topic: 'carta náutica / uso e confiabilidade',
  year: 2022,
  exam: 'CPA-II 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Sobre as cartas náuticas convencionais impressas em papel e publicadas pela DHN, assinale a opção correta.`,

  options: {
    A: 'As cartas náuticas com escala 1:150.000 possuem menos detalhes do que as cartas com escala 1:500.000.',
    B: 'Como norma de navegação, deve-se navegar na carta de menor escala.',
    C: 'Em uma carta de projeção de Mercator, a escala de longitudes é variável.',
    D: 'A escala natural da carta náutica só é verdadeira ao longo do meridiano de referência.',
    E: 'O navegante deve evitar confiar cegamente na carta náutica e ser capaz de avaliar a confiança que ela pode inspirar.',
  },

  correct: 'E',

  explanation: `A carta náutica é essencial, mas tem limitações de levantamento, atualização e escala. O navegante precisa interpretá-la criticamente e cruzar seus dados com outros meios. Por isso, a alternativa correta é a E.`,
},
{
  id: 20222025,
  subject: 'navegacao',
  topic: 'cartas de corrente de maré',
  year: 2022,
  exam: 'CPA-II 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Sobre as publicações das Cartas de Corrente de Maré, publicadas pela DHN, assinale a alternativa correta.`,

  options: {
    A: 'Todos os portos brasileiros possuem essa publicação, que detalha direção e corrente de maré durante todas as épocas do ano.',
    B: 'Cada Carta de Corrente de Maré é composta de 13 cartas: uma na preamar, seis de hora em hora antes da preamar e seis de hora em hora depois da preamar.',
    C: 'Só existem Cartas de Corrente de Maré para locais de maré semidiurna, devido à previsibilidade do movimento das águas.',
    D: 'Nos períodos de marés de quadratura considera-se a metade do valor registrado nas cartas, mantendo-se as direções.',
    E: 'As Cartas de Corrente de Maré consideram a influência dos ventos costeiros nas direções e intensidades representadas.',
  },

  correct: 'B',

  explanation: `A formulação clássica dessas cartas usa uma sequência de instantes referidos à preamar, com cartas horárias antes e depois desse instante, totalizando 13 representações. Por isso, a alternativa correta é a B.`,
},
{
  id: 20222026,
  subject: 'navegacao',
  topic: 'ortodromia / loxodromia / grandes travessias',
  year: 2022,
  exam: 'CPA-II 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Quanto ao uso de cartas náuticas em grandes travessias, analise as afirmativas abaixo e assinale a alternativa correta.

I - Nas cartas gnomônicas, as loxodromias, ou linhas de rumo, são representadas como linhas curvas.
II - Ao se transportar uma derrota ortodrômica para cartas da projeção de Mercator, as seções de derrotas loxodrômicas devem ter no máximo 600 milhas náuticas.
III - Navegar em ortodromias é navegar sobre arcos de círculos máximos.
IV - Nas cartas de projeção de Mercator, as linhas de rumo são ortodromias.`,

  options: {
    A: 'Somente as afirmativas I e II são verdadeiras.',
    B: 'Somente as afirmativas I, II e III são verdadeiras.',
    C: 'Somente as afirmativas II e III são verdadeiras.',
    D: 'Somente as afirmativas III e IV são verdadeiras.',
    E: 'Somente as afirmativas I, II e IV são verdadeiras.',
  },

  correct: 'B',

  explanation: `Na projeção gnomônica, a ortodromia aparece como reta, enquanto a loxodromia aparece como curva. Em Mercator, as linhas de rumo são loxodromias, não ortodromias. Assim, I, II e III são verdadeiras, e IV é falsa. Por isso, a alternativa correta é a B.`,
},
{
  id: 20212009,
  subject: 'navegacao',
  topic: 'carta nÃ¡utica / definiÃ§Ã£o',
  year: 2021,
  exam: 'CPA-II 2021',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Como se chama o documento cartogrÃ¡fico resultante de levantamentos de Ã¡reas oceÃ¢nicas, mares, baÃ­as, rios, canais, lagos, lagoas ou qualquer outra massa d'Ã¡gua navegÃ¡vel, destinado a servir de base Ã navegaÃ§Ã£o?`,

  options: {
    A: 'ProjeÃ§Ã£o transversa de Mercator.',
    B: 'Carta de Ney.',
    C: 'Carta naval.',
    D: 'Carta de auxÃ­lio.',
    E: 'Carta nÃ¡utica.',
  },

  correct: 'E',

  explanation: `O documento cartogrÃ¡fico oficial elaborado para representar Ã¡guas navegÃ¡veis e apoiar a seguranÃ§a da navegaÃ§Ã£o Ã© a carta nÃ¡utica. Por isso, a alternativa correta Ã© a E.`,
},
{
  id: 20212010,
  subject: 'navegacao',
  topic: 'projeÃ§Ã£o de Mercator',
  year: 2021,
  exam: 'CPA-II 2021',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Cartas nÃ¡uticas para baixas latitudes sÃ£o, em sua maioria, construÃ­das na projeÃ§Ã£o de:`,

  options: {
    A: 'Ney.',
    B: 'Lambert.',
    C: 'Mercator.',
    D: 'Peters.',
    E: 'Cones simples.',
  },

  correct: 'C',

  explanation: `A projeÃ§Ã£o de Mercator Ã© a mais empregada nas cartas nÃ¡uticas usuais de baixas e mÃ©dias latitudes por preservar os rumos como linhas retas. Por isso, a alternativa correta Ã© a C.`,
},
{
  id: 20212011,
  subject: 'navegacao',
  topic: 'carta nÃ¡utica / conceitos gerais',
  year: 2021,
  exam: 'CPA-II 2021',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Em relaÃ§Ã£o Ãs cartas nÃ¡uticas, assinale a alternativa incorreta.`,

  options: {
    A: 'Representam os acidentes terrestres e submarinos.',
    B: 'SÃ£o documentos cartogrÃ¡ficos.',
    C: 'Servem de base Ã navegaÃ§Ã£o.',
    D: 'Todas sÃ£o construÃ­das na projeÃ§Ã£o policÃ´nica.',
    E: 'Fornecem informaÃ§Ãµes sobre profundidades, perigos Ã navegaÃ§Ã£o e natureza do fundo.',
  },

  correct: 'D',

  explanation: `Nem todas as cartas nÃ¡uticas sÃ£o construÃ­das na projeÃ§Ã£o policÃ´nica. A formulaÃ§Ã£o da alternativa D generaliza incorretamente esse aspecto cartogrÃ¡fico. Por isso, a alternativa correta Ã© a D.`,
},
{
  id: 20212012,
  subject: 'navegacao',
  topic: 'carta nÃ¡utica / informaÃ§Ãµes representadas',
  year: 2021,
  exam: 'CPA-II 2021',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `InformaÃ§Ãµes sobre profundidades, perigos Ã navegaÃ§Ã£o, natureza do fundo, fundeadouros, Ã¡reas de fundeio, auxÃ­lios Ã navegaÃ§Ã£o, altitudes, pontos notÃ¡veis, linha de costa, marÃ©s, correntes e magnetismo estÃ£o representadas em qual documento?`,

  options: {
    A: 'Lista de farÃ³is.',
    B: 'Roteiro.',
    C: 'Carta de marÃ©s.',
    D: 'Carta nÃ¡utica.',
    E: 'Lista de auxÃ­lio-rÃ¡dio.',
  },

  correct: 'D',

  explanation: `A carta nÃ¡utica concentra o conjunto essencial de informaÃ§Ãµes hidrogrÃ¡ficas, cartogrÃ¡ficas e operacionais necessÃ¡rias Ã seguranÃ§a da navegaÃ§Ã£o. Por isso, a alternativa correta Ã© a D.`,
},
{
  id: 20212023,
  subject: 'navegacao',
  topic: 'ecobatÃ­metro / altura da marÃ©',
  year: 2021,
  exam: 'CPA-II 2021',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Um CapitÃ£o-Amador, com lancha de calado 1,3 m, escolheu um ponto de fundeio com profundidade registrada na carta nÃ¡utica de 5,8 m referida ao nÃ­vel de reduÃ§Ã£o. ApÃ³s fundear, o ecobatÃ­metro indicou 6,7 m abaixo da quilha. Qual era a altura da marÃ© no momento da leitura?`,

  options: {
    A: '0,9 m.',
    B: '1,2 m.',
    C: '1,9 m.',
    D: '2,0 m.',
    E: '2,2 m.',
  },

  correct: 'E',

  explanation: `Se o ecobatÃ­metro indica 6,7 m abaixo da quilha e o calado Ã© 1,3 m, a profundidade total no local Ã© 8,0 m. Como a carta registra 5,8 m no nÃ­vel de reduÃ§Ã£o, a altura da marÃ© no instante Ã© 8,0 - 5,8 = 2,2 m. Por isso, a alternativa correta Ã© a E.`,
},
{
  id: 20212024,
  subject: 'navegacao',
  topic: 'nÃ­vel de reduÃ§Ã£o',
  year: 2021,
  exam: 'CPA-II 2021',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Com relaÃ§Ã£o ao NÃ­vel de ReduÃ§Ã£o (NR), utilizado como referÃªncia para as alturas de marÃ© e para as profundidades registradas nas cartas nÃ¡uticas, assinale a alternativa correta.`,

  options: {
    A: 'Corresponde normalmente ao nÃ­vel mÃ©dio das preamares de sizÃ­gia (MHWS).',
    B: 'Corresponde normalmente ao nÃ­vel mÃ©dio das baixamares de quadratura (MLWN).',
    C: 'Corresponde normalmente ao nÃ­vel mÃ©dio das baixamares de sizÃ­gia (MLWS), abaixo do qual o mar nÃ£o desce senÃ£o raramente.',
    D: 'Ã‰ calculado com base nas baixamares dos perÃ­odos de marÃ©s mortas.',
    E: 'Ã‰ calculado com base nos valores mÃ©dios das preamares dos perÃ­odos de marÃ©s vivas.',
  },

  correct: 'C',

  explanation: `Nas cartas nÃ¡uticas brasileiras, o nÃ­vel de reduÃ§Ã£o Ã© normalmente associado ao nÃ­vel mÃ©dio das baixamares de sizÃ­gia, servindo como referÃªncia abaixo da qual o mar sÃ³ desce raramente. Por isso, a alternativa correta Ã© a C.`,
},
{
  id: 2024010,
  subject: 'navegacao',
  topic: 'navegacao batimetrica',
  conceptKey: 'nav.follow_isobath',
  groupKey: 'nav.follow_isobath.variant',
  difficulty: 'easy',
  year: 2024,
  exam: 'CPA-I 2024',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Durante navegacao noturna entre Cabo Frio e o Rio de Janeiro, um capitao-amador verificou que as linhas de profundidade eram praticamente paralelas a orla e decidiu manter a derrota acompanhando a profundidade de 50 m. Essa tecnica chama-se:`,

  options: {
    A: 'Sondagem paralela.',
    B: 'Correr uma isobata.',
    C: 'Transporte de isobatas.',
    D: 'Navegacao por profundidades semelhantes.',
    E: 'Posicao pelo cume.',
  },

  correct: 'B',

  explanation: `Quando o navegante mantem a embarcacao acompanhando uma mesma linha de profundidade, ele esta correndo uma isobata. Por isso, a alternativa correta e a B.`,
},
{
  id: 2024018,
  subject: 'navegacao',
  topic: 'corrente de superficie e planejamento',
  conceptKey: 'nav.currents.trip_time_log_distance',
  groupKey: 'nav.currents.trip_time_log_distance.variant',
  difficulty: 'medium',
  year: 2024,
  exam: 'CPA-I 2024',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Em uma viagem de Aracaju para Recife, com velocidade de avanco de 9 nos e corrente do Brasil paralela a derrota com intensidade de 1,8 no, a distancia total era 216 milhas. Qual alternativa apresenta a duracao real da travessia e a leitura do odometro ao chegar?`,

  options: {
    A: '20 horas e 162 milhas.',
    B: '20 horas e 180 milhas.',
    C: '24 horas e 216 milhas.',
    D: '30 horas e 270 milhas.',
    E: '30 horas e 324 milhas.',
  },

  correct: 'D',

  explanation: `Nessa situacao, o velocimetro tipo turbina mede a velocidade e o percurso da embarcacao em relacao a agua, e nao sobre o fundo. Assim, a corrente do Brasil altera o tempo real da travessia, mas o odometro continua acumulando o percurso proprio na agua. Por isso, a combinacao correta e a da alternativa D.`,
},
{
  id: 2024029,
  subject: 'navegacao',
  topic: 'datum horizontal e GPS',
  conceptKey: 'nav.gps.datum_shift',
  groupKey: 'nav.gps.datum_shift.basic',
  difficulty: 'easy',
  year: 2024,
  exam: 'CPA-II 2024',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Para plotar uma posicao de GPS referida ao WGS-84 em uma base nautica construida em outro datum horizontal, o receptor pode executar a mudanca de datum por meio da tecla:`,

  options: {
    A: 'DATUM SHIFT.',
    B: 'EFEMERIDES.',
    C: 'P-CODE.',
    D: 'DATUM WGS.',
    E: 'CONTROL DATUM.',
  },

  correct: 'A',

  explanation: `A funcao apropriada para ajustar o datum horizontal do receptor e apresentar a posicao no referencial desejado e a indicada em DATUM SHIFT. Por isso, a alternativa correta e a A.`,
},
{
  id: 2023021,
  subject: 'navegacao',
  topic: 'datum e GNSS',
  conceptKey: 'nav.gps.chart_datum_compatibility',
  groupKey: 'nav.gps.chart_datum_compatibility.basic',
  difficulty: 'medium',
  year: 2023,
  exam: 'CPA-I 2023',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Sobre datum em publicacoes nauticas e em equipamentos GNSS, assinale a alternativa que NAO e verdadeira.`,

  options: {
    A: 'O datum vertical da DHN e o Nivel de Reducao.',
    B: 'Corrego Alegre aparece como datum horizontal em parte das publicacoes da DHN.',
    C: 'Em equipamento GNSS maritimo, o datum vertical indicado e zero.',
    D: 'O datum horizontal do GNSS deve coincidir com o da publicacao usada.',
    E: 'O WGS-84 pode ser usado com qualquer representacao nautica sem ajuste.',
  },

  correct: 'E',

  explanation: `O WGS-84 e o datum proprio do sistema GPS, mas nao pode ser usado indistintamente sem ajuste quando a base utilizada estiver em outro datum horizontal. Por isso, a alternativa correta e a E.`,
},
{
  id: 2023022,
  subject: 'navegacao',
  topic: 'rumo verdadeiro, declinacao e desvio',
  conceptKey: 'nav.compass.true_magnetic_compass_conversion',
  groupKey: 'nav.compass.true_magnetic_compass_conversion.basic',
  difficulty: 'medium',
  year: 2023,
  exam: 'CPA-I 2023',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Sabendo que o rumo verdadeiro a ser seguido e 145 graus, a declinacao magnetica e 17 graus W e o desvio da agulha e 1 grau W, qual o rumo da agulha magnetica a ser adotado?`,

  options: {
    A: '127 graus.',
    B: '145 graus.',
    C: '160 graus.',
    D: '163 graus.',
    E: '203 graus.',
  },

  correct: 'D',

  explanation: `A conversao deve ser feita na sequencia Verdadeiro -> Magnetico -> Agulha. Como a declinacao e 17° W, para passar de rumo verdadeiro para rumo magnetico soma-se 17°: 145° + 17° = 162°. Em seguida aplica-se o desvio da agulha, que tambem e 1° W, somando mais 1° para obter o rumo da agulha: 162° + 1° = 163°. Portanto, o rumo da agulha a adotar e 163°, correspondente a alternativa D.`,
},
{
  id: 2023211,
  subject: 'navegacao',
  topic: 'ecobatimetro e isobatas',
  conceptKey: 'nav.follow_isobath',
  groupKey: 'nav.follow_isobath.variant',
  difficulty: 'easy',
  year: 2023,
  exam: 'CPA-II 2023',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Ao utilizar o ecobatimetro em area distante da costa, quando as linhas isobatimetricas registradas na representacao nautica sao paralelas ao rumo da embarcacao, qual tecnica de navegacao pode ser utilizada?`,

  options: {
    A: 'Linha de sondagem.',
    B: 'Transporte de isobatas.',
    C: 'Eco lateral.',
    D: 'Paralelas indexadas.',
    E: 'Correr uma isobata.',
  },

  correct: 'E',

  explanation: `Se as isobatas acompanham o rumo da embarcacao, o navegante pode manter a profundidade caracteristica para seguir com seguranca, o que corresponde a correr uma isobata. Por isso, a alternativa correta e a E.`,
},
{
  id: 2024301,
  subject: 'navegacao',
  topic: 'mares / conceitos basicos',
  conceptKey: 'nav.tide.tide_definition',
  groupKey: 'nav.tide.concepts.basic',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `O movimento periodico de subida e descida do nivel do mar, causado principalmente pela atracao gravitacional da Lua e do Sol, recebe o nome de:`,

  options: {
    A: 'Corrente de deriva.',
    B: 'Mare.',
    C: 'Arrebentacao.',
    D: 'Vaga.',
    E: 'Ressaca.',
  },

  correct: 'B',

  explanation: `Mare e a oscilacao periodica do nivel do mar produzida principalmente pela atracao gravitacional da Lua e do Sol, combinada com a rotacao da Terra. Por isso, a alternativa correta e a B.`,
},
{
  id: 2024302,
  subject: 'navegacao',
  topic: 'mares / preamar e baixamar',
  conceptKey: 'nav.tide.high_low_tide',
  groupKey: 'nav.tide.concepts.basic',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `O instante em que o nivel da agua atinge sua maior altura em um ciclo de mare e chamado de:`,

  options: {
    A: 'Baixamar.',
    B: 'Estofa de vazante.',
    C: 'Preamar.',
    D: 'Mare vazante.',
    E: 'Mare enchente.',
  },

  correct: 'C',

  explanation: `Preamar e o momento em que a agua alcanca a maior altura no ciclo considerado. Baixamar e a menor altura. Por isso, a alternativa correta e a C.`,
},
{
  id: 2024303,
  subject: 'navegacao',
  topic: 'mares / estofa',
  conceptKey: 'nav.tide.slack_water',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `O curto intervalo em que a corrente de mare praticamente cessa antes de inverter seu sentido e conhecido como:`,

  options: {
    A: 'Estofa.',
    B: 'Vaga.',
    C: 'Marulho.',
    D: 'Cavado.',
    E: 'Mar de leva.',
  },

  correct: 'A',

  explanation: `Estofa e o intervalo de transicao em que a corrente de mare enfraquece ao maximo antes de mudar de sentido. Por isso, a alternativa correta e a A.`,
},
{
  id: 2024304,
  subject: 'navegacao',
  topic: 'mares / amplitude',
  conceptKey: 'nav.tide.range_definition',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `A diferenca entre a altura da preamar e a altura da baixamar em um mesmo ciclo e chamada de:`,

  options: {
    A: 'Deriva.',
    B: 'Amplitude da mare.',
    C: 'Profundidade minima.',
    D: 'Altura cartografica.',
    E: 'Curva de nivel.',
  },

  correct: 'B',

  explanation: `Amplitude da mare e a diferenca entre a altura da preamar e a da baixamar no mesmo ciclo. Por isso, a alternativa correta e a B.`,
},
{
  id: 2024305,
  subject: 'navegacao',
  topic: 'mares / sizigia e quadratura',
  conceptKey: 'nav.tide.spring_tide',
  groupKey: 'nav.tide.spring_neap',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `As mares de maior amplitude, normalmente associadas ao alinhamento aproximado entre Sol, Terra e Lua, sao chamadas de:`,

  options: {
    A: 'Mares de quadratura.',
    B: 'Mares mortas.',
    C: 'Mares de sizigia.',
    D: 'Mares de estofa.',
    E: 'Mares de deriva.',
  },

  correct: 'C',

  explanation: `Nas sizigias, Sol, Terra e Lua ficam aproximadamente alinhados, reforcando os efeitos gravitacionais e produzindo mares de maior amplitude. Por isso, a alternativa correta e a C.`,
},
{
  id: 2024306,
  subject: 'navegacao',
  topic: 'mares / sizigia e quadratura',
  conceptKey: 'nav.tide.neap_tide',
  groupKey: 'nav.tide.spring_neap',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `As mares de menor amplitude, observadas nas fases de quarto crescente e quarto minguante, sao chamadas de:`,

  options: {
    A: 'Mares de sizigia.',
    B: 'Mares de quadratura.',
    C: 'Mares de tempestade.',
    D: 'Mares de enchente.',
    E: 'Mares de arrebentacao.',
  },

  correct: 'B',

  explanation: `Nas quadraturas, os efeitos gravitacionais da Lua e do Sol se contrapoe parcialmente, produzindo mares de menor amplitude. Por isso, a alternativa correta e a B.`,
},
{
  id: 2024307,
  subject: 'navegacao',
  topic: 'mares / leitura operacional',
  conceptKey: 'nav.tide.flood_tide',
  groupKey: 'nav.tide.current_direction',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Quando o nivel da agua esta subindo entre a baixamar e a preamar, diz-se que a mare esta:`,

  options: {
    A: 'Vazante.',
    B: 'Enchente.',
    C: 'Parada.',
    D: 'Em sizigia.',
    E: 'Em quadratura.',
  },

  correct: 'B',

  explanation: `Mare enchente e a fase em que o nivel da agua sobe da baixamar para a preamar. Por isso, a alternativa correta e a B.`,
},
{
  id: 2024308,
  subject: 'navegacao',
  topic: 'mares / leitura operacional',
  conceptKey: 'nav.tide.ebb_tide',
  groupKey: 'nav.tide.current_direction',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Quando o nivel da agua esta descendo da preamar para a baixamar, diz-se que a mare esta:`,

  options: {
    A: 'Enchente.',
    B: 'Parada.',
    C: 'Vazante.',
    D: 'De sizigia.',
    E: 'Em amplitude maxima.',
  },

  correct: 'C',

  explanation: `Mare vazante e a fase em que o nivel do mar desce da preamar para a baixamar. Por isso, a alternativa correta e a C.`,
},
{
  id: 2024309,
  subject: 'navegacao',
  topic: 'mares / calculo de amplitude',
  conceptKey: 'nav.tide.range_calculation',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Em um porto, a preamar prevista e 2,8 m e a baixamar prevista e 0,6 m. Qual e a amplitude dessa mare?`,

  options: {
    A: '1,2 m.',
    B: '2,0 m.',
    C: '2,2 m.',
    D: '2,8 m.',
    E: '3,4 m.',
  },

  correct: 'C',

  explanation: `A amplitude da mare e a diferenca entre preamar e baixamar: 2,8 - 0,6 = 2,2 m. Portanto, a alternativa correta e a C.`,
},
{
  id: 2024310,
  subject: 'navegacao',
  topic: 'mares / profundidade disponivel',
  conceptKey: 'nav.tide.depth_available',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Uma carta indica sondagem de 1,9 m em determinado ponto e a altura da mare no instante e 0,8 m. Desprezando outros efeitos, qual e a profundidade total aproximada disponivel nesse ponto?`,

  options: {
    A: '1,1 m.',
    B: '1,9 m.',
    C: '2,1 m.',
    D: '2,7 m.',
    E: '3,1 m.',
  },

  correct: 'D',

  explanation: `A profundidade total aproximada resulta da soma da sondagem cartografica com a altura da mare: 1,9 + 0,8 = 2,7 m. Portanto, a alternativa correta e a D.`,
},
{
  id: 2024311,
  subject: 'navegacao',
  topic: 'mares / folga abaixo da quilha',
  conceptKey: 'nav.tide.under_keel_clearance',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Em um local com profundidade total disponivel de 2,6 m, uma embarcacao de calado 1,8 m tera qual folga aproximada abaixo da quilha?`,

  options: {
    A: '0,4 m.',
    B: '0,6 m.',
    C: '0,8 m.',
    D: '1,2 m.',
    E: '4,4 m.',
  },

  correct: 'C',

  explanation: `A folga abaixo da quilha e a profundidade disponivel menos o calado: 2,6 - 1,8 = 0,8 m. Portanto, a alternativa correta e a C.`,
},
{
  id: 2024312,
  subject: 'navegacao',
  topic: 'mares / janela operacional',
  conceptKey: 'nav.tide.best_departure_time',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Para transpor uma barra rasa com seguranca, em geral e mais favoravel escolher um horario proximo da:`,

  options: {
    A: 'Baixamar.',
    B: 'Mare vazante maxima.',
    C: 'Preamar.',
    D: 'Estofa de vazante.',
    E: 'Quadratura obrigatoriamente.',
  },

  correct: 'C',

  explanation: `Em regra, a preamar oferece maior altura d'agua e, portanto, mais folga para transpor barras e passos rasos. Por isso, a alternativa correta e a C.`,
},
{
  id: 2024313,
  subject: 'navegacao',
  topic: 'mares / leitura temporal',
  conceptKey: 'nav.tide.time_between_tides',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Se a preamar ocorreu as 06:00 e a proxima baixamar esta prevista para as 12:10, o intervalo aproximado entre esses dois eventos e de:`,

  options: {
    A: '4h 10min.',
    B: '5h 40min.',
    C: '6h 10min.',
    D: '6h 40min.',
    E: '12h 10min.',
  },

  correct: 'C',

  explanation: `Basta subtrair os horarios informados: de 06:00 a 12:10 decorrem 6 horas e 10 minutos. Portanto, a alternativa correta e a C.`,
},
{
  id: 2024314,
  subject: 'navegacao',
  topic: 'mares / comparacao de amplitudes',
  conceptKey: 'nav.tide.compare_ranges',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Em um dia de sizigia, a amplitude prevista e 3,4 m. Em um dia de quadratura, a amplitude prevista e 1,6 m. Qual afirmacao esta correta?`,

  options: {
    A: 'A quadratura apresenta amplitude maior.',
    B: 'A sizigia apresenta amplitude maior.',
    C: 'As amplitudes sao iguais.',
    D: 'Nao ha relacao entre fase da Lua e amplitude.',
    E: 'A amplitude de quadratura e necessariamente zero.',
  },

  correct: 'B',

  explanation: `Sizigias tendem a produzir amplitudes maiores do que quadraturas. Como 3,4 m > 1,6 m, a afirmacao correta e a da alternativa B.`,
},
{
  id: 2024315,
  subject: 'navegacao',
  topic: 'mares / nivel de reducao',
  conceptKey: 'nav.tide.chart_datum',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Em navegacao costeira, a altura da mare fornecida pela tabua e somada a sondagem da carta para estimar a profundidade total. Isso e possivel porque as sondagens estao referidas ao:`,

  options: {
    A: 'Nivel de reducao.',
    B: 'Nivel medio do mar instantaneo.',
    C: 'Topo da onda significativa.',
    D: 'Fundo movel local.',
    E: 'Calado da embarcacao-padrao.',
  },

  correct: 'A',

  explanation: `As sondagens cartograficas sao referidas ao nivel de reducao. Por isso, a altura da mare pode ser somada a elas para estimar a profundidade total no instante considerado. Portanto, a alternativa correta e a A.`,
},
{
  id: 2024316,
  subject: 'navegacao',
  topic: 'mares / leitura de tendencia',
  conceptKey: 'nav.tide.trend_assessment',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Se a baixamar esta prevista para as 09:00 e a preamar seguinte para as 15:20, as 11:00 a tendencia mais provavel do nivel do mar sera:`,

  options: {
    A: 'Descida, pois ainda falta muito para a preamar.',
    B: 'Subida, pois o periodo esta entre baixamar e preamar.',
    C: 'Nivel constante, pois duas horas apos a baixamar ha sempre estofa.',
    D: 'Descida, porque a enchente so comeca na metade do intervalo.',
    E: 'Impossivel avaliar sem carta sinotica.',
  },

  correct: 'B',

  explanation: `Entre a baixamar e a preamar subsequente, o nivel do mar tende a subir. Como 11:00 esta nesse intervalo, a tendencia mais provavel e de enchente. Portanto, a alternativa correta e a B.`,
},
{
  id: 2024317,
  subject: 'navegacao',
  topic: 'mares / estimativa proporcional',
  conceptKey: 'nav.tide.proportional_estimate',
  groupKey: 'nav.tide.intermediate_height',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Em uma estimativa simplificada, considere baixamar de 0,8 m as 06:00 e preamar de 2,0 m as 12:00. Admitindo variacao linear apenas para efeito de aproximacao, qual seria a altura de mare as 09:00?`,

  options: {
    A: '1,0 m.',
    B: '1,2 m.',
    C: '1,4 m.',
    D: '1,6 m.',
    E: '2,8 m.',
  },

  correct: 'C',

  explanation: `A amplitude total e 2,0 - 0,8 = 1,2 m. As 09:00 decorreu metade do intervalo entre 06:00 e 12:00, entao, nessa aproximacao linear, soma-se metade da amplitude: 0,8 + 0,6 = 1,4 m. Portanto, a alternativa correta e a C.`,
},
{
  id: 2024318,
  subject: 'navegacao',
  topic: 'mares / estimativa proporcional',
  conceptKey: 'nav.tide.proportional_estimate_descending',
  groupKey: 'nav.tide.intermediate_height',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Em uma estimativa simplificada, considere preamar de 3,0 m as 18:00 e baixamar de 1,2 m a 00:00. Admitindo variacao linear apenas para efeito de aproximacao, qual seria a altura de mare as 21:00?`,

  options: {
    A: '1,2 m.',
    B: '1,8 m.',
    C: '2,1 m.',
    D: '2,4 m.',
    E: '3,6 m.',
  },

  correct: 'C',

  explanation: `A diferenca entre 3,0 m e 1,2 m e 1,8 m. As 21:00 decorreu metade do intervalo entre 18:00 e 00:00, entao a reducao aproximada seria de 0,9 m. Assim, a altura estimada fica 3,0 - 0,9 = 2,1 m. Portanto, a alternativa correta e a C.`,
},
{
  id: 2024319,
  subject: 'navegacao',
  topic: 'mares / seguranca de manobra',
  conceptKey: 'nav.tide.mooring_adjustment',
  difficulty: 'medium',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `Em um cais com variacao significativa de mare, as espias devem ser acompanhadas ao longo do periodo porque:`,

  options: {
    A: 'O casco muda de cor com a enchente.',
    B: 'A altura da embarcacao em relacao ao cais varia e pode sobrecarregar as espias.',
    C: 'A mare elimina o efeito do vento.',
    D: 'As defensas deixam de funcionar em preamar.',
    E: 'O calado da embarcacao torna-se nulo na baixamar.',
  },

  correct: 'B',

  explanation: `Com a subida e descida da mare, a embarcacao muda de altura em relacao ao cais. Isso exige acompanhar as espias para evitar esforcos excessivos, folgas inadequadas ou dano ao conjunto. Portanto, a alternativa correta e a B.`,
},
{
  id: 2024320,
  subject: 'navegacao',
  topic: 'mares / uso da tabua',
  conceptKey: 'nav.tide.tide_table_purpose',
  difficulty: 'easy',
  year: 2024,
  exam: 'Banco complementar',
  source: 'Questao autoral',
  verified: true,

  statement: `A principal finalidade pratica da tabua de mare para o navegante costeiro e permitir a previsao de:`,

  options: {
    A: 'Temperatura da agua e salinidade media.',
    B: 'Horario e altura aproximada das mares em determinado porto ou referencia.',
    C: 'Somente a direcao do vento dominante.',
    D: 'Profundidade exata em qualquer ponto sem consulta a carta.',
    E: 'Posicao do Sol e da Lua para sextante.',
  },

  correct: 'B',

  explanation: `A tabua de mare informa os horarios e as alturas previstas de preamares e baixamares, servindo de base para estimar profundidades disponiveis e janelas operacionais. Por isso, a alternativa correta e a B.`,
},
]
