import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'

const preset = getPresetByPath('/simulado-comunicacoes')

export default function SimuladoComunicacoesPage() {
  if (!preset) {
    return null
  }

  return <SimulatorExperience preset={preset} />
}
