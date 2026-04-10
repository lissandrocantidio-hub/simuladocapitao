import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'

const preset = getPresetByPath('/prova-marinha')

export default function ProvaMarinhaPage() {
  if (!preset) {
    return null
  }

  return <SimulatorExperience preset={preset} />
}
