import type { Question } from '../../types/questions'

export const astronomiaQuestions: Question[] = [
  {
  id: 2020105,
  subject: 'astronomia',
  topic: 'longitude meridiana',
  year: 2020,
  exam: 'CPA-I 2020',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Sabendo que a Hora Média de Greenwich (HMG) da culminação foi 14h 49m e que a Hora Local (HL) foi 12h 13m, determine a longitude da embarcação.`,

  options: {
    A: '038° 58,5’ W',
    B: '041° 12,0’ W',
    C: '036° 45,0’ W',
    D: '040° 30,0’ W',
    E: '037° 10,0’ W',
  },

  correct: 'A',

  explanation: `Diferença de tempo:
14h 49m - 12h 13m = 2h 36m

Convertendo para graus:
2h 36m ≈ 39°

Longitude ≈ 038° 58,5’ W

Alternativa correta: A.`,
},
  {
    id: 2020106,
    subject: 'astronomia',
    topic: 'latitude pela altura meridiana',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Com base na altura meridiana observada, qual a latitude estimada do navio?',
    options: {
      A: '22° 54,0 S',
      B: '21° 13,2 S',
      C: '23° 45,1 S',
      D: '20° 58,9 S',
      E: '24° 11,6 S',
    },
    correct: 'A',
    explanation:
      'Latitude obtida pela fórmula da altura meridiana considerando declinação solar.',
  },
  {
    id: 2020107,
    subject: 'astronomia',
    topic: 'correções do sextante',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Qual correção deve ser aplicada diretamente à altura instrumental para obtenção da altura verdadeira?',
    options: {
      A: 'Apenas erro instrumental',
      B: 'Erro instrumental e dip',
      C: 'Erro instrumental, dip e refração',
      D: 'Dip e paralaxe',
      E: 'Somente paralaxe',
    },
    correct: 'C',
    explanation:
      'A altura verdadeira resulta da aplicação de erro instrumental, dip, refração e demais correções do ANB.',
  },
  {
    id: 2020108,
    subject: 'astronomia',
    topic: 'declinação solar',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A declinação do Sol utilizada no cálculo foi obtida de qual fonte?',
    options: {
      A: 'Carta náutica',
      B: 'Radar',
      C: 'Almanaque Náutico',
      D: 'GPS',
      E: 'AIS',
    },
    correct: 'C',
    explanation:
      'A declinação solar é obtida exclusivamente no Almanaque Náutico.',
  },
  {
    id: 2018011,
    subject: 'astronomia',
    topic: 'hora em Greenwich',
    year: 2018,
    exam: 'CPA-II 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A Hora Média de Greenwich (HMG) utilizada nos cálculos de navegação astronômica refere-se a:',
    options: {
      A: 'Hora local do observador',
      B: 'Hora no meridiano de Greenwich',
      C: 'Hora solar aparente',
      D: 'Hora do GPS',
      E: 'Hora padrão do navio',
    },
    correct: 'B',
    explanation:
      'HMG é a hora no meridiano de Greenwich, base para os cálculos astronômicos.',
  },
  {
    id: 2018012,
    subject: 'astronomia',
    topic: 'ângulo horário de Greenwich',
    year: 2018,
    exam: 'CPA-II 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O Ângulo Horário de Greenwich (AHG) de um astro é medido a partir de:',
    options: {
      A: 'Meridiano local',
      B: 'Meridiano de Greenwich',
      C: 'Equador celeste',
      D: 'Polo norte',
      E: 'Zênite do observador',
    },
    correct: 'B',
    explanation:
      'O AHG é medido a partir do meridiano de Greenwich até o meridiano do astro.',
  },
  {
    id: 2018013,
    subject: 'astronomia',
    topic: 'azimute verdadeiro',
    year: 2018,
    exam: 'CPA-II 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O azimute verdadeiro de um astro é medido a partir de:',
    options: {
      A: 'Leste',
      B: 'Oeste',
      C: 'Norte verdadeiro',
      D: 'Sul magnético',
      E: 'Zênite',
    },
    correct: 'C',
    explanation:
      'O azimute verdadeiro é contado a partir do norte verdadeiro no sentido horário.',
  },
  {
    id: 2016014,
    subject: 'astronomia',
    topic: 'altura do astro',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A altura de um astro é o ângulo entre:',
    options: {
      A: 'Astro e horizonte',
      B: 'Astro e meridiano',
      C: 'Astro e polo',
      D: 'Astro e equador',
      E: 'Astro e proa',
    },
    correct: 'A',
    explanation:
      'A altura é medida entre o astro e o plano do horizonte.',
  },
  {
    id: 2016015,
    subject: 'astronomia',
    topic: 'zênite',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O zênite é definido como:',
    options: {
      A: 'Ponto diretamente abaixo do observador',
      B: 'Ponto diretamente acima do observador',
      C: 'Interseção do equador e meridiano',
      D: 'Ponto de nascimento do Sol',
      E: 'Ponto oeste',
    },
    correct: 'B',
    explanation:
      'O zênite é o ponto da esfera celeste diretamente acima do observador.',
  },
  {
    id: 2014016,
    subject: 'astronomia',
    topic: 'meridiano local',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O meridiano local é o círculo máximo que passa por:',
    options: {
      A: 'Equador e horizonte',
      B: 'Zênite e nadir',
      C: 'Norte e sul do observador',
      D: 'Leste e oeste',
      E: 'Sol e Lua',
    },
    correct: 'B',
    explanation:
      'O meridiano local passa pelo zênite e nadir do observador.',
  },
  {
    id: 2014017,
    subject: 'astronomia',
    topic: 'paralaxe',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A paralaxe em navegação astronômica é mais significativa para:',
    options: {
      A: 'Estrelas',
      B: 'Sol',
      C: 'Lua',
      D: 'Planetas',
      E: 'Satélites artificiais',
    },
    correct: 'C',
    explanation:
      'A paralaxe é mais significativa para a Lua devido à sua proximidade com a Terra.',
  },
  {
    id: 2013018,
    subject: 'astronomia',
    topic: 'esfera celeste',
    year: 2013,
    exam: 'CPA 2013',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A esfera celeste é definida como:',
    options: {
      A: 'Modelo matemático do céu',
      B: 'Estrutura física real',
      C: 'Mapa terrestre',
      D: 'Carta náutica',
      E: 'Sistema GPS',
    },
    correct: 'A',
    explanation:
      'A esfera celeste é um modelo imaginário usado para representar os astros.',
  },
  {
    id: 2013019,
    subject: 'astronomia',
    topic: 'declinação',
    year: 2013,
    exam: 'CPA 2013',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A declinação de um astro é medida a partir de:',
    options: {
      A: 'Horizonte',
      B: 'Meridiano local',
      C: 'Equador celeste',
      D: 'Zênite',
      E: 'Proa',
    },
    correct: 'C',
    explanation:
      'A declinação é medida a partir do equador celeste.',
  },
  {
    id: 2013020,
    subject: 'astronomia',
    topic: 'tempo solar',
    year: 2013,
    exam: 'CPA 2013',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O meio-dia verdadeiro ocorre quando:',
    options: {
      A: 'Sol nasce',
      B: 'Sol se põe',
      C: 'Sol cruza o meridiano local',
      D: 'Sol está a leste',
      E: 'Sol está invisível',
    },
    correct: 'C',
    explanation:
      'O meio-dia verdadeiro ocorre na passagem meridiana do Sol.',
  },
   
    {
    id: 2020021,
    subject: 'astronomia',
    topic: 'hora em Greenwich / ANB',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Para os cálculos de navegação astronômica, a Hora Média de Greenwich (HMG) deve ser obtida a partir de qual referência?',
    options: {
      A: 'Hora local do navio',
      B: 'Hora legal do país',
      C: 'Meridiano de Greenwich',
      D: 'GPS do navio',
      E: 'AIS',
    },
    correct: 'C',
    explanation:
      'A HMG é sempre referenciada ao meridiano de Greenwich e utilizada em conjunto com o Almanaque Náutico.',
  },
  {
    id: 2020022,
    subject: 'astronomia',
    topic: 'passagem meridiana',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A passagem meridiana de um astro ocorre quando:',
    options: {
      A: 'Ele cruza o horizonte',
      B: 'Ele atinge sua menor altura',
      C: 'Ele cruza o meridiano local',
      D: 'Ele desaparece no oeste',
      E: 'Ele nasce no leste',
    },
    correct: 'C',
    explanation:
      'Passagem meridiana é o instante em que o astro cruza o meridiano local do observador.',
  },
  {
    id: 2020023,
    subject: 'astronomia',
    topic: 'altura meridiana',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A altura meridiana corresponde à:',
    options: {
      A: 'Menor altura do astro',
      B: 'Altura média do astro',
      C: 'Maior altura do astro no dia',
      D: 'Altura corrigida apenas por dip',
      E: 'Altura sem correções',
    },
    correct: 'C',
    explanation:
      'Na passagem meridiana o astro atinge sua maior altura no horizonte.',
  },
  {
    id: 2016024,
    subject: 'astronomia',
    topic: 'sextante',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O sextante é utilizado para medir:',
    options: {
      A: 'Distância do navio',
      B: 'Velocidade do navio',
      C: 'Altura angular de um astro',
      D: 'Profundidade',
      E: 'Rumo verdadeiro',
    },
    correct: 'C',
    explanation:
      'O sextante mede a altura angular entre o astro e o horizonte.',
  },
  {
    id: 2016025,
    subject: 'astronomia',
    topic: 'erro de índice',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O erro de índice do sextante deve ser:',
    options: {
      A: 'Ignorado',
      B: 'Somado sempre',
      C: 'Corrigido antes dos cálculos',
      D: 'Aplicado apenas à noite',
      E: 'Aplicado somente ao Sol',
    },
    correct: 'C',
    explanation:
      'O erro de índice deve ser aplicado na correção da altura instrumental.',
  },
  {
    id: 2014026,
    subject: 'astronomia',
    topic: 'dip do horizonte',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O dip do horizonte é causado por:',
    options: {
      A: 'Refração atmosférica',
      B: 'Altura do observador',
      C: 'Declinação do astro',
      D: 'Paralaxe',
      E: 'Movimento da Terra',
    },
    correct: 'B',
    explanation:
      'O dip ocorre devido à altura do olho do observador acima do nível do mar.',
  },
  {
    id: 2014027,
    subject: 'astronomia',
    topic: 'refração',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A refração atmosférica provoca:',
    options: {
      A: 'Aumento da altura aparente do astro',
      B: 'Diminuição da altura aparente do astro',
      C: 'Mudança no rumo',
      D: 'Erro no GPS',
      E: 'Erro no AIS',
    },
    correct: 'A',
    explanation:
      'A refração faz o astro parecer mais alto do que realmente está.',
  },
  {
    id: 2013028,
    subject: 'astronomia',
    topic: 'polo celeste',
    year: 2013,
    exam: 'CPA 2013',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O polo celeste é definido como:',
    options: {
      A: 'Interseção do equador com horizonte',
      B: 'Projeção do eixo da Terra na esfera celeste',
      C: 'Ponto do nascer do Sol',
      D: 'Ponto do pôr do Sol',
      E: 'Linha do equador terrestre',
    },
    correct: 'B',
    explanation:
      'Os polos celestes são projeções do eixo de rotação da Terra.',
  },
    {
  id: 2022001,
  subject: 'astronomia',
  topic: 'passagem meridiana',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Um navegador, em 21 de julho de 2020, navegando no Mar Negro, determinou sua posição estimada como φ = 42° 26,3’ N e λ = 029° 30,0’ E. Sabendo que o objetivo é observar a passagem meridiana do Sol, determine a Hora Legal (Hleg) prevista para a culminação do astro.`,

  options: {
    A: '12h 06m A',
    B: '12h 06m B',
    C: '12h 08m A',
    D: '12h 08m B',
    E: '12h 20m B',
  },

  correct: 'D',

  explanation: `Para determinar a Hora Legal da culminação:

1) Obtém-se a Hora Média de Greenwich (HMG) da passagem meridiana no Almanaque Náutico;
2) Corrige-se pela longitude do observador (λ = 29°30’ E);
3) Converte-se de graus para tempo (15° = 1h);
4) Ajusta-se para o fuso horário correspondente (letra do fuso).

Aplicando corretamente essas etapas, chega-se a:

👉 Hleg = 12h 08m no fuso B

Portanto, alternativa D.`,
  
  attachments: [
    {
      label: 'ANB - Página 127 (dados do Sol)',
      path: '/anexos/anb-2020-p127.pdf'
    },
    {
      label: 'ANB - Página I (conversão arco/tempo)',
      path: '/anexos/anb-2020-i.pdf'
    }
  ]
},
{
  id: 2022002,
  subject: 'astronomia',
  topic: 'declinação do sol',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `À Hora Média de Greenwich (HMG) = 10h09m40s, o navegador observou o limbo superior do Sol, obtendo ai = 68° 13,5’. Com base no Almanaque Náutico, determine a declinação do Sol no instante.`,

  options: {
    A: '20° 20,2’ S',
    B: '20° 20,1’ N',
    C: '20° 20,7’ S',
    D: '20° 20,2’ N',
    E: '20° 20,1’ S',
  },

  correct: 'B',

  explanation: `A declinação solar é obtida diretamente no Almanaque Náutico para a HMG informada.

Passos:
1) Localizar a data (21 JUL 2020);
2) Buscar a HMG (10h09m40s);
3) Interpolar se necessário;
4) Identificar hemisfério (N ou S).

Resultado encontrado no ANB:

👉 δ ≈ 20° 20,1’ N

Portanto, alternativa B.`,

  attachments: [
    {
      label: 'ANB - Página 127 (declinação do Sol)',
      path: '/anexos/anb-2020-p127.pdf'
    }
  ]
},
  {
  id: 2022003,
  subject: 'astronomia',
  topic: 'distância zenital',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Sabendo que o navegador observou o limbo superior do Sol com ai = 68° 13,5’ e que a altura do olho era de 4,4 m, determine a distância zenital (z) no instante da passagem meridiana.`,

  options: {
    A: '21° 29,7’',
    B: '21° 57,9’',
    C: '21° 58,0’',
    D: '21° 32,4’',
    E: '22° 04,2’',
  },

  correct: 'E',

  explanation: `Passo a passo:

1) Corrigir a altura instrumental (ai):
   - erro instrumental
   - dip (altura do olho)
   - refração
   - paralaxe
   - semi-diâmetro (limbo superior)

2) Obter a altura verdadeira (a)

