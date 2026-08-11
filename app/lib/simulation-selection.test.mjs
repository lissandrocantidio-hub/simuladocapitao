import test from 'node:test'
import assert from 'node:assert/strict'
import { resolveEffectivePool } from './simulation-selection.js'

test('resolveEffectivePool keeps the full pool available when priority questions are present', () => {
  const pool = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  const priorityIds = [1, 2, 3, 4]

  const resolved = resolveEffectivePool(pool, priorityIds, 3)

  assert.equal(resolved.length, 5)
  assert.deepEqual(resolved.map((question) => question.id), [1, 2, 3, 4, 5])
})
