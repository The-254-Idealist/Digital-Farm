const mongoose = require ('mongoose')

const goalSchema = mongoose.Schema(
    { 
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
          },
        title: {
            type : String,
            required : [true, 'Please Add title of the product']
        },
        img:{
            type: String,
        },
        desc:{
            type: String,
            required:[ true, 'Please Add description of the product']
        },
        price :{
            type: Number,
            required: [ true , 'Please add the price of the product']
        },
        category:{
             
            type:String,
            required: [ true , 'Add the category of the product']
        }

    } , {
        timestamps: true,
    }
)
 module.exports = mongoose.model('Goal',  goalSchema)