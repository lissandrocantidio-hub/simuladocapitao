import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'

const preset = getPresetByPath('/simulado-estabilidade')

export default function SimuladoEstabilidadePage() {
  if (!preset) {
    return null
  }

  return <SimulatorExperience preset={preset} />
}
