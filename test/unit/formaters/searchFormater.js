import test from 'ava'

import db from '../util/_dbConnection'
import helpers from '../../../helpers'

import contactsServices from '../../../services/contacts'
import contactGroupsServices from '../../../services/contactGroups'
import orgsServices from '../../../services/organizations'

test('Testing search\'s result formater', async t => {
  const groups = await contactGroupsServices.filterContactGroupsByInput('a')
  const contacts = await contactsServices.filterContactsByInput('a')
  const orgs = await orgsServices.filterOrgsByInput('a')

  const result = helpers.formatSearchResult({ contacts, groups, orgs, limit: 10 })

  t.notDeepEqual(result, [])
  t.is(result.contacts.info.limit, 10)
  t.true(result.contacts.data.length <= 10)

  t.is(result.orgs.info.limit, 10)
  t.true(result.orgs.data.length <= 10)

  t.is(result.groups.info.limit, 10)
  t.true(result.groups.data.length <= 10)
})
