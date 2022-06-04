const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalsmodels')

const getGoals = asyncHandler (
   async (req, res ) => {
         const goals = await Goal.find()    

        res.status(200).json( goals)
    }
)

const postGoals  =  asyncHandler (
   async (req , res) =>{
       if(!req.body.text){
           res.status(400)
           throw new Error ('Please add a text field')
       }
       
       const goal = await Goal.create({
           text: req.body.text,
       })

       res.status(200).json(goal)
   }
)
const deleteGoals =asyncHandler ( 
   async (req , res) =>{
       
    const goal = await Goal.findById(req.params.id, req.body) 
      
        res.status(200).json({message : `user id ${req.params.id} deleted `})
        await Goal.findByIdAndDelete(req.params.id, req.body)
    }

) 
const putGoals =asyncHandler (
   async (req , res) =>{

    const goal = await Goal.findById(req.params.id, req.body, { new: true,}) 
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        res.status(200).json(updatedGoal)
    }
) 

module.exports= {
    getGoals,
    postGoals,
    deleteGoals,
    putGoals,
}