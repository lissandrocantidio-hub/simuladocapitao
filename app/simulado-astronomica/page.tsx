import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'
import { requirePremiumAccess } from '@/lib/access'

const preset = getPresetByPath('/simulado-astronomica')

export default async function SimuladoAstronomicaPage() {
  if (!preset) {
    return null
  }

  await requirePremiumAccess('/simulado-astronomica')

  return <SimulatorExperience preset={preset} />
}
