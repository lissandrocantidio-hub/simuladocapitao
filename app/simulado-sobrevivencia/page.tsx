import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'

const preset = getPresetByPath('/simulado-sobrevivencia')

export default function SimuladoSobrevivenciaPage() {
  if (!preset) {
    return null
  }

  return <SimulatorExperience preset={preset} />
}
