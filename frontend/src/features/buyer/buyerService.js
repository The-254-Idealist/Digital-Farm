import axios from 'axios'


const API_URI = '/api/buyers/'

//Register Buyer

const register = async(buyerData) =>{
    const response = await axios.post(API_URI, buyerData)


    if(response.data){
        localStorage.setItem('buyer', JSON.stringify(response))
    }

    return response.data
}

//Getting all buyers from backend
const getBuyers = async() =>{
    const response = await axios.get(API_URI +'getall')
       return response.data
}
//Delete Buyer account 
const deleteBuyer = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URI, config)
  
    return response.data
  }
//login Buyer
const login = async(buyerData) =>{
    const response = await axios.post(API_URI + 'login', buyerData)
    if(response.data){
        localStorage.setItem('buyer', JSON.stringify(response))
    }
    return response.data
}

//logout buyer
const logout = () =>{
    localStorage.removeItem('buyer')
}

const buyerService = {
    register,
    getBuyers,
    deleteBuyer,
    logout,
    login,
}
export default buyerService