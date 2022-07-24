const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModels')

// @desc    Register new admin
// @route   POST /api/admin
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password , userName } = req.body

  if (!name || !email || !password || !userName ) {
    res.status(400)
    throw new Error('Please add all fields')
  }

  // Check if admin exists
  const adminExists = await Admin.findOne({ email } || { userName})

  if (adminExists) {
    res.status(400)
    throw new Error('Admin already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create admin
  const admin = await Admin.create({
    name,
    userName,
    email,
    password: hashedPassword,
  })

  if (admin) {
    res.status(201).json({
      _id: admin.id,
      userName: admin.userName,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid Admin data')
  }
})

// @desc    Authenticate a Admin
// @route   POST /api/users/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { email , userName , password } = req.body

  // Check for Admin email or userName
  const admin = await Admin.findOne({ email } || { userName})

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin.id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

// @desc    Get Admin data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.admin)
})

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

// @desc    Get Admin data
// @route   GET /api/users/me
// @access  Private
const getAdmins = asyncHandler (
  async (req, res ) => {

        const admins = await Admin.find()    

       res.status(200).json( admins)
   })

module.exports = {
  getAdmins,
  registerAdmin,
  loginAdmin,
  getMe,
}
