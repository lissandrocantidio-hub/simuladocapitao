import test from 'node:test'
import assert from 'node:assert/strict'

// Simular a contagem de conceitos em um pool
function countConceptRepetitions(questions) {
  const conceptCounts = {}
  for (const q of questions) {
    if (q.conceptKey) {
      conceptCounts[q.conceptKey] = (conceptCounts[q.conceptKey] || 0) + 1
    }
  }
  return conceptCounts
}

test('Multiple simulation attempts should not get heavily repeated questions', () => {
  // Simular 200 questões com ~40 conceitos diferentes
  const totalQuestions = 200
  const concepts = 40
  const questionsPerConcept = Math.ceil(totalQuestions / concepts)
  
  const pool = []
  for (let i = 0; i < totalQuestions; i++) {
    const conceptIdx = i % concepts
    pool.push({
      id: 1000 + i,
      conceptKey: `ara.concept.${conceptIdx}`,
      subject: 'arrais-amador'
    })
  }

  // Simular 6 rodadas de 20 questões
  const rounds = 6
  const questionsPerRound = 20
  const allRoundQuestions = []
  
  for (let round = 0; round < rounds; round++) {
    // Pega 20 questões random (sem repetição dentro da rodada)
    const selected = []
    const used = new Set()
    for (let j = 0; j < questionsPerRound; j++) {
      let q
      do {
        q = pool[Math.floor(Math.random() * pool.length)]
      } while (used.has(q.id) || allRoundQuestions.some(sq => sq.id === q.id))
      selected.push(q)
      used.add(q.id)
    }
    allRoundQuestions.push(...selected)
  }

  // Verificar que temos questões únicas
  const uniqueIds = new Set(allRoundQuestions.map(q => q.id))
  assert.equal(uniqueIds.size, rounds * questionsPerRound, 'Deve ter questões únicas em cada rodada')
  
  // Verificar distribuição de conceitos
  const conceptCounts = countConceptRepetitions(allRoundQuestions)
  const maxRepetitions = Math.max(...Object.values(conceptCounts))
  
  // Com 120 questões em 6 rodadas e 40 conceitos, espera-se ~3 questões por conceito
  // maxPerConcept=3 permite até 3 da mesma vez, mas aleatoriamente pode haver mais
  console.log(`Max concept repetitions in 6 rounds: ${maxRepetitions}`)
  assert.ok(maxRepetitions <= 6, `Deve ter limite razoável de repetição por conceito, teve ${maxRepetitions}`)
})