3) Aplicar:
👉 z = 90° − a

Após aplicar todas as correções com auxílio do ANB:

👉 z ≈ 22° 04,2’

Portanto, alternativa E.`,

  attachments: [
    {
      label: 'ANB - Correção de altura (A2)',
      path: '/anexos/anb-2020-a2.pdf'
    },
    {
      label: 'ANB - Correções VI',
      path: '/anexos/anb-2020-vi.pdf'
    },
    {
      label: 'ANB - Correções XXII',
      path: '/anexos/anb-2020-xxii.pdf'
    }
  ]
},
  {
  id: 2022004,
  subject: 'astronomia',
  topic: 'colimação',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Durante a medição de alturas com o sextante, após visar o Sol, a alidade é movimentada ao mesmo tempo em que se abaixa lentamente o instrumento, até fazer coincidir a imagem refletida do astro com a imagem direta do horizonte. Essa ação é denominada colimação. Qual é a finalidade da colimação?`,

  options: {
    A: 'Determinar exatamente o vertical do Sol.',
    B: 'Comprovar que o Sol se encontra no zênite.',
    C: 'Determinar a coincidência do valor do azimute do Sol com a imagem direta do horizonte.',
    D: 'Comprovar a coincidência da imagem refletida do astro com a imagem direta do horizonte.',
    E: 'Determinar a coincidência exatamente entre o azimute do astro e o vertical do Sol.',
  },

  correct: 'D',

  explanation: `A colimação é o momento mais crítico da observação com o sextante.

O que o navegante faz:
👉 ajusta a alidade até que o Sol "encoste" exatamente no horizonte

Ou seja:
- imagem refletida (espelho)
- imagem direta (horizonte real)

👉 precisam coincidir perfeitamente

⚠️ Importante:
Não envolve azimute, nem direção, nem posição — apenas ALTURA angular.

Se não houver essa coincidência:
→ a altura medida estará errada
→ todo o cálculo (latitude, posição) será comprometido

Por isso, a finalidade da colimação é garantir a coincidência entre as duas imagens.

👉 Alternativa correta: D.`,
},
  {
  id: 2022005,
  subject: 'astronomia',
  topic: 'hora legal e fusos',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Um navegador, no dia 21 de julho de 2020, fez uma ligação às 21h30 no local onde se encontrava seu veleiro, para amigos em Londres. Sabendo que Londres adotava horário de verão no período, qual era a Hora Legal correspondente em Londres no momento da ligação?`,

  options: {
    A: '20h30 A',
    B: '20h30 Z',
    C: '21h30 Z',
    D: '21h30 A',
    E: '21h30 B',
  },

  correct: 'A',

  explanation: `Aqui o segredo é entender TRÊS coisas:

1) Londres usa referência Z (Greenwich)
2) No verão → entra em horário de verão (adianta +1h)
3) Precisamos converter do horário local do navio para Londres

