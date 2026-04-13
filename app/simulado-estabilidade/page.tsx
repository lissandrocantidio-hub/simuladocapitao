import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'
import { requirePremiumAccess } from '@/lib/access'

const preset = getPresetByPath('/simulado-estabilidade')

export default async function SimuladoEstabilidadePage() {
  if (!preset) {
    return null
  }

  await requirePremiumAccess('/simulado-estabilidade')

  return <SimulatorExperience preset={preset} />
}
