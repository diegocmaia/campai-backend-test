import _ from 'lodash'

function formatSearchResult ({ orgs, contacts, groups }) {
  let result = {}

  result.contacts = formatContacts(contacts)
  result.groups = formatGropus(groups)
  result.orgs = formatOrgs(orgs)

  return result
}

function formatContacts (contacts) {
  contacts = _.map(contacts, c => {
    return { full_name: c.first_name + ' ' + c.last_name, avatar: c.avatar, city: c.address.city, org_name: c.org.name }
  })
  return contacts
}

function formatGropus (groups) {
  groups = _.map(groups, g => {
    return { name: g.name,  city: g.address.city }
  })
  return groups
}

function formatOrgs (orgs) {
  orgs = _.map(orgs, o => {
    return { name: o.name,  city: o.city, type: o.type }
  })
  return orgs
}

export default { formatSearchResult }
