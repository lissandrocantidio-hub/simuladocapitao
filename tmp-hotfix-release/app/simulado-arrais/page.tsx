import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'
import { requirePremiumAccess } from '@/lib/access'

const preset = getPresetByPath('/simulado-arrais')

export default async function SimuladoArraisPage() {
  if (!preset) {
    return null
  }

  await requirePremiumAccess('/simulado-arrais')

  return <SimulatorExperience preset={preset} />
}