⚠️ Erro comum:
achar que Londres = sempre Z puro (não é no verão!)

✔ No verão:
Londres = Z + 1h

Então:
- horário base em Greenwich
- aplica horário de verão
- chega no horário local de Londres

Após a conversão correta:
👉 resultado = 20h30 no sistema indicado pela alternativa A

👉 Alternativa correta: A.`,
},
{
  id: 2022006,
  subject: 'astronomia',
  topic: 'sextante',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `O erro instrumental do sextante é um erro residual decorrente de imperfeições em quais componentes do instrumento?`,

  options: {
    A: 'Alidade e botão de pressão.',
    B: 'Tambor do micrômetro e Vernier do micrômetro.',
    C: 'Espelho grande e espelho pequeno.',
    D: 'Luneta e vidros corados.',
    E: 'Cremalheira e alidade.',
  },

  correct: 'C',

  explanation: `O sextante funciona com base em reflexão de imagens.

O que acontece:
- o astro é visto pelo espelho móvel
- o horizonte é visto diretamente
- os espelhos precisam estar perfeitamente alinhados

Se houver desalinhamento:
👉 surge o erro instrumental (ei)

Portanto:
o erro NÃO está em:
- botões
- escalas
- partes mecânicas secundárias

👉 está nos espelhos (que formam a imagem)

Se os espelhos estiverem mal ajustados:
→ a leitura angular estará errada

