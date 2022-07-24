const express = require ('express')
const router = express.Router()
// const bcrypt = require('bcryptjs') 
const { registerBuyer, loginBuyer, getMe, getBuyers, } = require('../controllers/buyerController')
const {  protect, } = require('../middleware/authMiddleware')
router.post('/', registerBuyer)
router.post('/login', loginBuyer)
router.get ('/',protect, getMe)
router.get ('/getall', getBuyers)



module .exports = router