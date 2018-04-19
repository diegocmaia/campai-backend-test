import mongoose, { SchemaTypes } from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = SchemaTypes.ObjectId

const ContactsSchema = new Schema({
  first_name: String,
  last_name: String,
  address: { city: String },
  org: { type: ObjectId, ref: 'Orgs' },
  avatar: {
    top_type: String,
    eye_type: String,
    mouth_type: String,
    skin_color: String,
    clothe_type: String,
    eyebrow_type: String,
    accessories_type: String
  }
}, { collection: 'contacts' })

const model = mongoose.model('Contacts', ContactsSchema)

export default model
