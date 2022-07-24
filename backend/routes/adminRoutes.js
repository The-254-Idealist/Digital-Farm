const express = require ('express')
const router = express.Router()
// const bcrypt = require('bcryptjs') 
const { registerAdmin, loginAdmin, getMe, getAdmins, } = require('../controllers/adminController')
const {   adminProtect } = require('../middleware/authMiddleware')
router.post('/', registerAdmin)
router.post('/login', loginAdmin)
router.get ('/',adminProtect, getMe)
router.get ('/getall', getAdmins)



module .exports = router