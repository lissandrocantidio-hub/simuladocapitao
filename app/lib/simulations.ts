export type SimulationPreset = {
  href: string
  title: string
  description: string
  badge: string
  certification: string
  subjects: string[]
  questionCount: number
  durationMinutes: number
  passRate: number
  mode: 'practice' | 'exam'
  fixedQuestionIds?: number[]
  priorityQuestionIds?: number[]
}

export const subjectLabels: Record<string, string> = {
  astronomia: 'Navegação astronômica',
  meteorologia: 'Meteorologia',
  navegacao: 'Navegação costeira',
  'navegacao-eletronica': 'Navegação eletrônica',
  sobrevivencia: 'Sobrevivência no mar',
  comunicacoes: 'Comunicações',
  estabilidade: 'Estabilidade',
  'capitao-amador': 'Capitão-Amador',
  'arrais-amador': 'Arrais-Amador',
  'mestre-amador': 'Mestre-Amador',
}

export const simulationPresets: SimulationPreset[] = [
  {
    href: '/simulado',
    title: 'Demo Capitão-Amador',
    description:
      'Teste grátis com 5 questões para conhecer a plataforma antes de desbloquear o acesso completo.',
    badge: 'Demo gratuita',
    certification: 'Capitão-Amador',
    subjects: [
      'astronomia',
      'meteorologia',
      'navegacao',
      'navegacao-eletronica',
      'sobrevivencia',
      'comunicacoes',
      'estabilidade',
      'capitao-amador',
    ],
    questionCount: 5,
    durationMinutes: 15,
    passRate: 0.6,
    mode: 'practice',
    fixedQuestionIds: [2020107, 3001, 2022007, 2022036, 2022020],
  },
  {
    href: '/prova-marinha',
    title: 'Simulado Capitão-Amador',
    description:
      'Simulado completo com cronômetro mais longo e revisão só no final, no estilo da prova real.',
    badge: 'Capitão-Amador',
    certification: 'Capitão-Amador',
    subjects: [
      'astronomia',
      'meteorologia',
      'navegacao',
      'navegacao-eletronica',
      'sobrevivencia',
      'comunicacoes',
      'estabilidade',
      'capitao-amador',
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
      'Treine passagem meridiana, sextante, altura verdadeira, latitude e longitude.',
    badge: 'Treino focado',
    certification: 'Capitão-Amador',
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
      'Revise frentes, nuvens, cartas sinóticas, ventos e leitura de cenários operacionais.',
    badge: 'Treino rápido',
    certification: 'Capitão-Amador',
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
      'Treine GMDSS, EPIRB, SART e fundamentos das comunicações marítimas.',
    badge: 'Treino rápido',
    certification: 'Capitão-Amador',
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
      'Revise hipotermia, abandono, balsas salva-vidas e manobras em mares tempestuosos.',
    badge: 'Treino rápido',
    certification: 'Capitão-Amador',
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
      'Treine GM, TPC, superfície livre e noções essenciais de segurança da embarcação.',
    badge: 'Treino técnico',
    certification: 'Capitão-Amador',
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
      'Treine termos náuticos, manobras, RIPEAM, balizamento, VHF e segurança de navegação.',
    badge: 'Simulado premium',
    certification: 'Arrais-Amador',
    subjects: ['arrais-amador'],
    questionCount: 20,
    durationMinutes: 40,
    passRate: 0.5,
    mode: 'practice',
    priorityQuestionIds: [
      7201, 7202, 7204, 7206, 7207,
      7208, 7209, 7211, 7212, 7214,
      7215, 7216, 7218, 7219, 7220,
      7222, 7223, 7224, 7225, 7228,
      7229, 7231, 7232, 7235,
      7237, 7238, 7240, 7241,
      7243, 7246, 7249,
      7250, 7253, 7254,
      7257, 7258,
      7264, 7265,
      7271, 7274,
    ],
  },
  {
    href: '/simulado-mestre',
    title: 'Mestre-Amador',
    description:
      'Treine navegação costeira, meteorologia, manobras, RIPEAM, equipamentos e segurança.',
    badge: 'Simulado premium',
    certification: 'Mestre-Amador',
    subjects: ['mestre-amador'],
    questionCount: 20,
    durationMinutes: 45,
    passRate: 0.5,
    mode: 'practice',
  },
]

export function getPresetByPath(pathname: string): SimulationPreset | undefined {
  return simulationPresets.find((preset) => preset.href === pathname)
}

export function getCheckoutProductByPath(pathname: string | null | undefined) {
  const preset = pathname ? getPresetByPath(pathname) : undefined

  if (!preset) {
    return {
      title: 'Acesso completo aos simulados premium',
      description: 'Acesso premium completo por 90 dias mediante pagamento aprovado.',
      audienceLabel: 'aluno',
      focusLabel: 'simulados premium',
    }
  }

  if (preset.href === '/simulado-arrais') {
    return {
      title: 'Acesso Simulado Arrais-Amador',
      description:
        'Acesso premium ao banco de Arrais-Amador por 90 dias, com foco em manobras, RIPEAM, balizamento, VHF e seguranca.',
      audienceLabel: 'futuro Arrais-Amador',
      focusLabel: 'simulado de Arrais-Amador',
    }
  }

  if (preset.href === '/simulado-mestre') {
    return {
      title: 'Acesso Simulado Mestre-Amador',
      description:
        'Acesso premium ao banco de Mestre-Amador por 90 dias, com foco em navegacao costeira, meteorologia, manobras e seguranca.',
      audienceLabel: 'futuro Mestre-Amador',
      focusLabel: 'simulado de Mestre-Amador',
    }
  }

  return {
    title: `Acesso ${preset.title}`,
    description: `Acesso premium ao ${preset.title.toLowerCase()} por 90 dias mediante pagamento aprovado.`,
    audienceLabel: 'aluno',
    focusLabel: preset.title.toLowerCase(),
  }
}
