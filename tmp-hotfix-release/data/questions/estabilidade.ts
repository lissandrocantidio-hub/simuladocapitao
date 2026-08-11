import { Question } from '../../types/questions'

export const estabilidadeQuestions: Question[] = [
  {
    id: 2022038,
    subject: 'estabilidade',
    topic: 'GM negativo',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Um CapitÃ£o-Amador verificou que seria negativa Ã  altura metacÃªntrica transversal (GM) apÃ³s determinado embarque de material. Podemos afirmar para essa embarcaÃ§Ã£o nessa condiÃ§Ã£o que',
    options: {
      A: 'a embarcaÃ§Ã£o ficarÃ¡ embicada.',
      B: 'a embarcaÃ§Ã£o ficarÃ¡ derrabada.',
      C: 'a embarcaÃ§Ã£o ficarÃ¡ com banda para bombordo.',
      D: 'a embarcaÃ§Ã£o ficarÃ¡ com banda para boreste.',
      E: 'a embarcaÃ§Ã£o poderÃ¡ emborcar.',
    },
    correct: 'E',
    explanation:
      'GM significa altura metacentrica transversal, uma medida importante da estabilidade inicial da embarcacao. Quando o GM e negativo, a embarcacao perde a tendencia natural de voltar a posicao de equilibrio depois de adernar e pode emborcar. Por isso, a alternativa correta e a E.',
  },
  {
    id: 2022039,
    subject: 'estabilidade',
    topic: 'TPC / novo calado',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O Iate "Recife" apresentava um calado mÃ©dio de 8,50 m e na tabela de dados hidrostÃ¡ticos encontrou-se TPC = 2 t/cm. Durante uma operaÃ§Ã£o de abastecimento o iate recebeu 6 toneladas entre carga e combustÃ­vel. Qual Ã© o novo calado mÃ©dio encontrado',
    options: {
      A: '8,50 m.',
      B: '8,52 m.',
      C: '8,53 m.',
      D: '8,56 m.',
      E: '8,62 m.',
    },
    correct: 'C',
    explanation:
      'TPC significa toneladas por centimetro de imersao. Em outras palavras, e o peso necessario para aumentar o calado medio em 1 cm. Se o TPC e 2 t/cm, cada 2 toneladas embarcadas aumentam o calado em 1 cm. Com 6 toneladas, o aumento e de 3 cm. Assim, o calado medio passa de 8,50 m para 8,53 m. Por isso, a alternativa correta e a C.',
  },
  {
    id: 2022040,
    subject: 'estabilidade',
    topic: 'superfÃ­cie livre em tanque',
    year: 2022,
    exam: 'CPA-I 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Quando uma embarcaÃ§Ã£o sofre inclinaÃ§Ã£o por motivos externos e tem um tanque parcialmente cheio, seu conteÃºdo se movimenta e o peso do lÃ­quido nele contido se desloca como se fosse um peso inserido lateralmente, concorrendo para acentuar a inclinaÃ§Ã£o da embarcaÃ§Ã£o. O efeito da superfÃ­cie livre em um tanque pode fazer com que mesmo uma embarcaÃ§Ã£o com GM positivo fique com seu equilÃ­brio comprometido. Para reduzir esse efeito, sÃ£o instalados(as) em tanques:',
    options: {
      A: 'vigas.',
      B: 'longarinas.',
      C: 'cavernas.',
      D: 'anteparas longitudinais.',
      E: 'anteparas transversais.',
    },
    correct: 'D',
    explanation:
      'O efeito de superfÃ­cie livre Ã© reduzido ao subdividir o tanque de modo a limitar o deslocamento transversal do lÃ­quido. As anteparas longitudinais cumprem exatamente essa funÃ§Ã£o, diminuindo a largura livre do lÃ­quido e, com isso, o efeito adverso sobre a estabilidade. Por isso, a alternativa correta Ã© a D.',
  },
  {
    id: 20242008,
    subject: 'estabilidade',
    topic: 'balanÃ§o / estabilidade',
    year: 2024,
    exam: 'CPA-II 2024',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Podemos descrever a estabilidade de uma embarcaÃ§Ã£o pela sua resposta a pequenos Ã¢ngulos de balanÃ§o. Quando o movimento de balanÃ§o de seu barco estiver muito lento durante uma travessia, vocÃª poderÃ¡ afirmar que:',
    options: {
      A: 'sua embarcaÃ§Ã£o estÃ¡ com boa estabilidade.',
      B: 'sua embarcaÃ§Ã£o estÃ¡ com pouca estabilidade.',
      C: 'a embarcaÃ§Ã£o estÃ¡ com equilÃ­brio indiferente.',
      D: 'sua embarcaÃ§Ã£o estÃ¡ adernada.',
      E: 'sua embarcaÃ§Ã£o estÃ¡ derrabada.',
    },
    correct: 'B',
    explanation:
      'BalanÃ§o muito lento estÃ¡ associado a menor rigidez inicial, isto Ã©, a menor estabilidade. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 20232013,
    subject: 'estabilidade',
    topic: 'estabilidade dinÃƒÂ¢mica / borda livre e quilha',
    year: 2023,
    exam: 'CPA-II 2023',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Assinale a opÃ§Ã£o que completa corretamente as lacunas. Um veleiro necessita dissipar a energia relacionada a seu balanÃ§o (estabilidade dinÃ¢mica) e, para isso, Ã© melhor ter borda livre __________ e uma quilha __________, que funcionarÃ¡ como dissipadora de energia, sendo ela __________ suscetÃ­vel de deslizar lateralmente na frente da onda, prenÃºncio de emborcamento.',
    options: {
      A: 'alta - rasa - mais.',
      B: 'baixa - profunda - menos.',
      C: 'alta - profunda - mais.',
      D: 'baixa - rasa - mais.',
      E: 'alta - rasa - menos.',
    },
    correct: 'B',
    explanation:
      'Pela formulaÃ§Ã£o oficial da prova, a combinaÃ§Ã£o correta para melhor dissipaÃ§Ã£o de energia e menor suscetibilidade ao deslizamento lateral Ã© borda livre baixa e quilha profunda, tornando a embarcaÃ§Ã£o menos suscetÃ­vel. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 20222027,
    subject: 'estabilidade',
    topic: 'esforÃ§os longitudinais / deslocamento e deflexÃ£o',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Assinale a resposta, preenchendo corretamente as lacunas.\nAo analisar se o iate "Marina" apresentava algum tipo de deflexÃ£o causada por esforÃ§os longitudinais, o CapitÃ£o-Amador Lucas, de posse dos dados abaixo, calculou que o deslocamento do seu iate era de _______________ t e constatou que estava ________________ e _______________.\nLOA (Comprimento Total) = 25 m\nBoca Moldada = 4 m\nVolume de Carena = 200 m3\nDensidade da Ã¡gua salgada = 1,025 t/m3\nHav (calado a vante) = 2,3 m;\nHar (calado a rÃ©) = 2,5 m; e\nHmn (calado a meio navio) = 2,39 m.',
    options: {
      A: '205, derrabada e contra-alquebrada.',
      B: '230, embicada e alquebrada.',
      C: '239, derrabada e contra-alquebrada.',
      D: '240, embicada e contra-alquebrada',
      E: '250, em Ã¡guas parelhas e alquebrada.',
    },
    correct: 'A',
    explanation:
      'O deslocamento Ã© dado por volume de carena vezes densidade da Ã¡gua salgada: 200 x 1,025 = 205 t. Como o calado a rÃ© (2,5 m) Ã© maior que o calado a vante (2,3 m), a embarcaÃ§Ã£o estÃ¡ derrabada. A mÃ©dia entre vante e rÃ© Ã© 2,4 m, e como o calado a meio-navio Ã© 2,39 m, o meio estÃ¡ acima da linha mÃ©dia dos extremos, caracterizando contra-alquebramento. Por isso, a alternativa correta Ã© a A.',
  },
  {
    id: 20222028,
    subject: 'estabilidade',
    topic: 'superfÃ­cie livre',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Marque a alternativa correta.\nQuando os tanques de combustÃ­vel ou Ã¡gua nÃ£o estÃ£o completamente cheios podemos dizer que estamos com superfÃ­cie livre, tendo como consequÃªncia o aumento virtual do KG. Nesse caso, podemos afirmar que Ã© de fundamental importÃ¢ncia o estudo da estabilidade transversal e que o efeito da superfÃ­cie livre:',
    options: {
      A: 'nÃ£o depende das dimensÃµes do tanque.',
      B: 'depende da posiÃ§Ã£o do tanque a bordo.',
      C: 'aumenta a estabilidade da embarcaÃ§Ã£o.',
      D: 'diminui quando o tanque Ã© dividido por anteparas longitudinais.',
      E: 'aumenta quando o tanque Ã© dividido por anteparas longitudinais.',
    },
    correct: 'D',
    explanation:
      'Anteparas longitudinais reduzem a largura livre do lÃ­quido e, com isso, diminuem o efeito de superfÃ­cie livre sobre a estabilidade transversal. Por isso, a alternativa correta Ã© a D.',
  },
  {
    id: 20222029,
    subject: 'estabilidade',
    topic: 'CEE / GM',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Marque a alternativa correta sobre a CEE (Curva de Estabilidade Estatica). Se a curva apresenta GZ inicial negativo para pequenos angulos, isso indica:',
    options: {
      A: 'embarcacao com GM negativo (equilibrio inicial instavel).',
      B: 'embarcacao com GM positivo (equilibrio inicial estavel).',
      C: 'embarcacao com GM exatamente igual a zero em qualquer condicao.',
      D: 'apenas erro de leitura, sem relacao com estabilidade inicial.',
      E: 'efeito exclusivo de trim longitudinal, sem relacao com GM.',
    },
    correct: 'A',
    explanation:
      'Quando a CEE comeca com GZ negativo para pequenos angulos, a embarcacao nao tem tendencia inicial de retorno e o equilibrio inicial e instavel. Isso caracteriza GM negativo. Por isso, a alternativa correta e a A.',
  },
  {
    id: 20222034,
    subject: 'estabilidade',
    topic: 'variaÃ§Ã£o do trim',
    year: 2022,
    exam: 'CPA-II 2022',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Utilizando a tabela de dados hidrostÃ¡ticos da prova (ver material de apoio), o CapitÃ£o-Amador Alan determinou a variaÃ§Ã£o do trim causada por um peso de 1,8 t que foi movimentado 9 m longitudinalmente para rÃ©, tendo a embarcaÃ§Ã£o os calados a vante e a rÃ© iguais a 1,9 m. Ele encontrou para essa variaÃ§Ã£o e para o novo trim os seguintes valores:',
    options: {
      A: '0cm e 1cm.',
      B: '1cm e 2cm.',
      C: '2cm e 2cm.',
      D: '0cm e 2cm.',
      E: '2cm e 1cm.',
    },
    correct: 'C',
    explanation:
      'O momento de trim vale peso vezes deslocamento longitudinal: 1,8 x 9 = 16,2 t.m. Consultando a tabela hidrostÃ¡tica para o calado de 1,9 m, obtÃ©m-se o MCT 1 cm correspondente, e a divisÃ£o desse momento por esse valor leva a uma variaÃ§Ã£o de trim de aproximadamente 2 cm. Como os calados iniciais a vante e a rÃ© eram iguais, o trim inicial era zero; depois da movimentaÃ§Ã£o para rÃ©, o novo trim passa a 2 cm. Portanto, a alternativa correta Ã© a C.',
    attachments: [
      {
        label: 'Tabela hidrostÃ¡tica - CPA-II 2022',
        path: '/anexos/cpa2-2022/cpa2-2022-prova.pdf#page=13',
      },
    ],
  },
  {
    id: 20212039,
    subject: 'estabilidade',
    topic: 'equilibrio e elevacao virtual do centro de gravidade',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'Em um iate, ao tentar sair de Ubatuba, verificou-se que ele apresentava as seguintes cotas dos pontos notÃ¡veis G e M, respectivamente 2,7 m e 2,7 m. Qual Ã© o tipo de equilÃ­brio e o valor da elevaÃ§Ã£o virtual do centro de gravidade dessa embarcaÃ§Ã£o',
    options: {
      A: 'Indiferente, 0,1.',
      B: 'InstÃ¡vel, 2,7.',
      C: 'EstÃ¡vel, 2,7.',
      D: 'InstÃ¡vel, 0,1.',
      E: 'Indiferente, 0.',
    },
    correct: 'E',
    explanation:
      'Se G e M estÃ£o na mesma cota, entÃ£o GM = 0. Nessa condiÃ§Ã£o a embarcaÃ§Ã£o estÃ¡ em equilÃ­brio indiferente e a elevaÃ§Ã£o virtual correspondente Ã© nula. Por isso, a alternativa correta Ã© a E.',
  },
  {
    id: 20212040,
    subject: 'estabilidade',
    topic: 'GM transversal igual a zero',
    year: 2021,
    exam: 'CPA-II 2021',
    source: 'Prova oficial da Marinha',
    verified: true,
    statement:
      'O que significa a altura metacÃªntrica (GM) transversal igual a zero, em relaÃ§Ã£o ao equilÃ­brio de uma embarcaÃ§Ã£o',
    options: {
      A: 'Altera o trim da embarcaÃ§Ã£o.',
      B: 'Pode levÃ¡-la ao emborcamento.',
      C: 'Aumenta o gasto de combustÃ­vel.',
      D: 'NÃ£o altera a estabilidade.',
      E: 'A embarcaÃ§Ã£o fica abicada.',
    },
    correct: 'B',
    explanation:
      'GM igual a zero caracteriza equilÃ­brio indiferente, situaÃ§Ã£o-limite em que a embarcaÃ§Ã£o perde reserva de estabilidade transversal e pode evoluir para condiÃ§Ã£o perigosa de emborcamento. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 2099101,
    subject: 'estabilidade',
    topic: 'banda permanente e correÃ§Ã£o',
    year: 2026,
    exam: 'Banco temÃ¡tico CPA',
    source: 'NORMAM-211/DPC / bibliografia oficial',
    verified: true,
    statement:
      'Uma embarcaÃ§Ã£o passou a apresentar banda permanente para boreste apÃ³s a colocaÃ§Ã£o de peso elevado e descentralizado nesse bordo. A correÃ§Ã£o mais coerente com a teoria bÃ¡sica da estabilidade Ã©:',
    options: {
      A: 'transferir peso para boreste e mais para cima.',
      B: 'transferir peso para bombordo e, se possÃ­vel, para baixo.',
      C: 'aumentar a velocidade para reduzir o efeito.',
      D: 'alterar apenas o trim para vante.',
      E: 'aceitar a banda, pois ela nÃ£o interfere na estabilidade.',
    },
    correct: 'B',
    explanation:
      'A banda permanente causada por peso descentralizado se corrige deslocando peso para o bordo oposto e, idealmente, para posiÃ§Ã£o mais baixa, reduzindo tambÃ©m o KG. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 2099102,
    subject: 'estabilidade',
    topic: 'agua aberta e avarias',
    year: 2026,
    exam: 'Banco temÃ¡tico CPA',
    source: 'NORMAM-211/DPC / bibliografia oficial',
    verified: true,
    statement:
      'Durante uma viagem, o embarque de Ã¡gua do mar em compartimento avariado tende, em geral, a produzir qual efeito sobre a estabilidade transversal da embarcaÃ§Ã£o',
    options: {
      A: 'Aumenta o GM automaticamente.',
      B: 'NÃ£o produz qualquer efeito relevante.',
      C: 'Pode reduzir a estabilidade, sobretudo por efeito de superfÃ­cie livre.',
      D: 'Melhora a borda livre e a reserva de flutuabilidade.',
      E: 'Elimina a possibilidade de banda permanente.',
    },
    correct: 'C',
    explanation:
      'Ãgua aberta em compartimentos embarca peso e pode criar superfÃ­cie livre, o que reduz a estabilidade transversal e agrava a condiÃ§Ã£o da embarcaÃ§Ã£o. Por isso, a alternativa correta Ã© a C.',
  },
  {
    id: 2099103,
    subject: 'estabilidade',
    topic: 'alteracao do projeto inicial',
    year: 2026,
    exam: 'Banco temÃ¡tico CPA',
    source: 'NORMAM-211/DPC / bibliografia oficial',
    verified: true,
    statement:
      'A instalaÃ§Ã£o de estruturas adicionais pesadas em posiÃ§Ã£o alta, nÃ£o previstas no projeto inicial da embarcaÃ§Ã£o, tende a:',
    options: {
      A: 'baixar o centro de gravidade e aumentar o GM.',
      B: 'elevar o centro de gravidade e reduzir a estabilidade.',
      C: 'alterar apenas o calado, sem afetar a estabilidade.',
      D: 'eliminar o efeito de superfÃ­cie livre.',
      E: 'tornar a embarcaÃ§Ã£o necessariamente indiferente.',
    },
    correct: 'B',
    explanation:
      'Adicionar peso alto eleva o centro de gravidade (G), reduz a altura metacÃªntrica e piora a estabilidade transversal. Por isso, a alternativa correta Ã© a B.',
  },
  {
    id: 2099104,
    subject: 'estabilidade',
    topic: 'consumo durante a viagem',
    year: 2026,
    exam: 'Banco temÃ¡tico CPA',
    source: 'NORMAM-211/DPC / bibliografia oficial',
    verified: true,
    statement:
      'Durante uma viagem, o consumo de combustÃ­vel em tanques parcialmente cheios merece atenÃ§Ã£o especial porque pode:',
    options: {
      A: 'reduzir o efeito de superfÃ­cie livre em qualquer condiÃ§Ã£o.',
      B: 'aumentar o efeito de superfÃ­cie livre e alterar as condiÃ§Ãµes de estabilidade.',
      C: 'impedir a formaÃ§Ã£o de banda permanente.',
      D: 'garantir GM positivo independentemente do arranjo de bordo.',
      E: 'afetar apenas a autonomia, sem reflexo na estabilidade.',
    },
    correct: 'B',
    explanation:
      'Tanques parcialmente cheios podem intensificar o efeito de superfÃ­cie livre, alterando o KG virtual e degradando a estabilidade durante a viagem. Por isso, a alternativa correta Ã© a B.',
  },
{
  id: 2024022,
  subject: 'estabilidade',
  topic: 'fundamentos teoricos',
  conceptKey: 'stab.fundamentals.metacenter_definition',
  groupKey: 'stab.fundamentals.metacenter_definition.basic',
  difficulty: 'medium',
  year: 2024,
  exam: 'CPA-I 2024',
  source: 'Prova oficial da Marinha',
  verified: true,
  statement:
    'Assinale a alternativa que nao esta de acordo com os fundamentos teoricos da estabilidade de embarcacoes.',
  options: {
    A: 'No centro de carena atua a resultante das forcas de empuxo e sua posicao muda com o calado.',
    B: 'Quando uma embarcacao aderna, o centro de carena descreve uma curva cujo centro e o metacentro transversal.',
    C: 'A altura metacentrica e a distancia vertical entre o centro de gravidade e o centro de carena.',
    D: 'A resultante de todos os pesos atua no centro de gravidade.',
    E: 'O centro de carena muda quando ocorre inclinacao na embarcacao.',
  },
  correct: 'C',
  explanation:
    'A altura metacentrica e definida entre o centro de gravidade e o metacentro, e nao entre o centro de gravidade e o centro de carena. Por isso, a alternativa correta e a C.',
},
{
  id: 2024039,
  subject: 'estabilidade',
  topic: 'conceitos e definicoes',
  conceptKey: 'stab.concepts.trim_and_compass',
  groupKey: 'stab.concepts.trim_and_compass.basic',
  difficulty: 'medium',
  year: 2024,
  exam: 'CPA-II 2024',
  source: 'Prova oficial da Marinha',
  verified: true,
  statement:
    'Considerando conceitos e definicoes usados em estabilidade de embarcacoes, assinale a alternativa incorreta.',
  options: {
    A: 'Durante a viagem, o consumo de agua, provisoes e combustivel altera a altura metacentrica.',
    B: 'Se o calado a vante e maior que o calado a re, o compasso e positivo e a embarcacao esta embicada.',
    C: 'Ao iar uma carga por pau de carga, o KG aumenta, e um deslocamento horizontal do ponto de iamento move o centro de gravidade horizontalmente.',
    D: 'Reserva de flutuacao e a soma dos espacos fechados e estanques acima da linha dagua.',
    E: 'O valor de KM pode ser obtido por curvas hidrostÃ¡ticas em funcao do calado medio.',
  },
  correct: 'B',
  explanation:
    'Se o calado a vante Ã© maior que o calado a rÃ©, a embarcaÃ§Ã£o estÃ¡ embicada. A alternativa B associa essa condiÃ§Ã£o a uma convenÃ§Ã£o de compasso incompatÃ­vel com a descriÃ§Ã£o apresentada, por isso ela Ã© a incorreta. As demais opÃ§Ãµes permanecem coerentes com os conceitos bÃ¡sicos de estabilidade. Portanto, a alternativa correta Ã© a B.',
},
{
  id: 2023031,
  subject: 'estabilidade',
  topic: 'efeito de superficie livre',
  conceptKey: 'stab.free_surface.longitudinal_bulkheads',
  groupKey: 'stab.free_surface.basic',
  difficulty: 'easy',
  year: 2023,
  exam: 'CPA-I 2023',
  source: 'Prova oficial da Marinha',
  verified: true,
  statement:
    'Quando um tanque e dividido por anteparas longitudinais, qual o efeito sobre a estabilidade da embarcacao',
  options: {
    A: 'Eleva o centro de gravidade.',
    B: 'Mantem o centro de gravidade.',
    C: 'Aumenta o efeito da superficie livre.',
    D: 'Mantem o efeito da superficie livre.',
    E: 'Diminui o efeito da superficie livre.',
  },
  correct: 'E',
  explanation:
    'A subdivisao longitudinal reduz a largura livre do l?quido e, com isso, diminui o efeito de superficie livre sobre a estabilidade transversal. Por isso, a alternativa correta e a E.',
},
]



