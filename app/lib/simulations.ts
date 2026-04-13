export type SimulationPreset = {
  href: string
  title: string
  description: string
  badge: string
  subjects: string[]
  questionCount: number
  durationMinutes: number
  passRate: number
  mode: 'practice' | 'exam'
  fixedQuestionIds?: number[]
}

export const subjectLabels: Record<string, string> = {
  astronomia: 'Navegacao astronomica',
  meteorologia: 'Meteorologia',
  navegacao: 'Navegacao costeira',
  'navegacao-eletronica': 'Navegacao eletronica',
  sobrevivencia: 'Sobrevivencia no mar',
  comunicacoes: 'Comunicacoes',
  estabilidade: 'Estabilidade',
  'arrais-amador': 'Arrais-Amador',
}

export const simulationPresets: SimulationPreset[] = [
  {
    href: '/simulado',
    title: 'Simulado geral',
    description:
      'Demo gratuita com 5 questoes fixas para conhecer a plataforma antes da versao completa.',
    badge: 'Mais procurado',
    subjects: [
      'astronomia',
      'meteorologia',
      'navegacao',
      'navegacao-eletronica',
      'sobrevivencia',
      'comunicacoes',
      'estabilidade',
    ],
    questionCount: 5,
    durationMinutes: 15,
    passRate: 0.6,
    mode: 'practice',
    fixedQuestionIds: [2020107, 3001, 2022007, 2022036, 2022020],
  },
  {
    href: '/prova-marinha',
    title: 'Prova estilo Marinha',
    description:
      'Fluxo mais proximo da prova real, com cronometro mais longo e revisao so no final.',
    badge: 'Modo prova',
    subjects: [
      'astronomia',
      'meteorologia',
      'navegacao',
      'navegacao-eletronica',
      'sobrevivencia',
      'comunicacoes',
      'estabilidade',
    ],
    questionCount: 20,
    durationMinutes: 60,
    passRate: 0.5,
    mode: 'exam',
  },
  {
    href: '/simulado-astronomica',
    title: 'Astronomica',
    description:
      'Passagem meridiana, sextante, altura verdadeira, latitude e longitude.',
    badge: 'Foco total',
    subjects: ['astronomia'],
    questionCount: 10,
    durationMinutes: 30,
    passRate: 0.6,
    mode: 'practice',
  },
  {
    href: '/simulado-meteorologia',
    title: 'Meteorologia',
    description:
      'Frentes, nuvens, cartas sinoticas, ventos e leitura de cenarios operacionais.',
    badge: 'Revisao rapida',
    subjects: ['meteorologia'],
    questionCount: 10,
    durationMinutes: 25,
    passRate: 0.6,
    mode: 'practice',
  },
  {
    href: '/simulado-comunicacoes',
    title: 'Comunicacoes',
    description:
      'GMDSS, EPIRB, SART e fundamentos operacionais das comunicacoes maritimas.',
    badge: 'Novo bloco',
    subjects: ['comunicacoes'],
    questionCount: 10,
    durationMinutes: 20,
    passRate: 0.6,
    mode: 'practice',
  },
  {
    href: '/simulado-sobrevivencia',
    title: 'Sobrevivencia',
    description:
      'Hipotermia, abandono, balsas salva-vidas e manobras em mares tempestuosos.',
    badge: 'Treino rapido',
    subjects: ['sobrevivencia'],
    questionCount: 10,
    durationMinutes: 20,
    passRate: 0.6,
    mode: 'practice',
  },
  {
    href: '/simulado-estabilidade',
    title: 'Estabilidade',
    description:
      'GM, TPC, superficie livre e nocoes essenciais de seguranca da embarcacao.',
    badge: 'Base tecnica',
    subjects: ['estabilidade'],
    questionCount: 10,
    durationMinutes: 20,
    passRate: 0.6,
    mode: 'practice',
  },
  {
    href: '/simulado-arrais',
    title: 'Arrais-Amador',
    description:
      'Termos nauticos, marinharia, fundeio, Ripeam, balizamento, VHF e seguranca para a prova de Arrais-Amador.',
    badge: 'Nova prova',
    subjects: ['arrais-amador'],
    questionCount: 20,
    durationMinutes: 40,
    passRate: 0.5,
    mode: 'practice',
  },
]

export function getPresetByPath(pathname: string): SimulationPreset | undefined {
  return simulationPresets.find((preset) => preset.href === pathname)
}
