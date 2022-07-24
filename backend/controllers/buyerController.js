const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Buyer = require('../models/buyerModels')

// @desc    Register new buyer
// @route   POST /api/buyer
// @access  Public
const registerBuyer = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if buyer exists
  const buyerExists = await Buyer.findOne({ email })

  if (buyerExists) {
    res.status(400)
    throw new Error('Buyer already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create buyer
  const buyer = await Buyer.create({
    name,
    email,
    password: hashedPassword,
  })

  if (buyer) {
    res.status(201).json({
      _id: buyer.id,
      name: buyer.name,
      email: buyer.email,
      token: generateToken(buyer._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid buyer data')
  }
})

// @desc    Authenticate a buyer
// @route   POST /api/users/login
// @access  Public
const loginBuyer = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check for user email
  const buyer = await Buyer.findOne({ email })

  if (buyer && (await bcrypt.compare(password, buyer.password))) {
    res.json({
      _id: buyer.id,
      name: buyer.name,
      email: buyer.email,
      token: generateToken(buyer._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})


// @desc    Get buyer data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.buyer)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}
const getBuyers = asyncHandler (
    async (req, res ) => {
  
          const buyers = await Buyer.find()    
 
         res.status(200).json( buyers)
     })

module.exports = {
    getBuyers,
  registerBuyer,
  loginBuyer,
  getMe,
}
