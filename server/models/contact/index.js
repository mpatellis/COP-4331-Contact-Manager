var mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  firstName: {
    type: String,
    required: 'Enter first name'
  },
  lastName: {
    type: String,
    required: 'Enter last name'
  },
  email: {
    type: String
  },
  phone: {
    type: String,
    required: 'Enter phone number',
    unique: true
  },
  favorite: {
    type: Boolean,
    default: false
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})
contactSchema.index({ owner: 1, lastName: 1, firstName: 1 })
contactSchema.index({ owner: 1, favorite: 1, lastName: 1, firstName: 1 })

module.exports = mongoose.model('contact', contactSchema, 'contacts')
