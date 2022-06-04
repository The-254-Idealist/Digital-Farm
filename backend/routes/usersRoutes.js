
const express = require ('express')
const router = express.Router()
// const bcrypt = require('bcryptjs') 
const { registerUser, loginUser, getme } = require('../controllers/usersController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get ('/', getme)



module .exports = router 


