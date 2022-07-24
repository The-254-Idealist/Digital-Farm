import axios from 'axios'


const API_URI = 'api/users/'

//Register User

const register = async(userData) =>{
    const response = await axios.post(API_URI, userData)


    if(response.data){
        localStorage.setItem('user', JSON.stringify(response))
    }

    return response.data
}


//login User

const login = async(userData) =>{
    const response = await axios.post(API_URI + 'login', userData)


    if(response.data){
        localStorage.setItem('user', JSON.stringify(response))
    }

    return response.data
}

//logout user
const logout = () =>{
    localStorage.removeItem('user')
}

const authService = {
    register, 
    logout,
    login,
}
export default authService