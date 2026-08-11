import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'
import { requirePremiumAccess } from '@/lib/access'

const preset = getPresetByPath('/simulado-meteorologia')

export default async function SimuladoMeteorologiaPage() {
  if (!preset) {
    return null
  }

  await requirePremiumAccess('/simulado-meteorologia')

  return <SimulatorExperience preset={preset} />
}
