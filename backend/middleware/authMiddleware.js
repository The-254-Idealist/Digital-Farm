const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Buyer = require('../models/buyerModels')
const Admin = require('../models/adminModels')
const Seller = require('../models/sellerModels')

const protect = asyncHandler(async(req, res, next)=>{
let token
if(req.headers.authorization && 
    req.headers.authorization.startsWith('Bearer')){
    try {
        //Get token from header
        token = req.headers.authorization.split(' ')[1]

        //verify token
        const decoded = jwt.verify(token , process.env.JWT_SECRET)

        //Get user from the token
        req.user = await Buyer.findById(decoded.id).select('-password')

        next()
    } catch (error) {
        res.status(401)
        throw new Error('Not Authorized')

       
    }
    return;
}

if(!token){
    res.status(401)
    throw new Error('Not authorized. No token')
}

})

const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
      next()
    } else {
      res.status(401)
      throw new Error('Not authorized as an admin')
    } 
}



const adminProtect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.admin = await Admin.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

const sellerProtect = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.seller = await Seller.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})


module.exports = {
    protect, 
    admin,
  sellerProtect,
  adminProtect,
}