import _ from 'lodash'

function formatSearchResult ({ orgs, contacts, groups, limit = 10 }) {
  let result = {}

  result.contacts = formatContacts({contacts, limit})
  result.groups = formatGropus({groups, limit})
  result.orgs = formatOrgs({orgs, limit})

  return result
}

function formatContacts ({ contacts, limit }) {
  let result = {}
  result.info = { total: contacts.length, limit }
  contacts = _.take(contacts, limit)
  result.data = _.map(contacts, c => {
    return { full_name: c.first_name + ' ' + c.last_name, avatar: c.avatar, city: c.address.city, org_name: c.org.name }
  })
  return result
}

function formatGropus ({ groups, limit }) {
  let result = {}
  result.info = { total: groups.length, limit }
  groups = _.take(groups, limit)
  result.data = _.map(groups, g => {
    return { name: g.name,  city: g.address.city }
  })
  return result
}

function formatOrgs ({ orgs, limit }) {
  let result = {}
  result.info = { total: orgs.length, limit }
  orgs = _.take(orgs, limit)
  result.data = _.map(orgs, o => {
    return { name: o.name,  city: o.city, type: o.type }
  })
  return result
}

export default { formatSearchResult }
