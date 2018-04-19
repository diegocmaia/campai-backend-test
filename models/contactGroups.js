import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ContactGroupsSchema = new Schema({
  name: String,
  address: {
    city: String
  }
}, { collection: 'contactgroups' })

const model = mongoose.model('ContactGroups', ContactGroupsSchema)

export default model
