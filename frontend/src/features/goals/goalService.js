import axios from 'axios'


const API_URI = 'api/goals/'

//create goal

const createGoal = async(goalData, token) =>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}` 
        }
    }
    const response = await axios.post(API_URI, goalData, config)

    return response.data
}
//get  goal

const getGoal = async() =>{
  
    const response = await axios.get(API_URI)
    
    return response.data
}
//Protected routes user views what he has posted (Seller)
//
const getUserGoal = async(token) =>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}` ,
        }
    }
    const response = await axios.get(API_URI + 'usergoals', config)
    
    return response.data
}
// Delete user goal
const deleteGoal = async (goalId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URI + goalId, config)
  
    return response.data
  }




const goalService = {
    createGoal,
    getGoal,
    getUserGoal,
    deleteGoal,
    
}
export default goalService