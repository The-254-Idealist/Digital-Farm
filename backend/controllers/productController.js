const asyncHandler = require('express-async-handler')
const Seller = require('../models/sellerModels')
const Product = require('../models/productModels')

const getProducts = asyncHandler (
    async (req, res) => {
        const qNew = req.query.new;
        const qCategory = req.query.category;
        try {
          let products;
      
          if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1);
          } else if (qCategory) {
            products = await Product.find({
              category: {
                $in: [qCategory],
              },
            });
          } else {
            products = await Product.find();
          }
      
          res.status(200).json(products);
        } catch (err) {
          res.status(500).json(err);
        }
      }
)
const getSellerProducts = asyncHandler (
    async (req, res ) => {
    
         const products = await Product.find({ seller: req.seller.id })
         res.status(200).json( products)

         
     }
 )
 



const postProducts  =  asyncHandler (
   async (req , res) =>{
        const { title,
            img,
            desc,
            price,
            category, } = req.body
       if(!req.body.title 
        || !req.body.img 
        || !req.body.desc 
        || !req.body.category
        || !req.body.price
        
        ){
           res.status(400)
           throw new Error ('Please add all fields')
       }
       
       const product = await Product.create({
            title,
            img,
            desc,
            price,
            category,
            seller: req.seller.id,
       })

       res.status(200).json(product)
   }
)
const deleteProducts =asyncHandler ( 
   async (req , res) =>{
       
    const product = await Product.findById(req.params.id, req.body) 
      
    if(!product){
        res.status(400)
        throw new Error('Product not found')
    }

        // const seller = await Seller.findById(req.seller.id)
        // //check for seller
        // if(!seller){
        //     res.status(401)
        //     throw new Error('Seller not found ')

        // }
        // //Making sure the logged in seller matches the product Seller
        // if(product.seller.toString() !== seller.id ){
        //         res.status(401)
        //         throw new Error('Seller Not Authorized')
        // }
        await product.remove()

        res.status(200).json({id: req.params.id} )
     
    }

) 

//editing or updating the product
const putProducts =asyncHandler (
   async (req , res) =>{

    const product = await Product.findById(req.params.id, req.body, { new: true,}) 
    if(!product){
        res.status(400)
        throw new Error('Product not found')
    }
    const seller = await Seller.findById(req.seller.id)
    //check for seller
    if(!seller){
        res.status(401)
        throw new Error('Seller not found ')

    }
    //Making sure the logged in seller matches the product Seller
    if(product.seller.toString() !== seller.id ){
            res.status(401)
            throw new Error('Seller Not Authorized')
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        res.status(200).json(updatedProduct)
    }
) 

module.exports= {
    getProducts,
    getSellerProducts,
    postProducts,
    deleteProducts,
    putProducts,
}