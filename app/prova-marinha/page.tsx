import SimulatorExperience from '@/app/components/SimulatorExperience'
import { getPresetByPath } from '@/app/lib/simulations'
import { requirePremiumAccess } from '@/lib/access'

const preset = getPresetByPath('/prova-marinha')

export default async function ProvaMarinhaPage() {
  if (!preset) {
    return null
  }

  await requirePremiumAccess('/prova-marinha')

  return <SimulatorExperience preset={preset} />
}