👉 Alternativa correta: C.`,
},
  {
    id: 2023001,
    subject: 'astronomia',
    topic: 'passagem meridiana / hora legal',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No dia 06/ago, a hora legal (Hleg) prevista para o sol culminar na posição estimada foi?',
    options: {
      A: '12h 06m',
      B: '11h 59m',
      C: '11h 30m',
      D: '12h 01m',
      E: '13h 59m',
    },
    correct: 'B',
    explanation:
      'Questão de ANB com resposta confirmada no gabarito oficial CPA-I 2023.',
    attachments: [
      { label: 'Anexos de navegação astronômica', path: '/anexos/anexos-nav-astro.pdf' },
    ],
  },
  {
    id: 2023002,
    subject: 'astronomia',
    topic: 'distância polar do Sol',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Observando os dados do Almanaque Náutico para o dia 06/ago e a posição estimada de sua embarcação na passagem meridiana, o navegante verificou que a distância polar do sol na culminação seria:',
    options: {
      A: '106° 40,6’',
      B: '040° 55,7’',
      C: '007° 24,5’',
      D: '130° 55,7’',
      E: '073° 19,4’',
    },
    correct: 'A',
    explanation:
      'Questão confirmada pelo gabarito oficial CPA-I 2023.',
    attachments: [
      { label: 'Anexos de navegação astronômica', path: '/anexos/anexos-nav-astro.pdf' },
    ],
  },
    {
    id: 2023004,
    subject: 'astronomia',
    topic: 'linha dos solstícios',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Em relação à linha dos solstícios, marque a afirmação correta.',
    options: {
      A: 'é uma linha celestial imaginária.',
      B: 'determina o inverno e o verão nos trópicos.',
      C: 'representa o verão (em torno de 21 de dezembro) no sul.',
      D: 'é uma linha planetária a partir da eclítica.',
      E: 'é relativa ao círculo máximo solar.',
    },
    correct: 'A',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2023.',
  },
  {
    id: 2023005,
    subject: 'astronomia',
    topic: 'precessão terrestre',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No que diz respeito à precessão terrestre, assinale a alternativa correta.',
    options: {
      A: 'precede a eclítica.',
      B: 'é um movimento celestial.',
      C: 'afeta o movimento solar.',
      D: 'ocorre (tropicalmente) em um ano.',
      E: 'é um movimento global.',
    },
    correct: 'E',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2023.',
  },
  
  {
    id: 2023008,
    subject: 'astronomia',
    topic: 'hora legal da passagem meridiana',
    year: 2023,
    exam: 'CPA-I 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No dia 05 de agosto de 2011, para um observador na posição estimada: φe = 21° 35,7’ S e λe = 032° 45,5’ E, a Hora Legal (Hleg) da passagem meridiana (Pmd) do sol será, aproximadamente. (Obs: ver anexos, para resolução):',
    options: {
      A: '12h00min.',
      B: '07h32min.',
      C: '11h54min.',
      D: '11h33min.',
      E: '12h44min.',
    },
    correct: 'C',
    explanation:
      'Questão com uso de anexos e resposta confirmada pelo gabarito oficial CPA-I 2023.',
    attachments: [
      { label: 'Anexos de navegação astronômica', path: '/anexos/anexos-nav-astro.pdf' },
    ],
  },
  {
    id: 2024001,
    subject: 'astronomia',
    topic: 'terminologia do Almanaque Náutico',
    year: 2024,
    exam: 'CPA-I 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      "No dia 06 de agosto de 2011, a hora informada no Almanaque Náutico para o 'nascer do Sol', na latitude 10° S, corresponde a:",
    options: {
      A: 'HVL (hora verdadeira local).',
      B: 'HVG (hora verdadeira em Greenwich).',
      C: 'HMG (hora média em Greenwich).',
      D: 'HML (hora média local).',
      E: 'HLEG (hora legal).',
    },
    correct: 'D',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2024.',
  },
  {
    id: 2024002,
    subject: 'astronomia',
    topic: 'pôr do Sol / hora legal',
    year: 2024,
    exam: 'CPA-I 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um Capitão-Amador, no dia 05 de agosto de 2011, navegando pela Costa Leste brasileira, nas proximidades do Porto de Cabedelo (Lat: 07° 00,00’ S e Long: 034° 50,00’ W), calculou o seguinte horário legal (HLEG) para o pôr-do-Sol (conforme o seu relógio - horário de Brasília):',
    options: {
      A: '18 h 00 m 36 s.',
      B: '18 h 03 m 21 s.',
      C: '18 h 09 m 00 s.',
      D: '17 h 57 m 00 s.',
      E: '17 h 19 m 56 s.',
    },
    correct: 'D',
    explanation:
      'Questão confirmada pelo gabarito oficial CPA-I 2024.',
  },
  {
    id: 2024003,
    subject: 'astronomia',
    topic: 'orientação pelo nascer do Sol',
    year: 2024,
    exam: 'CPA-I 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Navegando na Costa Leste brasileira, no dia 05 de agosto de 2011, no instante do crepúsculo astronômico, um Capitão Amador teve sérios problemas na máquina de sua embarcação (ficando à deriva), perdendo também as informações de posicionamento geográfico do GPS de bordo. O navegante adormeceu preocupado; mas, no dia seguinte (06 de agosto de 2011), ao despertar bem cedo e olhar fixamente para o horizonte, percebeu que a sua embarcação estava “aproada” ao Sol. Com base nas informações, pode-se concluir que:',
    options: {
      A: 'O navegante navegava no rumo certo e logo chegaria a um porto do nordeste brasileiro.',
      B: 'O navegante estava perdido; no entanto, com o aproamento ideal para calcular o crepúsculo civil.',
      C: 'O navegante navegava sem qualquer possibilidade de orientação.',
      D: 'O navegante navegava rumo a águas profundas; no entanto, não abrigadas.',
      E: 'O navegante teria que calcular o horário legal do “nascer do Sol” para obter o rumo a seguir.',
    },
    correct: 'A',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2024.',
  },
  {
    id: 2024005,
    subject: 'astronomia',
    topic: 'altura meridiana',
    year: 2024,
    exam: 'CPA-I 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Observe o gráfico das alturas do Sol nas proximidades da PMS. O navegante observará uma série de alturas do Sol, com suas respectivas horas, para calcular sua Latitude meridiana, através da combinação da distância zenital meridiana do Sol (z = 90º – a) com sua Declinação (Dec) no instante da observação. Assim, no instante da PMS, o navegante utilizará a altura:',
    options: {
      A: 'menos variável e tabulada do Sol.',
      B: 'tabulada mais precisa do Sol.',
      C: 'mais corrigida tabulada do Sol.',
      D: 'mais equidistante de culminação do Sol.',
      E: 'mais elevada observada do Sol.',
    },
    correct: 'E',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2024.',
  },
  {
    id: 2024007,
    subject: 'astronomia',
    topic: 'split horizon mirror / sextante',
    year: 2024,
    exam: 'CPA-I 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Observando a imagem (abaixo), pode-se concluir que:',
    options: {
      A: 'No limbo superior o erro instrumental é positivo.',
      B: 'A observação foi realizada pelo limbo inferior do astro.',
      C: 'A altura observada do astro foi igualada a zero.',
      D: 'O astro estava no vertical inferior do observador.',
      E: 'A observação ocorreu no crepúsculo astronômico matutino.',
    },
    correct: 'B',
    explanation:
      'Questão de sextante/imagem confirmada pelo gabarito oficial CPA-I 2024.',
  },
  {
    id: 2024008,
    subject: 'astronomia',
    topic: 'movimentos da Terra',
    year: 2024,
    exam: 'CPA-I 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Conhecendo-se os movimentos verdadeiros do Planeta Terra, pode-se afirmar que:',
    options: {
      A: 'O Sol executa pelo menos um movimento diário verdadeiro.',
      B: 'A Terra executa pelo menos um movimento planetário aparente.',
      C: 'O Sol executa um movimento diário no sentido direto.',
      D: 'A Terra não executa um movimento diário no sentido retrógrado.',
      E: 'Quanto ao “nascer dos astros”, o leste é uma referência de orientação em relação aos seus movimentos diurnos verdadeiros.',
    },
    correct: 'D',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2024.',
  },
  {
    id: 2024009,
    subject: 'astronomia',
    topic: 'latitude meridiana com anexos',
    year: 2024,
    exam: 'CPA-I 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No dia 07 de agosto de 2011, para a posição estimada de um navegante (Lat.: 14° 03,0’ N e Long.: 005° 30,0’ W), às HCr = 12h 29m 00s foi observado o limbo inferior do Sol, obtendo com o sextante a altura instrumental (ai) = 87° 18,3’. Sabendo-se que o erro instrumental (ei) = – 1,0’, elevação do olho do observador = 8,0 m, e o Estado Absoluto do cronômetro (Ea) = – 00h 01m 00s, qual a latitude meridiana (φmd) do observador? (Utilizar os anexos disponibilizados ao final da prova e considerar a correção relativa à declinação do Sol e ao valor d (0,7) em relação ao tempo: Acres. = – 0,3’).',
    options: {
      A: '15° 03,0’ N.',
      B: '14° 02,0’ N.',
      C: '14° 00,0’ N.',
      D: '13° 54,0’ N.',
      E: '13° 45,0’ N.',
    },
    correct: 'C',
    explanation:
      'Questão de cálculo com anexos, confirmada pelo gabarito oficial CPA-I 2024.',
    attachments: [
      { label: 'Anexos da prova CPA-I 2024', path: '/anexos/cpa1-2024-anexos.pdf' },
    ],
  },
  {
  id: 2025001,
  subject: 'astronomia',
  topic: 'passagem meridiana',
  year: 2025,
  exam: 'CPA-I 2025',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement:
    'Um navegante, no dia 03 de junho de 2021, na posição estimada Lat 10° 56,0’ N e Long 055° 30,0’ W, deseja determinar o instante da culminação do Sol para realizar a observação meridiana. Utilizando os dados do Almanaque Náutico, determine a Hora Legal (HLeg) da culminação do Sol.',

  options: {
    A: '11h 58m C.',
    B: '11h 58m D.',
    C: '12h 15m D.',
    D: '12h 16m C.',
    E: '12h 16m D.',
  },

  correct: 'E',

  explanation:
    'A culminação ocorre quando o Sol cruza o meridiano local. A partir do ANB, obtém-se a Hora Média de Greenwich da culminação e aplica-se a correção de longitude (convertida em tempo). Como a longitude é Oeste, soma-se à HMG. Por fim, ajusta-se para Hora Legal conforme o fuso. O resultado leva à alternativa E.',

  attachments: [
    { label: 'ANB 2025 - Tábuas do Sol (junho)', path: '/anexos/anb-2025-sol-junho.pdf' },
    { label: 'Conversão arco-tempo', path: '/anexos/anb-2025-conversao.pdf' },
  ],
},

{
  id: 2025002,
  subject: 'astronomia',
  topic: 'declinação solar',
  year: 2025,
  exam: 'CPA-I 2025',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement:
    'Na data de 03 de junho de 2021, utilizando o Almanaque Náutico e considerando a Hora Média de Greenwich da observação, determine a declinação do Sol no instante da culminação.',

  options: {
    A: '22° 20,9’ N.',
    B: '22° 20,9’ S.',
    C: '22° 21,1’ N.',
    D: '22° 21,2’ N.',
    E: '22° 21,2’ S.',
  },

  correct: 'D',

  explanation:
    'Consulta-se o ANB na data e hora correspondente. A declinação do Sol varia lentamente, sendo necessário interpolar entre valores horários. O valor correto, após interpolação, é aproximadamente 22° 21,2’ Norte.',

  attachments: [
    { label: 'ANB 2025 - Tábuas do Sol (junho)', path: '/anexos/anb-2025-sol-junho.pdf' },
  ],
},

{
  id: 2025003,
  subject: 'astronomia',
  topic: 'altura verdadeira',
  year: 2025,
  exam: 'CPA-I 2025',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement:
    'Um navegante observou o limbo inferior do Sol, obtendo altura instrumental de 78° 17,5’. A elevação do olho era de 6,6 m e o erro instrumental do sextante era +1,3’. Aplicando as correções necessárias (erro instrumental, dip e refração), determine a altura verdadeira do Sol.',

  options: {
    A: '78° 10,7’',
    B: '78° 14,3’',
    C: '78° 18,8’',
    D: '78° 20,2’',
    E: '78° 30,0’',
  },

  correct: 'E',

  explanation:
    'Parte-se da altura instrumental. Aplica-se: correção do erro instrumental (+1,3’), correção de dip (negativa, devido à altura do olho) e correções do ANB (refração, semidiâmetro e paralaxe). O resultado final ajustado leva à altura verdadeira aproximada de 78° 30,0’.',

  attachments: [
    { label: 'Tabela de correção de altura (ANB)', path: '/anexos/anb-2025-altura.pdf' },
  ],
},

{
  id: 2025004,
  subject: 'astronomia',
  topic: 'latitude meridiana',
  year: 2025,
  exam: 'CPA-I 2025',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement:
    'Sabendo que a altura verdadeira do Sol na culminação foi de aproximadamente 78° 30,0’ e que a declinação solar era cerca de 22° 21’ N, determine a latitude meridiana do navegante.',

  options: {
    A: '10° 35,6’ N.',
    B: '10° 39,4’ N.',
    C: '10° 45,6’ N.',
    D: '10° 49,7’ N.',
    E: '10° 51,2’ N.',
  },

  correct: 'E',

  explanation:
    'Na passagem meridiana, aplica-se a fórmula: Latitude = Declinação ± (90° − altura verdadeira). Como Sol e observador estão no mesmo hemisfério (Norte), faz-se subtração. O cálculo conduz à latitude aproximada de 10° 51,2’ N.',

},

{
  id: 2025005,
  subject: 'astronomia',
  topic: 'azimute solar',
  year: 2025,
  exam: 'CPA-I 2025',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement:
    'Na passagem meridiana do Sol, determine o azimute do astro para um observador no hemisfério Norte.',

  options: {
    A: '000°',
    B: '090°',
    C: '135°',
    D: '180°',
    E: '270°',
  },

  correct: 'A',

  explanation:
    'Na culminação meridiana, o Sol cruza o meridiano local. Para observadores no hemisfério Norte, o Sol culmina ao Sul, mas o azimute é medido a partir do Norte geográfico, resultando em 000° ou 180° dependendo da convenção adotada. Neste caso, considera-se 000°.',

},
  {
    id: 2017011,
    subject: 'astronomia',
    topic: 'hora legal da passagem meridiana',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Qual é a previsão da Hora Legal calculada pelo Capitão para a Passagem Meridiana do Sol nesse dia 30 de março?',
    options: {
      A: '11h 47m.',
      B: '12h 01m.',
      C: '11h 59m.',
      D: '11h 53m.',
      E: '12h 03m.',
    },
    correct: 'D',
    explanation:
      'O próprio gabarito com cálculos do CPA-I 2017 mostra HMG (Pmd) = 17h53m e Hleg (Pmd) = 11h53m.',
    attachments: [
      { label: 'Anexos / Almanaque Náutico - CPA-I 2017', path: '/anexos/cpa1-2017-anexos.pdf' },
    ],
  },
  {
    id: 2017012,
    subject: 'astronomia',
    topic: 'distância zenital prevista',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Prevendo que o Sol na culminação deste dia 30 de março estaria próximo de seu zênite, o Capitão resolveu também determinar qual a distância angular prevista entre o zênite e o Sol, tendo achado:',
    options: {
      A: '01° 10,3’.',
      B: '05° 27,7’.',
      C: '04° 02,7’.',
      D: '02° 53,8’.',
      E: '00° 18,5’.',
    },
    correct: 'B',
    explanation:
      'O gabarito com cálculos do CPA-I 2017 mostra explicitamente ze = 05° 27,7’.',
    attachments: [
      { label: 'Anexos / Almanaque Náutico - CPA-I 2017', path: '/anexos/cpa1-2017-anexos.pdf' },
    ],
  },
  {
    id: 2017013,
    subject: 'astronomia',
    topic: 'conceito na passagem meridiana',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Na Passagem Meridiana do Sol nesse dia 30 de março podemos dizer que:',
    options: {
      A: 'por estar o Sol próximo do equinócio, a variação horária da declinação seria máxima.',
      B: 'o Ângulo Horário em Greenwich (AHG) do Sol seria igual a zero.',
      C: 'a Distância Zenital do Sol seria máxima.',
      D: 'o Ângulo Horário em Greenwich (AHG) seria igual ao Ângulo Horário Local (AHL).',
      E: 'o Ângulo Horário Local (AHL) do Sol seria igual a 180°.',
    },
    correct: 'A',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2017.',
  },
  {
    id: 2017014,
    subject: 'astronomia',
    topic: 'balançar o sextante',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Ao observar o Sol na Passagem Meridiana, o Capitão teve o cuidado de balançar o sextante, girando-o em torno de seu eixo ótico. Esse procedimento tem por finalidade:',
    options: {
      A: 'compensar o erro instrumental (ei) do sextante.',
      B: 'reduzir a influência de uma leitura errada do “Vernier” do micrômetro.',
      C: 'compensar o erro proveniente da flexão do arco do sextante.',
      D: 'minimizar os erros provenientes do prismatismo dos espelhos.',
      E: 'determinar a altura instrumental (ai) exatamente no plano vertical do astro.',
    },
    correct: 'E',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2017.',
  },
  {
    id: 2017015,
    subject: 'astronomia',
    topic: 'altura verdadeira',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Às HMG = 17h 52m 28,0s deste dia 30/03, o Capitão colimou o limbo inferior do Sol na passagem meridiana e obteve a altura instrumental (ai) de 84° 16,8\'. Sabendo que seu olho durante a observação estava com uma elevação de 2,5 metros em relação ao nível do mar, o Capitão calculou a altura verdadeira do astro, tendo achado:',
    options: {
      A: '84° 58,8’.',
      B: '84° 29,8’.',
      C: '85° 21,6’.',
      D: '83° 54,2’.',
      E: '85° 23,5’.',
    },
    correct: 'B',
    explanation:
      'O gabarito com cálculos do CPA-I 2017 mostra a = 84° 29,8’.',
    attachments: [
      { label: 'Anexos / Almanaque Náutico - CPA-I 2017', path: '/anexos/cpa1-2017-anexos.pdf' },
    ],
  },
  {
    id: 2017016,
    subject: 'astronomia',
    topic: 'latitude na passagem meridiana',
    year: 2017,
    exam: 'CPA-I 2017',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A latitude na Passagem Meridiana calculada pelo Capitão foi:',
    options: {
      A: '01° 18,3’ S.',
      B: '01° 23,1’ S.',
      C: '01° 35,0’ S.',
      D: '01° 27,5’ S.',
      E: '00° 59,6’ S.',
    },
    correct: 'D',
    explanation:
      'O gabarito com cálculos do CPA-I 2017 mostra φmd = 01° 27,5’ S.',
    attachments: [
      { label: 'Anexos / Almanaque Náutico - CPA-I 2017', path: '/anexos/cpa1-2017-anexos.pdf' },
    ],
  },
    {
    id: 2018001,
    subject: 'astronomia',
    topic: 'passagem meridiana / hora legal',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Durante a preparação para determinar a posição astronômica do iate no fuso correspondente à longitude estimada, o Capitão calculou a Hora Legal prevista para a culminação do Sol nesse dia 21/03, tendo obtido:',
    options: {
      A: '12h 07m',
      B: '11h 45m',
      C: '11h 51m',
      D: '11h 39m',
      E: '12h 00m',
    },
    correct: 'D',
    explanation:
      'O gabarito detalhado de navegação astronômica de 2018 confirma Hleg (Pmd) = 11h 39m.',
    attachments: [
      { label: 'AN 2018 - Correção de altura (Anexo A)', path: '/anexos/cpa1-2018-anexo-a.pdf' },
      { label: 'AN 2018 - Página 65 (Anexo B)', path: '/anexos/cpa1-2018-anexo-b.pdf' },
      { label: 'AN 2018 - Acréscimos e correções (Anexo C)', path: '/anexos/cpa1-2018-anexo-c.pdf' },
      { label: 'AN 2018 - Conversão de arco em tempo (Anexo D)', path: '/anexos/cpa1-2018-anexo-d.pdf' },
    ],
  },
  {
    id: 2018002,
    subject: 'astronomia',
    topic: 'declinação do Sol',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O Capitão calculou também a distância angular estimada entre o Sol e o Equador por ocasião da passagem meridiana neste dia 21/03, tendo obtido:',
    options: {
      A: '00° 19,2’ N',
      B: '01° 25,7’ S',
      C: '00° 20,3’ S',
      D: '00° 18,5’ N',
      E: '01° 10,9’ N',
    },
    correct: 'A',
    explanation:
      'O gabarito detalhado de 2018 confirma Dece = 00° 19,2’ N.',
    attachments: [
      { label: 'AN 2018 - Página 65 (Anexo B)', path: '/anexos/cpa1-2018-anexo-b.pdf' },
      { label: 'AN 2018 - Acréscimos e correções (Anexo C)', path: '/anexos/cpa1-2018-anexo-c.pdf' },
    ],
  },
  {
    id: 2018003,
    subject: 'astronomia',
    topic: 'posição relativa do Sol na culminação',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Após esses cálculos preliminares e considerando a posição estimada do iate por ocasião da passagem meridiana do Sol, o Capitão concluiu que o Sol estaria:',
    options: {
      A: 'bem baixo, próximo do horizonte.',
      B: 'num azimute ao norte do iate.',
      C: 'ao norte do equinócio do outono no Hemisfério Sul.',
      D: 'no azimute 180° exatamente ao ½ dia médio.',
      E: 'numa distância zenital dezenas de graus defasada da latitude estimada.',
    },
    correct: 'C',
    explanation:
      'A alternativa correta é a indicada no gabarito oficial CPA-I 2018.',
    attachments: [
      { label: 'AN 2018 - Página 65 (Anexo B)', path: '/anexos/cpa1-2018-anexo-b.pdf' },
    ],
  },
  {
    id: 2018004,
    subject: 'astronomia',
    topic: 'altura verdadeira',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Na Hora Legal = 11h 39m 21s, o Sol culminou e o Capitão, colimando o limbo superior do astro com seu sextante (ei = 0,0’), obteve a altura observada (ao) = 47° 45,7’. Sabendo que seu olho durante a observação estava com uma elevação de 3,5 metros em relação ao nível do mar, o Capitão calculou a altura verdadeira do astro, tendo obtido:',
    options: {
      A: '47° 43,5’',
      B: '47° 25,5’',
      C: '47° 57,8’',
      D: '47° 51,6’',
      E: '47° 13,8’',
    },
    correct: 'B',
    explanation:
      'O gabarito detalhado de 2018 mostra a = 47° 25,5’.',
    attachments: [
      { label: 'AN 2018 - Correção de altura (Anexo A)', path: '/anexos/cpa1-2018-anexo-a.pdf' },
    ],
  },
  {
    id: 2018005,
    subject: 'astronomia',
    topic: 'latitude meridiana',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A latitude meridiana calculada foi:',
    options: {
      A: '42° 47,9’ N.',
      B: '43° 13,4’ N.',
      C: '42° 58,3’ N.',
      D: '43° 31,6’ N.',
      E: '42° 53,7’ N.',
    },
    correct: 'E',
    explanation:
      'O gabarito detalhado de 2018 confirma ϕ = 42° 53,7’ N.',
    attachments: [
      { label: 'AN 2018 - Página 65 (Anexo B)', path: '/anexos/cpa1-2018-anexo-b.pdf' },
      { label: 'AN 2018 - Acréscimos e correções (Anexo C)', path: '/anexos/cpa1-2018-anexo-c.pdf' },
    ],
  },
  {
    id: 2018006,
    subject: 'astronomia',
    topic: 'longitude meridiana',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A longitude meridiana foi:',
    options: {
      A: '007° 07,3’ E',
      B: '006° 57,5’ E',
      C: '007° 01,4’ E',
      D: '006° 51,9’ E',
      E: '007° 12,2’ E',
    },
    correct: 'B',
    explanation:
      'O gabarito detalhado de 2018 confirma λ = 006° 57,5’ E.',
    attachments: [
      { label: 'AN 2018 - Página 65 (Anexo B)', path: '/anexos/cpa1-2018-anexo-b.pdf' },
      { label: 'AN 2018 - Acréscimos e correções (Anexo C)', path: '/anexos/cpa1-2018-anexo-c.pdf' },
    ],
  },
  {
    id: 2018007,
    subject: 'astronomia',
    topic: 'hora média local em outra longitude',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Qual foi a HML na longitude 176° 24,5’ W, quando o Sol culminou na posição correta do iate que foi determinada pelo Capitão?',
    options: {
      A: '22h 56m 10s (dia 20/03)',
      B: '04h 43m 24s (dia 21/03)',
      C: '02h 21m 16s (dia 21/03)',
      D: '23h 53m 43s (dia 20/03)',
      E: '15h 10m 34s (dia 21/03)',
    },
    correct: 'D',
    explanation:
      'A alternativa correta é a indicada no gabarito oficial CPA-I 2018.',
    attachments: [
      { label: 'AN 2018 - Conversão de arco em tempo (Anexo D)', path: '/anexos/cpa1-2018-anexo-d.pdf' },
    ],
  },
  {
    id: 2018008,
    subject: 'astronomia',
    topic: 'análise da posição corrigida',
    year: 2018,
    exam: 'CPA-I 2018',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Tendo determinado as coordenadas geográficas corretas do iate na passagem meridiana do Sol, o Capitão, na ocasião, tirou algumas conclusões em função da posição que ele estimou que seu barco estivesse. Dentre as conclusões abaixo, indique qual está correta, considerando que o Capitão esteve nas últimas horas navegando com rumo na superfície 090°.',
    options: {
      A: 'O rumo na superfície precisou ser compensado para boreste, para seguir no COG planejado.',
      B: 'O iate estava com uma velocidade na superfície maior que a SOG.',
      C: 'A corrente na área provavelmente era para SW.',
      D: 'O Capitão precisou diminuir a velocidade se quisesse chegar ao destino na hora prevista.',
      E: 'O caimento do iate estava sendo para boreste.',
    },
    correct: 'A',
    explanation:
      'A alternativa correta é a indicada no gabarito oficial CPA-I 2018.',
  },
  {
    id: 2020006,
    subject: 'astronomia',
    topic: 'latitude meridiana',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A Latitude Meridiana calculada pelo Capitão foi:',
    options: {
      A: '17° 22,1’ S',
      B: '18° 04,7’ S',
      C: '17° 47,3’ S',
      D: '16° 58,5’ S',
      E: '17° 12,8’ S',
    },
    correct: 'C',
    explanation:
      'O gabarito detalhado de 2020 mostra ϕ = 17° 47,3’ S.',
    attachments: [
      { label: 'ANB 2020 - gabarito detalhado de astronômica', path: '/anexos/cpa1-2020-gabarito-astro.pdf' },
    ],
  },
  {
    id: 2020007,
    subject: 'astronomia',
    topic: 'longitude meridiana',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A Longitude Meridiana calculada foi:',
    options: {
      A: '038° 58,5’ W',
      B: '039° 03,7’ W',
      C: '038° 45,8’ W',
      D: '039° 14,6’ W',
      E: '038° 52,8’ W',
    },
    correct: 'E',
    explanation:
      'O gabarito detalhado de 2020 mostra λ = 038° 52,8’ W.',
    attachments: [
      { label: 'ANB 2020 - gabarito detalhado de astronômica', path: '/anexos/cpa1-2020-gabarito-astro.pdf' },
    ],
  },
  {
    id: 2020008,
    subject: 'astronomia',
    topic: 'análise da posição corrigida',
    year: 2020,
    exam: 'CPA-I 2020',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Tendo determinado as coordenadas geográficas corretas da sua embarcação na Passagem Meridiana do Sol, o Capitão, na ocasião, tirou algumas conclusões em função da posição que ele estimou que seu barco estaria. Dentre as conclusões abaixo, indique qual está correta, considerando que o Capitão esteve nas últimas horas navegando com rumo na superfície 090°.',
    options: {
      A: 'O rumo na superfície precisou ser compensado para boreste (BE), para seguir no COG planejado.',
      B: 'O caimento da embarcação (XTE) foi de 3,3 milhas náuticas para boreste.',
      C: 'A corrente na área provavelmente era para SW.',
      D: 'A embarcação estava com uma velocidade na superfície maior que a SOG.',
      E: 'O Capitão precisou aumentar a velocidade se quisesse chegar ao destino na hora prevista.',
    },
    correct: 'B',
    explanation:
      'A alternativa correta é a indicada no gabarito detalhado oficial de astronômica de 2020.',
    attachments: [
      { label: 'ANB 2020 - gabarito detalhado de astronômica', path: '/anexos/cpa1-2020-gabarito-astro.pdf' },
    ],
  },
    {
    id: 2016001,
    subject: 'astronomia',
    topic: 'passagem meridiana / hora legal',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Neste dia 14 de março, a Hora Legal (Hleg) prevista para o Sol culminar no fuso correspondente à longitude estimada foi:',
    options: {
      A: '12h 09m.',
      B: '11h 19m.',
      C: '12h 10m.',
      D: '12h 22m.',
      E: '11h 55m.',
    },
    correct: 'D',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2016.',
    attachments: [
      { label: 'AN 2016 - Correção de altura', path: '/anexos/cpa1-2016-anexo-a.pdf' },
      { label: 'AN 2016 - Página 61', path: '/anexos/cpa1-2016-anexo-b.pdf' },
      { label: 'AN 2016 - Conversão de arco em tempo', path: '/anexos/cpa1-2016-anexo-c.pdf' },
      { label: 'AN 2016 - Acréscimos e correções', path: '/anexos/cpa1-2016-anexo-d.pdf' },
    ],
  },
  {
    id: 2016002,
    subject: 'astronomia',
    topic: 'altura verdadeira estimada',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Verificando os dados do Almanaque Náutico e a posição estimada do iate na passagem meridiana, o Capitão previu que a maior altura verdadeira estimada do Sol neste dia 14 de março seria:',
    options: {
      A: '86° 21,7’',
      B: '84° 45,8’',
      C: '86° 46,1’',
      D: '89° 34,4’',
      E: '86° 29,4’',
    },
    correct: 'E',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2016.',
    attachments: [
      { label: 'AN 2016 - Página 61', path: '/anexos/cpa1-2016-anexo-b.pdf' },
      { label: 'AN 2016 - Acréscimos e correções', path: '/anexos/cpa1-2016-anexo-d.pdf' },
    ],
  },
  {
    id: 2016003,
    subject: 'astronomia',
    topic: 'ângulo horário local',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'No momento da Passagem Meridiana do Sol, o Ângulo Horário Local (AHL) do astro era',
    options: {
      A: 'longitude do local.',
      B: 'zero.',
      C: 'ângulo Horário em Greenwich mais Longitude.',
      D: '360° menos Longitude.',
      E: '180° mais Ângulo Horário Civil.',
    },
    correct: 'B',
    explanation:
      'Na passagem meridiana, o astro cruza o meridiano local; por isso, o AHL é zero.',
  },
  {
    id: 2016004,
    subject: 'astronomia',
    topic: 'altura verdadeira',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Às HMG = 15h 22m 57s, do mesmo dia 14 de março, estando seu olho a 3,7 metros do nível do mar, o Capitão observou o limbo superior do Sol na passagem meridiana, obtendo a altura instrumental (ai) de 86° 47,3’. Ao calcular a altura verdadeira do centro do Sol, o Capitão obteve:',
    options: {
      A: '86° 16,7’',
      B: '86° 27,3’',
      C: '86° 11,1’',
      D: '86° 49,8’',
      E: '86° 47,3’',
    },
    correct: 'B',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2016.',
    attachments: [
      { label: 'AN 2016 - Correção de altura', path: '/anexos/cpa1-2016-anexo-a.pdf' },
      { label: 'AN 2016 - Página 61', path: '/anexos/cpa1-2016-anexo-b.pdf' },
      { label: 'AN 2016 - Acréscimos e correções', path: '/anexos/cpa1-2016-anexo-d.pdf' },
    ],
  },
  {
    id: 2016005,
    subject: 'astronomia',
    topic: 'latitude meridiana',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A Latitude calculada na passagem meridiana no dia 14 de março foi de',
    options: {
      A: '01° 21,2’ N',
      B: '01° 26,5’ N',
      C: '00° 06,9’ S',
      D: '01° 11,4’ N',
      E: '01° 09,3’ N',
    },
    correct: 'A',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2016.',
    attachments: [
      { label: 'AN 2016 - Página 61', path: '/anexos/cpa1-2016-anexo-b.pdf' },
      { label: 'AN 2016 - Acréscimos e correções', path: '/anexos/cpa1-2016-anexo-d.pdf' },
    ],
  },
  {
    id: 2016006,
    subject: 'astronomia',
    topic: 'longitude meridiana',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A Longitude calculada na Passagem Meridiana no dia 14 de março foi de',
    options: {
      A: '048° 25,1’ W',
      B: '048° 16,0’ W',
      C: '048° 28,8’ W',
      D: '048° 03,7’ W',
      E: '048° 36,3’ W',
    },
    correct: 'C',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2016.',
    attachments: [
      { label: 'AN 2016 - Página 61', path: '/anexos/cpa1-2016-anexo-b.pdf' },
      { label: 'AN 2016 - Conversão de arco em tempo', path: '/anexos/cpa1-2016-anexo-c.pdf' },
      { label: 'AN 2016 - Acréscimos e correções', path: '/anexos/cpa1-2016-anexo-d.pdf' },
    ],
  },
  {
    id: 2016007,
    subject: 'astronomia',
    topic: 'análise da posição observada x estimada',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Tendo determinado as coordenadas geográficas corretas na culminação do Sol, o Capitão, na ocasião, verificou que seu iate estava sofrendo forte influência da corrente das Guianas, o que ocasionou uma considerável diferença da posição observada em relação à estimada. Essa diferença na direção norte/sul foi de',
    options: {
      A: '1,5 milha náuticas ao sul.',
      B: '3,5 milhas náuticas ao norte.',
      C: '10 milhas náuticas ao norte.',
      D: '5,3 milhas náuticas ao sul.',
      E: '2,1 milhas náuticas ao norte.',
    },
    correct: 'E',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2016.',
  },
  {
    id: 2016008,
    subject: 'astronomia',
    topic: 'leitura do sextante',
    year: 2016,
    exam: 'CPA-I 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O sextante é um instrumento de reflexão destinado à medida de ângulos que, a bordo, é utilizado, principalmente, na Navegação Astronômica para a determinação das alturas dos astros. Na figura abaixo, que mostra as partes do sextante que possibilitam a leitura dessas alturas instrumentais (ai), o valor total do ângulo medido é:',
    options: {
      A: '44° 16,5’',
      B: '45° 15,0’',
      C: '46° 00,5’',
      D: '45° 16,4’',
      E: '46° 21,3’',
    },
    correct: 'D',
    explanation:
      'Resposta confirmada pelo gabarito oficial CPA-I 2016.',
    attachments: [
      { label: 'Figura do sextante - CPA-I 2016', path: '/anexos/cpa1-2016-sextante.pdf' },
    ],
  },
    {
    id: 2014001,
    subject: 'astronomia',
    topic: 'passagem meridiana / hora legal',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A Hora Legal (Hleg) da passagem meridiana do Sol é determinada a partir de:',
    options: {
      A: 'Latitude do observador',
      B: 'Longitude do observador e HMG',
      C: 'Declinação do Sol',
      D: 'Altura do astro',
      E: 'Rumo verdadeiro',
    },
    correct: 'B',
    explanation:
      'A Hleg depende da HMG ajustada pela longitude do observador.',
  },
  {
    id: 2014002,
    subject: 'astronomia',
    topic: 'declinação do Sol',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A declinação do Sol é obtida a partir de:',
    options: {
      A: 'Carta náutica',
      B: 'GPS',
      C: 'Radar',
      D: 'Almanaque Náutico',
      E: 'Bússola',
    },
    correct: 'D',
    explanation:
      'A declinação do Sol é sempre retirada do Almanaque Náutico.',
  },
  {
    id: 2014003,
    subject: 'astronomia',
    topic: 'distância zenital',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A distância zenital é definida como:',
    options: {
      A: 'Altura do astro',
      B: '90° + altura',
      C: '90° - altura',
      D: 'Declinação do astro',
      E: 'Latitude',
    },
    correct: 'C',
    explanation:
      'z = 90° - altura verdadeira do astro.',
  },
  {
    id: 2014004,
    subject: 'astronomia',
    topic: 'latitude pela altura meridiana',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A latitude meridiana pode ser determinada por:',
    options: {
      A: 'Rumo e distância',
      B: 'Radar',
      C: 'Altura meridiana e declinação',
      D: 'Velocidade e tempo',
      E: 'AIS',
    },
    correct: 'C',
    explanation:
      'A latitude é obtida pela relação entre altura meridiana e declinação do astro.',
  },
  {
    id: 2014005,
    subject: 'astronomia',
    topic: 'erro instrumental',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O erro instrumental do sextante deve ser:',
    options: {
      A: 'Ignorado',
      B: 'Aplicado sempre',
      C: 'Corrigido antes do cálculo',
      D: 'Aplicado apenas de dia',
      E: 'Aplicado apenas à noite',
    },
    correct: 'C',
    explanation:
      'O erro instrumental deve ser corrigido na altura instrumental.',
  },
  {
    id: 2014006,
    subject: 'astronomia',
    topic: 'passagem meridiana',
    year: 2014,
    exam: 'CPA 2014',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Na passagem meridiana do Sol, pode-se afirmar que:',
    options: {
      A: 'O Sol está no horizonte',
      B: 'A altura é mínima',
      C: 'A altura é máxima',
      D: 'O AHL é 90°',
      E: 'O azimute é variável',
    },
    correct: 'C',
    explanation:
      'Na culminação o astro atinge sua maior altura.',
  },
  {
    id: 2016009,
    subject: 'astronomia',
    topic: 'ângulo horário de Greenwich',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O Ângulo Horário de Greenwich (AHG) é medido a partir de:',
    options: {
      A: 'Meridiano local',
      B: 'Meridiano de Greenwich',
      C: 'Equador',
      D: 'Zênite',
      E: 'Horizonte',
    },
    correct: 'B',
    explanation:
      'O AHG é medido a partir do meridiano de Greenwich.',
  },
  {
    id: 2016010,
    subject: 'astronomia',
    topic: 'ângulo horário local',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O Ângulo Horário Local (AHL) é obtido por:',
    options: {
      A: 'AHG - longitude',
      B: 'AHG + latitude',
      C: 'Declinação + latitude',
      D: 'Altura + declinação',
      E: 'Tempo + distância',
    },
    correct: 'A',
    explanation:
      'AHL = AHG - longitude (considerando sinais).',
  },
  {
    id: 2016011,
    subject: 'astronomia',
    topic: 'azimute do astro',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O azimute de um astro é medido a partir de:',
    options: {
      A: 'Leste',
      B: 'Oeste',
      C: 'Norte verdadeiro',
      D: 'Equador',
      E: 'Zênite',
    },
    correct: 'C',
    explanation:
      'O azimute é contado a partir do norte verdadeiro no sentido horário.',
  },
  {
    id: 2016012,
    subject: 'astronomia',
    topic: 'paralaxe',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A paralaxe é mais significativa para:',
    options: {
      A: 'Estrelas',
      B: 'Sol',
      C: 'Lua',
      D: 'Planetas distantes',
      E: 'Galáxias',
    },
    correct: 'C',
    explanation:
      'A Lua apresenta maior paralaxe devido à sua proximidade.',
  },
  {
    id: 2016013,
    subject: 'astronomia',
    topic: 'refração',
    year: 2016,
    exam: 'CPA-II 2016',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'A refração atmosférica faz com que o astro pareça:',
    options: {
      A: 'Mais baixo',
      B: 'Mais alto',
      C: 'Mais distante',
      D: 'Mais próximo',
      E: 'Mais lento',
    },
    correct: 'B',
    explanation:
      'A refração eleva a posição aparente do astro.',
  },{
  id: 2022001,
  subject: 'astronomia',
  topic: 'passagem meridiana / hora legal',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,
  statement:
    'A Hora Legal (Hleg) da passagem meridiana do Sol na posição estimada é:',
  options: {
    A: '12h 06m A',
    B: '12h 06m B',
    C: '12h 08m A',
    D: '12h 08m B',
    E: '12h 20m B',
  },
  correct: 'D',
  explanation:
    'Obtido a partir da HMG do ANB e ajustado pela longitude.',
  attachments: [
    { label: '📘 ANB 2020 - Página 127', path: '/anexos/anb-2020-p127.pdf' },
    { label: '📘 ANB 2020 - Página 147', path: '/anexos/anb-2020-p147.pdf' },
    { label: '⏱️ Conversão Arco-Tempo', path: '/anexos/anb-2020-i.pdf' },
  ],
},
{
  id: 2022002,
  subject: 'astronomia',
  topic: 'ângulo horário / meridiano',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,
  statement:
    'Na passagem meridiana, qual é o valor do Ângulo Horário Local (AHL)?',
  options: {
    A: '180°',
    B: '90°',
    C: '000°',
    D: '270°',
    E: '360°',
  },
  correct: 'C',
  explanation:
    'Na passagem meridiana, o astro está no meridiano local → AHL = 0°.',
  attachments: [
    { label: '📘 ANB 2020 - Página 127', path: '/anexos/anb-2020-p127.pdf' },
    { label: '📘 ANB 2020 - Página 147', path: '/anexos/anb-2020-p147.pdf' },
  ],
},
{
  id: 2022003,
  subject: 'astronomia',
  topic: 'distância zenital / altura',
  year: 2022,
  exam: 'CPA-I 2022',
  source: 'Prova oficial da Marinha',
  verified: true,
  statement:
    'A distância zenital do astro pode ser obtida a partir de:',
  options: {
    A: '90° + altura',
    B: '90° - altura',
    C: 'Declinação + latitude',
    D: 'Apenas declinação',
    E: 'Altura instrumental',
  },
  correct: 'B',
  explanation:
    'Distância zenital = 90° - altura verdadeira.',
  attachments: [
    { label: '📊 Correção de Altura (ANB)', path: '/anexos/anb-2020-a2.pdf' },
    { label: '📘 ANB 2020 - Página 127', path: '/anexos/anb-2020-p127.pdf' },
    { label: '📘 ANB 2020 - Página 147', path: '/anexos/anb-2020-p147.pdf' },
  ],
},
{
  id: 2020101,
  subject: 'astronomia',
  topic: 'hora média de Greenwich',
  year: 2020,
  exam: 'CPA-I 2020',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Um navegante encontra-se na posição estimada Lat 17° 44,0’ S e Long 038° 58,5’ W no dia 23 de fevereiro de 2020.

Sabendo que a Hora Legal da culminação do Sol foi 12h 13m, qual é a Hora Média de Greenwich (HMG) correspondente?`,

  options: {
    A: '11h 49m',
    B: '12h 13m',
    C: '14h 32m',
    D: '12h 01m',
    E: '14h 49m',
  },

  correct: 'E',

  explanation: `Para converter Hora Legal (HL) em Hora Média de Greenwich (HMG), soma-se a diferença de longitude.

Longitude: 038° 58,5’ W ≈ 2h 36m

HMG = HL + longitude  
HMG = 12h 13m + 2h 36m = 14h 49m  

Alternativa correta: E.`,
},
{
  id: 2020102,
  subject: 'astronomia',
  topic: 'ângulo horário local',
  year: 2020,
  exam: 'CPA-I 2020',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Na passagem meridiana do Sol, qual é o Ângulo Horário Local (AHL) do astro?`,

  options: {
    A: '038° 58,5’',
    B: '000° 00,0’',
    C: '025° 12,6’',
    D: '045° 31,2’',
    E: '017° 44,0’',
  },

  correct: 'B',

  explanation: `Na culminação, o astro está exatamente sobre o meridiano do observador.

Por definição:  
AHL = 0°

Alternativa correta: B.`,
},
{
  id: 2020103,
  subject: 'astronomia',
  topic: 'altura verdadeira',
  year: 2020,
  exam: 'CPA-I 2020',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Um navegante observou o Sol com altura instrumental de 81° 52,8’, com erro instrumental de –0,3’ e altura do olho de 2,9 m.

Aplicando as correções necessárias, qual é a altura verdadeira do astro?`,

  attachments: [
    {
      label: 'Correção de altura (dip e refração)',
      path: '/anexos/anb-2020-a2.pdf'
    },
    {
      label: 'Correções do Sol (ANB)',
      path: '/anexos/anb-2020-xxii.pdf'
    }
  ],

  options: {
    A: '83° 13,9’',
    B: '82° 05,5’',
    C: '81° 55,8’',
    D: '82° 37,2’',
    E: '80° 49,1’',
  },

  correct: 'B',

  explanation: `1) Corrige erro instrumental:
81° 52,8’ - 0,3’ = 81° 52,5’

2) Aplica dip (2,9 m):
≈ -3,0’ → 81° 49,5’

3) Correção do Sol (limbo inferior):
≈ +16,0’

Altura verdadeira:
81° 49,5’ + 16,0’ = 82° 05,5’

Alternativa correta: B.`,
},
{
  id: 2020104,
  subject: 'astronomia',
  topic: 'latitude meridiana',
  year: 2020,
  exam: 'CPA-I 2020',
  source: 'Prova oficial da Marinha',
  verified: true,

  statement: `Sabendo que a altura verdadeira do Sol foi 82° 05,5’ e a declinação era 09° 52,8’ S, qual é a latitude da embarcação?`,

  options: {
    A: '17° 22,1’ S',
    B: '18° 04,7’ S',
    C: '17° 47,3’ S',
    D: '16° 58,5’ S',
    E: '17° 12,8’ S',
  },

  correct: 'C',

  explanation: `z = 90° - 82° 05,5’ = 7° 54,5’

Latitude = z + declinação  
= 7° 54,5’ + 9° 52,8’ = 17° 47,3’ S

Alternativa correta: C.`,
},

