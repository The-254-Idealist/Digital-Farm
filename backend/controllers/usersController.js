// const jwt = requre('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//Creating a new user
const registerUser = asyncHandler(async( req, res) => {
        const { name , email, password} = req.body
        //Checking all fields are added
        if(!name || !email || !password){
            res.status(400)
            throw new Error('Please add all fields')
        }
        const userExists = await User.findOne({email})
        // checking if the user exists
        if(userExists){
            
            res.status()
            throw new Error('User is already registered')
        }
        //Hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)

        //create User
        const user = await User.create({
            name,
            email,
            password: hashedpassword,
        })

        //displaying user info
        if(user){
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,

            })
        }

        res.json(user)
    }

)
//user dettails and login

const loginUser = asyncHandler(async ( req, res) =>{
         const {email , password} = req.body
         //Check for email 
        const user = await User.findOne({email})
          
        if(user && (await bcrypt.compare(password, user.password))){
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,

        })

    }
    else {
        res.status(400)
        throw new Error('Invalid Username and password')
    }
    
})

const getme = asyncHandler( async( req, res) =>{
    res.json({message : 'User data'})
}

)

module.exports = {
    registerUser,
    loginUser,
    getme,

}