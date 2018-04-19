import contactsServices from '../services/contacts'
import contactGroupsServices from '../services/contactGroups'
import organizationsServices from '../services/organizations'
import helpers from '../helpers'

export async function searchDataByInput (req, res) {
  const { text, limit } = req.query
  const promises = []

  // promises.push(
  //   new Promise((solve, reject) => {
  //     contactsServices.filterContactsByInput(text)
  //     .then(data = solve(data))
  //     .catch(err => reject(err))
  //   })
  // )

  // promises.push(
  //   new Promise((solve, reject) => {
  //     contactGroupsServices.filterContactGroupsByInput(text)
  //     .then(data = solve(data))
  //     .catch(err => reject(err))
  //   })
  // )

  try {
    const orgs = await organizationsServices.filterOrgsByInput(text)
    const contacts = await contactsServices.filterContactsByInput(text)
    const groups = await contactGroupsServices.filterContactGroupsByInput(text)
    const result = helpers.formatSearchResult({ orgs, contacts, groups })
    res.json(result)
  } catch (err) {
    console.log(err)
    res.throw(500, err)
  }
}