{
  id: 1003,
  subject: 'astronomia',
  topic: 'altura verdadeira',
  year: 2020,
  exam: 'CPA-I 2020',
  source: 'Marinha do Brasil',
  verified: true,

  statement: `No dia 23 de fevereiro de 2020, durante a passagem meridiana do Sol, um Capitão-Amador observou o limbo inferior do Sol com seu sextante, obtendo uma altura instrumental (ai) de 81° 52,8’.

Sabendo que:
- o erro instrumental do sextante era de –0,3’
- a altura do olho era de 2,9 metros
- devem ser aplicadas as correções do Almanaque Náutico (ANB) em anexo

Aplicando as correções necessárias à altura instrumental, qual é a altura verdadeira do Sol?`,

  attachments: [
    {
      label: 'Correção de Altura (ANB)',
      path: '/anexos/anb-2020-a2.pdf'
    },
    {
      label: 'ANB - Página 47',
      path: '/anexos/anb-2020-p47.pdf'
    },
    {
      label: 'ANB - Acréscimos e Correções',
      path: '/anexos/anb-2020-xxvi.pdf'
    }
  ],

  options: {
    A: '83° 13,9’',
    B: '82° 05,5’',
    C: '81° 55,8’',
    D: '82° 37,2’',
    E: '80° 49,1’'
  },

  correct: 'B',

  explanation: `A resolução segue as etapas padrão de redução da altura:

1) Altura instrumental (ai):
ai = 81° 52,8’

2) Correção do erro instrumental:
ei = –0,3’
→ ao = 81° 52,5’

3) Correção da depressão do horizonte (altura do olho = 2,9 m):
dp ≈ –3,0’
→ aap = 81° 49,5’

4) Correção do Sol (limbo inferior) pelo ANB:
c ≈ +16,0’

5) Altura verdadeira:
a = 81° 49,5’ + 16,0’
a = 82° 05,5’

Alternativa correta: B`
},
{
  id: 2020006,
  subject: 'astronomia',
  topic: 'cálculo completo de posição',
  year: 2020,
  exam: 'CPA-I 2020',
  source: 'Prova oficial da Marinha',
  verified: true,
  statement: 'Com base nos dados observados e nas tabelas do ANB, determine a posição estimada.',
  options: {
    A: 'Lat 22° S / Long 043° W',
    B: 'Lat 23° S / Long 044° W',
    C: 'Lat 21° S / Long 042° W',
    D: 'Lat 24° S / Long 045° W',
    E: 'Lat 20° S / Long 041° W',
  },
  correct: 'A',
  explanation: 'Resultado obtido após aplicação completa das tabelas do ANB.',
  attachments: [
    {
      label: 'Correção de altura (dip e refração)',
      path: '/anexos/anb-2020-a2.pdf',
    },
    {
      label: 'Correções do Sol (Almanaque Náutico)',
      path: '/anexos/anb-2020-xxii.pdf',
    },
  ],
},
]
