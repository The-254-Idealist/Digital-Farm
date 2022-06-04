
const express = require ('express')
const router = express.Router()
// const bcrypt = require('bcryptjs') 
const { registerUser, loginUser, getme } = require('../controllers/usersController')
const {  protect } = require('../middleware/authMiddleware')
router.post('/', registerUser)
router.post('/login', loginUser)
router.get ('/',protect, getme)



module .exports = router 


