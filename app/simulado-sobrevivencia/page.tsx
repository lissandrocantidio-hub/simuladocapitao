import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'
import { requirePremiumAccess } from '@/lib/access'

const preset = getPresetByPath('/simulado-sobrevivencia')

export default async function SimuladoSobrevivenciaPage() {
  if (!preset) {
    return null
  }

  await requirePremiumAccess('/simulado-sobrevivencia')

  return <SimulatorExperience preset={preset} />
}
