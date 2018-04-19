import mongoose from 'mongoose'
const Schema = mongoose.Schema

const OrgsSchema = new Schema({
  name: String,
  type: String,
  city: String
}, { collection: 'orgs' })

const model = mongoose.model('Orgs', OrgsSchema)

export default model
