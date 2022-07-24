const mongoose = require('mongoose')

const sellerSchema = new  mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    userName: {
        type: String,
        required: [true, 'Please add a name'],
        unique: [ true, 'Chose another user name']
      },
      
    
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique:  [true, 'Email already registered'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please add your PhoneNumber'],
        unique: [true, 'Number already in our system'],
      },

      idNumber: {
        type: Number,
        required: [true, 'Please add your idNumber'],
        unique: [true, 'Id already in our system'],
      },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Seller', sellerSchema)