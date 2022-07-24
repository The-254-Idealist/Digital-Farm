const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Goal = require('../models/goalsmodels')

const getGoals = asyncHandler (
   async (req, res ) => {
 
         const goals = await Goal.find()    

        res.status(200).json( goals)
    }
)
const getUserGoals = asyncHandler (
    async (req, res ) => {
    
         const goals = await Goal.find({ user: req.user.id })
         res.status(200).json( goals)

         return;
     }
 )
 



const postGoals  =  asyncHandler (
   async (req , res) =>{
        const { title,
            img,
            desc,
            price,
            category, } = req.body
       if(!req.body.title 
        || !req.body.img 
        || !req.body.desc 
        || !req.body.category
        || !req.body.price
        
        ){
           res.status(400)
           throw new Error ('Please add all fields')
       }
       
       const goal = await Goal.create({
            title,
            img,
            desc,
            price,
            category,
            user: req.user.id,
       })

       res.status(200).json(goal)
   }
)
const deleteGoals =asyncHandler ( 
   async (req , res) =>{
       
    const goal = await Goal.findById(req.params.id, req.body) 
      
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

        const user = await User.findById(req.user.id)
        //check for user
        if(!user){
            res.status(401)
            throw new Error('User not found ')

        }
        //Making sure the logged in user matches the goal User
        if(goal.user.toString() !== user.id ){
                res.status(401)
                throw new Error('User Not Authorized')
        }
        await goal.remove()

        res.status(200).json({id: req.params.id} )
     
    }

) 
const putGoals =asyncHandler (
   async (req , res) =>{

    const goal = await Goal.findById(req.params.id, req.body, { new: true,}) 
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const user = await User.findById(req.user.id)
    //check for user
    if(!user){
        res.status(401)
        throw new Error('User not found ')

    }
    //Making sure the logged in user matches the goal User
    if(goal.user.toString() !== user.id ){
            res.status(401)
            throw new Error('User Not Authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        res.status(200).json(updatedGoal)
    }
) 

module.exports= {
    getGoals,
    getUserGoals,
    postGoals,
    deleteGoals,
    putGoals,
}