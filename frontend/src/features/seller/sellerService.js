import axios from 'axios'


const API_URI = '/api/sellers/'

//Register Seller

const register = async(sellerData) =>{
    const response = await axios.post(API_URI, sellerData)


    if(response.data){
        localStorage.setItem('seller', JSON.stringify(response))
    }

    return response.data
}

//Getting all sellers from backend
const getSellers = async() =>{
    const response = await axios.get(API_URI +'getall')
       return response.data
}
//Delete Seller account 
const deleteSeller = async (token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URI, config)
  
    return response.data
  }
//login Seller
const login = async(sellerData) =>{
    const response = await axios.post(API_URI + 'login', sellerData)
    if(response.data){
        localStorage.setItem('seller', JSON.stringify(response))
    }
    return response.data
}

//logout seller
const logout = () =>{
    localStorage.removeItem('seller')
}

const sellerService = {
    register,
    getSellers,
    deleteSeller,
    logout,
    login,
}
export default sellerService