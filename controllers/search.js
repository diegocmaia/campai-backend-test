import _ from 'lodash'

import contactsServices from '../services/contacts'
import contactGroupsServices from '../services/contactGroups'
import organizationsServices from '../services/organizations'
import helpers from '../helpers'

export async function searchDataByInput (req, res) {
  const { text, limit } = req.query
  const promises = []
  let result = {}

  try {
    if(!_.isEmpty(text)) {
      const orgs = await organizationsServices.filterOrgsByInput(text)
      const contacts = await contactsServices.filterContactsByInput(text)
      const groups = await contactGroupsServices.filterContactGroupsByInput(text)
      result = helpers.formatSearchResult({ orgs, contacts, groups })
    }
    res.json(result)
  } catch (err) {
    console.log(err)
    res.throw(500, err)
  }
}
