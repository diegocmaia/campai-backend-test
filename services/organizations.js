import Organizations from '../models/organizations'

async function filterOrgsByInput (inputText) {
  return new Promise((resolve, reject) => {
    const regex = new RegExp(inputText, 'i')
    Organizations.find({ $or : [
      { city: regex },
      { type: regex },
      { name: regex }
    ]})
    .then(data => resolve(data))
    .catch(err => reject(err))
  })
}

export default { filterOrgsByInput }
