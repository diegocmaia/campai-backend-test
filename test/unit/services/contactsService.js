import test from 'ava'
import db from '../util/_dbConnection'

import contactsServices from '../../../services/contacts'

test('Testing search\'s result', async t => {
  const result = await contactsServices.filterContactsByInput('a')
  t.notDeepEqual(result, [])
})

test('Testing empty result', async t => {
  const result = await contactsServices.filterContactsByInput('jhwer872346')
  t.deepEqual(result, [])
})
