import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'
import { requirePremiumAccess } from '@/lib/access'

const preset = getPresetByPath('/simulado-mestre')

export default async function SimuladoMestrePage() {
  if (!preset) {
    return null
  }

  await requirePremiumAccess('/simulado-mestre')

  return <SimulatorExperience preset={preset} />
}
