import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'

const preset = getPresetByPath('/simulado')

export default function SimuladoPage() {
  if (!preset) {
    return null
  }

  return <SimulatorExperience preset={preset} />
}
