import ContactGroups from '../models/contactGroups'

function filterContactGroupsByInput (inputText) {
  return new Promise((resolve, reject) => {
    ContactGroups.find({ name: new RegExp(inputText, 'i') })
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}

export default { filterContactGroupsByInput }
