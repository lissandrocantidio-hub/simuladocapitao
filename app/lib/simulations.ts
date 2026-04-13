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
  astronomia: 'Navegação astronômica',
  meteorologia: 'Meteorologia',
  navegacao: 'Navegação costeira',
  'navegacao-eletronica': 'Navegação eletrônica',
  sobrevivencia: 'Sobrevivência no mar',
  comunicacoes: 'Comunicações',
  estabilidade: 'Estabilidade',
}

export const simulationPresets: SimulationPreset[] = [
  {
    href: '/simulado',
    title: 'Simulado geral',
    description:
      'Demo gratuita com 5 questões fixas para conhecer a plataforma antes da versão completa.',
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
      'Fluxo mais próximo da prova real, com cronômetro mais longo e revisão só no final.',
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
    title: 'Astronômica',
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
      'Frentes, nuvens, cartas sinóticas, ventos e leitura de cenários operacionais.',
    badge: 'Revisão rápida',
    subjects: ['meteorologia'],
    questionCount: 10,
    durationMinutes: 25,
    passRate: 0.6,
    mode: 'practice',
  },
  {
    href: '/simulado-comunicacoes',
    title: 'Comunicações',
    description:
      'GMDSS, EPIRB, SART e fundamentos operacionais das comunicações marítimas.',
    badge: 'Novo bloco',
    subjects: ['comunicacoes'],
    questionCount: 10,
    durationMinutes: 20,
    passRate: 0.6,
    mode: 'practice',
  },
  {
    href: '/simulado-sobrevivencia',
    title: 'Sobrevivência',
    description:
      'Hipotermia, abandono, balsas salva-vidas e manobras em mares tempestuosos.',
    badge: 'Treino rápido',
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
      'GM, TPC, superfície livre e noções essenciais de segurança da embarcação.',
    badge: 'Base técnica',
    subjects: ['estabilidade'],
    questionCount: 10,
    durationMinutes: 20,
    passRate: 0.6,
    mode: 'practice',
  },
]

export function getPresetByPath(pathname: string): SimulationPreset | undefined {
  return simulationPresets.find((preset) => preset.href === pathname)
}
