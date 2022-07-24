const mongoose = require('mongoose')


const buyerSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true, 
    },
    img:{
          type: String
    },
  },
  {
    timestamps: true,
  }
)


module.exports = mongoose.model('Buyer', buyerSchema)


