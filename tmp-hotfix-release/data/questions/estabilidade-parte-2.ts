import { Question } from '../../types/questions'

export const estabilidadeQuestionsPart2: Question[] = [
  {
    id: 2104201,
    subject: 'estabilidade',
    topic: 'peso alto / centro de gravidade',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'Ao embarcar peso consideravel em ponto alto da embarcacao, a tendencia inicial e:',
    options: {
      A: 'Baixar o centro de gravidade e aumentar a estabilidade',
      B: 'Elevar o centro de gravidade e reduzir a estabilidade inicial',
      C: 'Eliminar totalmente o balanco lateral',
      D: 'Aumentar automaticamente o franco-bordo',
      E: 'Impedir qualquer possibilidade de banda',
    },
    correct: 'B',
    explanation:
      'Peso embarcado em ponto alto eleva o centro de gravidade e tende a reduzir a estabilidade inicial da embarcacao.',
  },
  {
    id: 2104202,
    subject: 'estabilidade',
    topic: 'peso baixo / estabilidade',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'A colocacao de pesos baixos e bem distribuídos na embarcacao tende a:',
    options: {
      A: 'Elevar o centro de gravidade',
      B: 'Aumentar a estabilidade inicial',
      C: 'Provocar alagamento por si so',
      D: 'Anular o efeito do vento lateral',
      E: 'Eliminar o trim permanentemente',
    },
    correct: 'B',
    explanation:
      'Pesos baixos ajudam a baixar o centro de gravidade, favorecendo a estabilidade inicial.',
  },
  {
    id: 2104203,
    subject: 'estabilidade',
    topic: 'GM positivo',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'Quando a altura metacentrica transversal (GM) e positiva, significa que a embarcacao:',
    options: {
      A: 'Nao possui qualquer estabilidade',
      B: 'Tende a retornar a posicao de equilibrio apos pequena inclinacao',
      C: 'Esta necessariamente pronta para emborcar',
      D: 'Apresenta apenas trim pela proa',
      E: 'Perdeu todo o franco-bordo',
    },
    correct: 'B',
    explanation:
      'GM positiva indica estabilidade inicial positiva, com tendencia de retorno apos pequena adernacao.',
  },
  {
    id: 2104204,
    subject: 'estabilidade',
    topic: 'superficie livre / tanque parcial',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'Tanques parcialmente cheios podem prejudicar a estabilidade porque:',
    options: {
      A: 'A superficie livre desloca l?quido para o bordo mais baixo',
      B: 'Reduzem sempre o calado medio',
      C: 'Impedem o movimento de carga seca',
      D: 'Eliminam a banda produzida por vento',
      E: 'Aumentam obrigatoriamente o franco-bordo',
    },
    correct: 'A',
    explanation:
      'O efeito de superficie livre desloca l?quido para o bordo mais baixo e reduz a estabilidade da embarcacao.',
  },
  {
    id: 2104205,
    subject: 'estabilidade',
    topic: 'banda / correcao',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'Se uma embarcacao apresenta banda por distribuicao desigual de peso, a correcao adequada e:',
    options: {
      A: 'Aumentar a velocidade para compensar',
      B: 'Redistribuir pesos de forma segura e equilibrada',
      C: 'Desligar equipamentos eletricos',
      D: 'Alterar apenas o rumo',
      E: 'Reduzir o franco-bordo do bordo mais alto',
    },
    correct: 'B',
    explanation:
      'A banda causada por peso mal distribuido deve ser corrigida com redistribuicao segura da carga ou dos passageiros.',
  },
  {
    id: 2104206,
    subject: 'estabilidade',
    topic: 'franco-bordo / seguranca',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'A reducao excessiva do franco-bordo traz, entre outros, o risco de:',
    options: {
      A: 'Maior entrada de agua embarcada',
      B: 'Melhorar automaticamente a navegacao em mar grosso',
      C: 'Reduzir o peso total da embarcacao',
      D: 'Eliminar a acao do vento no costado',
      E: 'Impedir o embarque de mar pela popa',
    },
    correct: 'A',
    explanation:
      'Menor franco-bordo deixa o convés mais exposto ao embarque de agua e reduz margem de seguranca.',
  },
  {
    id: 2104207,
    subject: 'estabilidade',
    topic: 'movimento de carga',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'Carga mal peada que se desloca com o balanco pode:',
    options: {
      A: 'Melhorar a estabilidade pelo efeito dinamico',
      B: 'Produzir banda acentuada e situacao perigosa',
      C: 'Reduzir o consumo de combustivel',
      D: 'Corrigir automaticamente o trim',
      E: 'Aumentar a velocidade maxima',
    },
    correct: 'B',
    explanation:
      'Deslocamento de carga altera rapidamente o centro de gravidade e pode provocar banda perigosa ou perda de estabilidade.',
  },
  {
    id: 2104208,
    subject: 'estabilidade',
    topic: 'alagamento / compartimento',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'O alagamento de um compartimento pode comprometer a estabilidade principalmente por:',
    options: {
      A: 'Aumentar o efeito de superficie livre e o peso embarcado',
      B: 'Reduzir a massa total da embarcacao',
      C: 'Melhorar o franco-bordo',
      D: 'Diminuir a acao do mar sobre o casco',
      E: 'Neutralizar o movimento das ondas',
    },
    correct: 'A',
    explanation:
      'Agua embarcada aumenta peso, reduz reserva de flutuacao e pode gerar efeito de superficie livre, prejudicando a estabilidade.',
  },
  {
    id: 2104209,
    subject: 'estabilidade',
    topic: 'balanco rapido ou lento',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'Uma embarcacao muito dura, com GM excessivamente grande, tende a apresentar:',
    options: {
      A: 'Balanco lento e suave',
      B: 'Balanco rapido e desconfortavel',
      C: 'Ausencia total de rolamento',
      D: 'Maior superficie livre nos tanques',
      E: 'Calado nulo na popa',
    },
    correct: 'B',
    explanation:
      'GM muito grande torna a embarcacao dura, com rolamentos mais rapidos e secos, o que reduz o conforto e pode afetar a seguranca.',
  },
  {
    id: 2104210,
    subject: 'estabilidade',
    topic: 'planejamento de carga',
    year: 2025,
    exam: 'Simulado Estabilidade',
    verified: true,
    statement:
      'No planejamento de carga para pequena embarcacao de esporte e recreio, e recomendavel:',
    options: {
      A: 'Concentrar todo o material no ponto mais alto disponivel',
      B: 'Distribuir pesos com criterio, evitando concentracoes excessivas',
      C: 'Ignorar o numero de pessoas a bordo',
      D: 'Compensar a carga com velocidade maior',
      E: 'Manter tanques sempre parcialmente cheios para estabilizar',
    },
    correct: 'B',
    explanation:
      'A distribuicao criteriosa dos pesos contribui para trim adequado, menor banda e melhor estabilidade durante a navegacao.',
  },
]
