const mongoose = require('mongoose')

const adminSchema = new  mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    userName: {
      type: String,
      required: [true, 'Please add your username'],
      unique: [true, ' username already exists'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: [true, ' email already exists'],
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    isAdmin:{
      type:Boolean,
      default: true,
    }
  
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Admin', adminSchema)
