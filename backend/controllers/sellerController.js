const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Seller = require('../models/sellerModels')

// @desc    Register new seller
// @route   POST /api/users
// @access  Public
const registerSeller = asyncHandler(async (req, res) => {
  const { name, email, password, phoneNumber, idNumber, userName } = req.body

  if (!name || !email || !password || !phoneNumber || !idNumber || !userName ) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if seller exists
  const sellerExists = await Seller.findOne({ email })

  if (sellerExists) {
    res.status(400)
    throw new Error('Seller already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create seller
  const seller = await Seller.create({
    name,
    email,
    phoneNumber, 
    idNumber,
     userName ,
    password: hashedPassword,
  })

  if (seller) {
    res.status(201).json({
      _id: seller.id,
      userName : seller. userName,
      name: seller.name,
      email: seller.email,
      phoneNumber : seller.phoneNumber,
      idNumber : seller. idNumber,
      
      token: generateToken(seller._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid seller data')
  }
})

// @desc    Authenticate a seller
// @route   POST /api/users/login
// @access  Public
const loginSeller = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for seller email
  const seller = await Seller.findOne({ email })

  if (seller && (await bcrypt.compare(password, seller.password))) {
    res.json({
      _id: seller.id,
      name: seller.name,
      email: seller.email,
      token: generateToken(seller._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get seller data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.seller)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

// @desc    Get All seller data
// @route   GET /api/sellers/
// @access  Private
const getSellers = asyncHandler (
    async (req, res ) => {
  
          const sellers = await Seller.find()    
 
         res.status(200).json( sellers)
     }
 )
module.exports = {
    getSellers,
  registerSeller,
  loginSeller,
  getMe,
}
