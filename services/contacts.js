import Contacts from '../models/contacts'
import Organizations from '../models/organizations'

function filterContactsByInput (inputText) {
  return new Promise((resolve, reject) => {
    const regex = new RegExp(inputText, 'i')
    let result = []
    Contacts.find()
    .populate('org')
    .exec((err, contacts) => {
      if (err) reject(err)

      result = contacts.filter( c => (c.first_name.match(regex) || c.last_name.match(regex) || c.org.name.match(regex)))
      resolve(result)
    })
  })
}

export default { filterContactsByInput }
