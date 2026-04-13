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

  statement: `No dia 21 de julho de 2020, à Hora Média de Greenwich (HMG) = 10h09m40s, o navegador observou o limbo superior do Sol, obtendo ai = 68° 13,5’. Com base no Almanaque Náutico, determine a declinação do Sol no instante.`,

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
    },
    {
      label: 'ANB - Página 147 (acréscimos e correções)',
      path: '/anexos/anb-2020-p147.pdf'
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
      'A Hora Legal da passagem meridiana é obtida consultando-se no ANB o instante da culminação e convertendo-o para o fuso do observador. Feita a correção de longitude e o ajuste para a hora legal usada no enunciado, o resultado fica em torno de 11h 59m. Por isso, a alternativa correta é a B.',
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
      'A distância polar é medida a partir do polo celeste até o astro. Para o Sol com declinação sul, ela é dada por 90° + declinação. Usando o valor tabulado para a data, obtém-se aproximadamente 106° 40,6’. Por isso, a alternativa correta é a A.',
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
      'A linha dos solstícios é uma referência geométrica imaginária da esfera celeste, usada para representar a posição extrema anual do Sol em relação ao equador celeste. Não é uma linha física nem um círculo máximo próprio do Sol. Por isso, a alternativa correta é a A.',
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
      'A precessão é um movimento lento e global do eixo de rotação da Terra, que altera gradualmente a orientação desse eixo no espaço. Não ocorre em um ano nem é um movimento do Sol. Por isso, a alternativa correta é a E.',
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
      'Consultando os anexos do Almanaque Náutico para a data e aplicando a correção de longitude da posição estimada, chega-se ao horário local da passagem meridiana. O valor aproximado obtido é 11h54min. Por isso, a alternativa correta é a C.',
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
      'No Almanaque Náutico, os horários de nascer e pôr do Sol tabulados por latitude são fornecidos em HML, isto é, hora média local. Eles ainda precisam ser convertidos para hora legal quando o problema pede o valor lido no relógio do fuso. Por isso, a alternativa correta é a D.',
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
      'Pelo Almanaque Náutico, o horário do pôr do Sol para a latitude tabulada mais próxima (10° S), em 05 de agosto de 2011, é dado em HML e vale aproximadamente 18 h 37 m 40 s. Como o relógio do enunciado está em horário de Brasília, deve-se converter para HLEG do fuso centrado em 45° W. A longitude da embarcação é 34° 50’ W, portanto ela está 10° 10’ a leste do meridiano central do fuso. Convertendo essa diferença em tempo: 10° 10’ = 40 m 40 s. Estando a embarcação a leste do meridiano do fuso, a HML local fica adiantada em relação à HLEG, então subtrai-se essa correção: 18 h 37 m 40 s - 40 m 40 s = 17 h 57 m 00 s. Portanto, a alternativa correta é a D.',
    attachments: [
      { label: 'Anexos da prova CPA-I 2024', path: '/anexos/cpa1-2024-anexos.pdf' },
    ],
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
      'Na costa leste brasileira, o Sol nasce aproximadamente a leste. Se ao amanhecer a embarcação estava aproada ao Sol, sua proa apontava para leste, o que é coerente com a derrota de quem seguia pela costa leste em direção ao nordeste. Por isso, a alternativa correta é a A.',
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
      'Na passagem meridiana superior, o Sol atinge a maior altura do dia. Por isso, entre várias observações sucessivas próximas da PMS, a altura usada no cálculo da latitude meridiana é a mais elevada observada. A alternativa correta é a E.',
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
      'Na imagem do sextante, a coincidência é feita usando a borda inferior do disco solar tangenciando o horizonte. Isso caracteriza observação pelo limbo inferior do astro. Por isso, a alternativa correta é a B.',
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
      'O movimento diário aparente dos astros é consequência da rotação verdadeira da Terra. A Terra gira no sentido direto, e não executa um movimento diário retrógrado. Por isso, a alternativa correta é a D.',
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
      'A resolução exige corrigir o cronômetro com o estado absoluto, obter o instante da observação, aplicar as correções de sextante e da altura do olho para chegar à altura verdadeira, e então combinar a distância zenital com a declinação do Sol corrigida pelo valor d. Executando essa sequência com os anexos da prova, obtém-se latitude meridiana de 14° 00,0’ N. Por isso, a alternativa correta é a C.',
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
    'Na data de 03 de junho de 2021, para a posição estimada da embarcação, sabendo que a observação da culminação ocorreu à HMG = 16h 16m, determine no Almanaque Náutico a declinação do Sol nesse instante.',

  options: {
    A: '22° 20,9’ N.',
    B: '22° 20,9’ S.',
    C: '22° 21,1’ N.',
    D: '22° 21,2’ N.',
    E: '22° 21,2’ S.',
  },

  correct: 'D',

  explanation:
    'Deve-se consultar o ANB para 03 de junho de 2021 usando a HMG da observação da culminação na posição estimada da embarcação, e não apenas o horário de culminação em Z. Com HMG = 16h 16m, a interpolação fornece declinação aproximada de 22° 21,2’ Norte.',

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
    'Na passagem meridiana do Sol, sabendo que a latitude meridiana do observador era aproximadamente 10° 51,2’ N e que a declinação solar era cerca de 22° 21’ N, determine o azimute do astro.',

  options: {
    A: '000°',
    B: '090°',
    C: '135°',
    D: '180°',
    E: '270°',
  },

  correct: 'A',

  explanation:
    'Na culminação meridiana, o Sol cruza o meridiano local. Como o observador está no hemisfério Norte, em baixa latitude, e a declinação do Sol (22° 21’ N) é maior que a latitude do observador (10° 51,2’ N), o Sol culmina ao norte do zênite. Portanto, o azimute verdadeiro do astro na passagem meridiana é 000°.',

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
      'No caso astronômico do CPA-I 2017 referente ao dia 30 de março, qual foi a Hora Legal prevista pelo Capitão para a Passagem Meridiana do Sol?',
    options: {
      A: '11h 47m.',
      B: '12h 01m.',
      C: '11h 59m.',
      D: '11h 53m.',
      E: '12h 03m.',
    },
    correct: 'D',
    explanation:
      'Determina-se no ANB a HMG da passagem meridiana e, em seguida, converte-se esse valor para a hora legal do fuso do observador. Aplicando a correção de longitude e o ajuste de fuso do caso, a culminação ocorre às 11h53m. Por isso, a alternativa correta é a D.',
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
      'No mesmo caso astronômico do CPA-I 2017, em 30 de março, o Capitão previu que o Sol culminaria próximo do zênite. Qual foi a distância angular prevista entre o zênite e o Sol?',
    options: {
      A: '01° 10,3’.',
      B: '05° 27,7’.',
      C: '04° 02,7’.',
      D: '02° 53,8’.',
      E: '00° 18,5’.',
    },
    correct: 'B',
    explanation:
      'A distância zenital prevista na culminação é dada pela diferença angular entre a latitude estimada do observador e a declinação do Sol quando ambos estão no mesmo hemisfério. Fazendo essa comparação para o caso, obtém-se 05° 27,7’. Por isso, a alternativa correta é a B.',
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
      'Na Passagem Meridiana do Sol do caso astronômico do CPA-I 2017, em 30 de março, podemos afirmar que:',
    options: {
      A: 'por estar o Sol próximo do equinócio, a variação horária da declinação seria máxima.',
      B: 'o Ângulo Horário em Greenwich (AHG) do Sol seria igual a zero.',
      C: 'a Distância Zenital do Sol seria máxima.',
      D: 'o Ângulo Horário em Greenwich (AHG) seria igual ao Ângulo Horário Local (AHL).',
      E: 'o Ângulo Horário Local (AHL) do Sol seria igual a 180°.',
    },
    correct: 'A',
    explanation:
      'Próximo ao equinócio, a declinação do Sol muda mais rapidamente de um dia para o outro e sua variação horária se torna especialmente relevante nos cálculos. As demais alternativas contrariam propriedades básicas da passagem meridiana, como AHL = 0° e não 180°. Por isso, a alternativa correta é a A.',
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
      'Balançar o sextante faz a imagem do astro descrever um pequeno arco e ajuda a identificar o instante em que a coincidência ocorre exatamente no plano vertical do astro. Isso evita uma leitura fora do vertical verdadeiro. Por isso, a alternativa correta é a E.',
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
      'No caso astronômico do CPA-I 2017, às HMG = 17h 52m 28,0s de 30/03, o Capitão colimou o limbo inferior do Sol na passagem meridiana e obteve a altura instrumental (ai) de 84° 16,8\'. Sabendo que seu olho durante a observação estava a 2,5 metros acima do nível do mar, qual foi a altura verdadeira do astro?',
    options: {
      A: '84° 58,8’.',
      B: '84° 29,8’.',
      C: '85° 21,6’.',
      D: '83° 54,2’.',
      E: '85° 23,5’.',
    },
    correct: 'B',
    explanation:
      'Parte-se da altura instrumental e aplicam-se as correções usuais: erro instrumental, depressão do horizonte pela altura do olho e a correção do Sol para limbo inferior. Após esses ajustes, a altura verdadeira obtida é 84° 29,8’. Por isso, a alternativa correta é a B.',
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
      'No cálculo da Passagem Meridiana do caso astronômico do CPA-I 2017, qual foi a latitude obtida pelo Capitão?',
    options: {
      A: '01° 18,3’ S.',
      B: '01° 23,1’ S.',
      C: '01° 35,0’ S.',
      D: '01° 27,5’ S.',
      E: '00° 59,6’ S.',
    },
    correct: 'D',
    explanation:
      'Calcula-se primeiro a distância zenital na culminação e depois combina-se esse valor com a declinação do Sol, respeitando o hemisfério do observador. O resultado do caso conduz a uma latitude meridiana de 01° 27,5’ S. Por isso, a alternativa correta é a D.',
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
      'No caso astronômico do CPA-I 2018, em 21/03, o Capitão calculou a Hora Legal prevista para a culminação do Sol no fuso correspondente à longitude estimada. Qual foi o resultado?',
    options: {
      A: '12h 07m',
      B: '11h 45m',
      C: '11h 51m',
      D: '11h 39m',
      E: '12h 00m',
    },
    correct: 'D',
    explanation:
      'Obtém-se no ANB a hora da culminação em referência a Greenwich e converte-se para o fuso do observador por meio da longitude estimada. Feito esse ajuste, a Hora Legal prevista para a passagem meridiana é 11h39m. Por isso, a alternativa correta é a D.',
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
      'No mesmo caso astronômico do CPA-I 2018, em 21/03, o Capitão calculou a distância angular estimada entre o Sol e o Equador por ocasião da passagem meridiana. Qual foi o valor encontrado?',
    options: {
      A: '00° 19,2’ N',
      B: '01° 25,7’ S',
      C: '00° 20,3’ S',
      D: '00° 18,5’ N',
      E: '01° 10,9’ N',
    },
    correct: 'A',
    explanation:
      'A declinação do Sol é lida no ANB para a data e hora da culminação e, se necessário, interpolada. Para esse caso, o valor fica ligeiramente ao norte do equador celeste: 00° 19,2’ N. Por isso, a alternativa correta é a A.',
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
      'Ainda no caso astronômico do CPA-I 2018, considerando a posição estimada do iate por ocasião da passagem meridiana do Sol, o Capitão concluiu que o Sol estaria:',
    options: {
      A: 'bem baixo, próximo do horizonte.',
      B: 'num azimute ao norte do iate.',
      C: 'ao norte do equinócio do outono no Hemisfério Sul.',
      D: 'no azimute 180° exatamente ao ½ dia médio.',
      E: 'numa distância zenital dezenas de graus defasada da latitude estimada.',
    },
    correct: 'C',
    explanation:
      'Como a declinação obtida para o instante é norte, embora pequena, o Sol está ligeiramente ao norte do equador celeste. Isso torna correta a afirmação de que ele se encontra ao norte do equinócio do outono no hemisfério sul. Por isso, a alternativa correta é a C.',
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
      'A altura observada deve ser corrigida pelo dip correspondente à altura do olho e pela correção do Sol observando-se o limbo superior. Aplicando essas reduções à leitura de 47° 45,7’, chega-se à altura verdadeira de 47° 25,5’. Por isso, a alternativa correta é a B.',
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
      'No caso astronômico do CPA-I 2018, qual foi a latitude meridiana calculada pelo Capitão?',
    options: {
      A: '42° 47,9’ N.',
      B: '43° 13,4’ N.',
      C: '42° 58,3’ N.',
      D: '43° 31,6’ N.',
      E: '42° 53,7’ N.',
    },
    correct: 'E',
    explanation:
      'Calcula-se a distância zenital pela expressão z = 90° - a. Com a altura verdadeira de 47° 25,5’, resulta z = 42° 34,5’. Somando-se a declinação norte de 00° 19,2’, obtém-se 42° 53,7’ N. Por isso, a alternativa correta é a E.',
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
      'No caso astronômico do CPA-I 2018, qual foi a longitude meridiana calculada pelo Capitão?',
    options: {
      A: '007° 07,3’ E',
      B: '006° 57,5’ E',
      C: '007° 01,4’ E',
      D: '006° 51,9’ E',
      E: '007° 12,2’ E',
    },
    correct: 'B',
    explanation:
      'A longitude meridiana decorre da diferença entre o instante da culminação em Greenwich e o tempo local correspondente. Convertendo a diferença de tempo em arco e observando que o ponto está a leste de Greenwich, obtém-se 006° 57,5’ E. Por isso, a alternativa correta é a B.',
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
      'No caso astronômico do CPA-I 2018, qual foi a HML na longitude 176° 24,5’ W quando o Sol culminou na posição correta do iate determinada pelo Capitão?',
    options: {
      A: '22h 56m 10s (dia 20/03)',
      B: '04h 43m 24s (dia 21/03)',
      C: '02h 21m 16s (dia 21/03)',
      D: '23h 53m 43s (dia 20/03)',
      E: '15h 10m 34s (dia 21/03)',
    },
    correct: 'D',
    explanation:
      'Converte-se a longitude 176° 24,5’ W em diferença de tempo em relação a Greenwich e ajusta-se a data conforme a travessia da linha de mudança de data. O resultado correspondente à culminação do caso é 23h 53m 43s do dia 20/03. Por isso, a alternativa correta é a D.',
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
      'No caso astronômico do CPA-I 2018, depois de determinar as coordenadas geográficas corretas do iate na passagem meridiana do Sol, o Capitão comparou a posição observada com a posição estimada. Considerando que navegou nas últimas horas com rumo na superfície 090°, qual conclusão está correta?',
    options: {
      A: 'O rumo na superfície precisou ser compensado para boreste, para seguir no COG planejado.',
      B: 'O iate estava com uma velocidade na superfície maior que a SOG.',
      C: 'A corrente na área provavelmente era para SW.',
      D: 'O Capitão precisou diminuir a velocidade se quisesse chegar ao destino na hora prevista.',
      E: 'O caimento do iate estava sendo para boreste.',
    },
    correct: 'A',
    explanation:
      'Comparando a posição observada com a estimada e considerando que a embarcação seguia com rumo na superfície 090°, conclui-se que houve necessidade de compensação para boreste para manter o COG planejado. Essa é a interpretação compatível com a alternativa A.',
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
      'No caso astronômico do CPA-I 2020, sabendo que a altura verdadeira do Sol na passagem meridiana foi 82° 05,5’ e que a declinação era 09° 52,8’ S, qual foi a Latitude Meridiana calculada pelo Capitão?',
    options: {
      A: '17° 22,1’ S',
      B: '18° 04,7’ S',
      C: '17° 47,3’ S',
      D: '16° 58,5’ S',
      E: '17° 12,8’ S',
    },
    correct: 'C',
    explanation:
      'Calcula-se primeiro a distância zenital: z = 90° - 82° 05,5’ = 7° 54,5’. Em seguida, soma-se a declinação sul: 7° 54,5’ + 9° 52,8’ = 17° 47,3’ S. Portanto, a latitude meridiana é 17° 47,3’ S.',
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
      'No caso astronômico do CPA-I 2020 em 21 de julho, qual foi a Longitude Meridiana calculada pelo Capitão?',
    options: {
      A: '038° 58,5’ W',
      B: '039° 03,7’ W',
      C: '038° 45,8’ W',
      D: '039° 14,6’ W',
      E: '038° 52,8’ W',
    },
    correct: 'E',
    explanation:
      'A longitude meridiana é obtida convertendo-se em arco a diferença entre a referência horária de Greenwich e o tempo local da culminação. Como o resultado do caso fica a oeste de Greenwich, a longitude encontrada é 038° 52,8’ W. Por isso, a alternativa correta é a E.',
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
      'No caso astronômico do CPA-I 2020 em 21 de julho, após determinar as coordenadas geográficas corretas da embarcação na Passagem Meridiana do Sol, o Capitão comparou a posição observada com a posição estimada. Considerando que navegou nas últimas horas com rumo na superfície 090°, qual conclusão está correta?',
    options: {
      A: 'O rumo na superfície precisou ser compensado para boreste (BE), para seguir no COG planejado.',
      B: 'O caimento da embarcação (XTE) foi de 3,3 milhas náuticas para boreste.',
      C: 'A corrente na área provavelmente era para SW.',
      D: 'A embarcação estava com uma velocidade na superfície maior que a SOG.',
      E: 'O Capitão precisou aumentar a velocidade se quisesse chegar ao destino na hora prevista.',
    },
    correct: 'B',
    explanation:
      'Ao comparar a posição observada com a posição estimada após navegar em rumo 090°, o desvio lateral apurado corresponde a um caimento para boreste de 3,3 milhas náuticas. Essa interpretação é a única compatível com os dados finais do caso. Por isso, a alternativa correta é a B.',
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
      'No caso astronômico do CPA-I 2016 referente ao dia 14 de março, considerando a longitude estimada da embarcação e os anexos da prova, qual era a Hora Legal (Hleg) prevista para a culminação do Sol no fuso correspondente?',
    options: {
      A: '12h 09m.',
      B: '11h 19m.',
      C: '12h 10m.',
      D: '12h 22m.',
      E: '11h 55m.',
    },
    correct: 'D',
    explanation:
      'Parte-se da hora da passagem meridiana em Greenwich fornecida pelo Almanaque Náutico e ajusta-se o valor pela longitude estimada da embarcação, convertendo arco em tempo. Em seguida, aplica-se o fuso legal do caso. O resultado leva a 12h22. Por isso, a alternativa correta é a D.',
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
      'No caso astronômico do CPA-I 2016 referente ao dia 14 de março, na posição estimada do iate e com base nos dados do Almanaque Náutico, qual seria a maior altura verdadeira estimada do Sol?',
    options: {
      A: '86° 21,7’',
      B: '84° 45,8’',
      C: '86° 46,1’',
      D: '89° 34,4’',
      E: '86° 29,4’',
    },
    correct: 'E',
    explanation:
      'A maior altura verdadeira prevista na culminação pode ser estimada pela relação entre latitude e declinação do Sol, equivalendo a 90° menos a distância zenital meridiana. Aplicando os dados do caso, obtém-se aproximadamente 86° 29,4’. Por isso, a alternativa correta é a E.',
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
      'No caso astronômico do CPA-I 2016 referente ao dia 14 de março, às HMG = 15h 22m 57s, com o olho a 3,7 metros do nível do mar, o Capitão observou o limbo superior do Sol na passagem meridiana e obteve a altura instrumental (ai) de 86° 47,3’. Ao calcular a altura verdadeira do centro do Sol, qual resultado encontrou?',
    options: {
      A: '86° 16,7’',
      B: '86° 27,3’',
      C: '86° 11,1’',
      D: '86° 49,8’',
      E: '86° 47,3’',
    },
    correct: 'B',
    explanation:
      'Da altura instrumental observada, corrigem-se o dip correspondente à altura do olho e a correção do Sol para limbo superior. Após a redução completa da observação, a altura verdadeira do centro do Sol fica em 86° 27,3’. Por isso, a alternativa correta é a B.',
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
      'No caso astronômico do CPA-I 2016 referente ao dia 14 de março, qual foi a latitude calculada na passagem meridiana?',
    options: {
      A: '01° 21,2’ N',
      B: '01° 26,5’ N',
      C: '00° 06,9’ S',
      D: '01° 11,4’ N',
      E: '01° 09,3’ N',
    },
    correct: 'A',
    explanation:
      'Com a altura verdadeira na culminação, calcula-se a distância zenital e combina-se esse valor com a declinação do Sol respeitando os sinais e hemisférios do caso. O resultado é uma latitude meridiana de 01° 21,2’ N. Por isso, a alternativa correta é a A.',
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
      'No caso astronômico do CPA-I 2016 referente ao dia 14 de março, qual foi a longitude calculada na passagem meridiana?',
    options: {
      A: '048° 25,1’ W',
      B: '048° 16,0’ W',
      C: '048° 28,8’ W',
      D: '048° 03,7’ W',
      E: '048° 36,3’ W',
    },
    correct: 'C',
    explanation:
      'A longitude meridiana é determinada pela diferença entre o instante da culminação em Greenwich e o tempo local correspondente à observação. Convertendo essa diferença de tempo em graus, chega-se a 048° 28,8’ W. Por isso, a alternativa correta é a C.',
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
      'No caso astronômico do CPA-I 2016 referente ao dia 14 de março, o Capitão verificou que seu iate sofria forte influência da corrente das Guianas, gerando diferença entre a posição observada e a estimada. Qual foi essa diferença na direção norte-sul?',
    options: {
      A: '1,5 milha náuticas ao sul.',
      B: '3,5 milhas náuticas ao norte.',
      C: '10 milhas náuticas ao norte.',
      D: '5,3 milhas náuticas ao sul.',
      E: '2,1 milhas náuticas ao norte.',
    },
    correct: 'E',
    explanation:
      'A comparação entre a posição observada e a estimada mostra que a componente norte-sul do erro foi pequena, porém dirigida para o norte. A diferença correspondente é de 2,1 milhas náuticas ao norte. Por isso, a alternativa correta é a E.',
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
      'Na leitura do sextante, soma-se a leitura principal do arco com a indicação fina do tambor micrométrico. Fazendo essa composição na figura apresentada, o valor total medido é 45° 16,4’. Por isso, a alternativa correta é a D.',
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
