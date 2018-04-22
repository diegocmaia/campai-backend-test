import _ from 'lodash'

import contactsServices from '../services/contacts'
import contactGroupsServices from '../services/contactGroups'
import organizationsServices from '../services/organizations'
import helpers from '../helpers'

export async function searchDataByInput (req, res) {
  const { text } = req.query
  let limit = req.query.limit || 10
  
  const promises = []
  let result = {}

  try {
    if(text && typeof text !== 'string') {
      res.status(400).send({error: 'Text should be a string'})
    } else if (limit && !_.toNumber(limit)) {
      res.status(400).send({error: 'Limit should be a number'})
    } else {
      if(!_.isEmpty(text)) {
        const orgs = await organizationsServices.filterOrgsByInput(text)
        const contacts = await contactsServices.filterContactsByInput(text)
        const groups = await contactGroupsServices.filterContactGroupsByInput(text)
        limit = _.toNumber(limit)
        result = helpers.formatSearchResult({ orgs, contacts, groups, limit })
      }
      res.json(result)
    }
  } catch (err) {
    console.log(err)
    res.status(500).send({error: err})
  }
}
