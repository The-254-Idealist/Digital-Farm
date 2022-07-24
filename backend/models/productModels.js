const mongoose = require ('mongoose')

const productSchema = mongoose.Schema(
    { 
        // seller: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     required: true,
        //     ref: 'Seller',
        //   },
        title: {
            type : String,
            required : [true, 'Please Add title of the product']
        },
        img:{
            type: String,
            required: true,
        },
        desc:{
            type: String,
            required:[ true, 'Please Add description of the product']
        },
        price :{
            type: Number,
            required: [ true , 'Please add the price of the product']
        },
        categories:{
             
            type:Array,
            required: [ true , 'Add the category of the product']
        }

    } , {
        timestamps: true,
    }
)
 module.exports = mongoose.model('Product',  productSchema)