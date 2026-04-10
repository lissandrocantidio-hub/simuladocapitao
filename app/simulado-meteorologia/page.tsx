import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'

const preset = getPresetByPath('/simulado-meteorologia')

export default function SimuladoMeteorologiaPage() {
  if (!preset) {
    return null
  }

  return <SimulatorExperience preset={preset} />
}
