import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'

const preset = getPresetByPath('/simulado-astronomica')

export default function SimuladoAstronomicaPage() {
  if (!preset) {
    return null
  }

  return <SimulatorExperience preset={preset} />
}
