import test from 'ava'
import db from '../util/_dbConnection'

import orgsServices from '../../../services/organizations'

test('Testing search\'s result', async t => {
  const result = await orgsServices.filterOrgsByInput('a')
  t.notDeepEqual(result, [])
})

test('Testing empty result', async t => {
  const result = await orgsServices.filterOrgsByInput('jhwer872346')
  t.deepEqual(result, [])
})
