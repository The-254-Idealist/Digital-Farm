const express = require ('express')
const router = express.Router()
// const bcrypt = require('bcryptjs') 
const { registerSeller, loginSeller, getMe, getSellers, } = require('../controllers/sellerController')
const {  sellerProtect,  } = require('../middleware/authMiddleware')
router.post('/', registerSeller)
router.post('/login', loginSeller)
router.get ('/',sellerProtect, getMe)
router.get ('/getall', getSellers)



module .exports = router 