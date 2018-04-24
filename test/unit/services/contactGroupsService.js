import test from 'ava'
import db from '../util/_dbConnection'

import contactGroupsServices from '../../../services/contactGroups'

test('Testing search\'s result', async t => {
  const result = await contactGroupsServices.filterContactGroupsByInput('a')
  t.notDeepEqual(result, [])
})

test('Testing empty result', async t => {
  const result = await contactGroupsServices.filterContactGroupsByInput('jhwer872346')
  t.deepEqual(result, [])
})
