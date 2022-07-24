import axios from 'axios'


const API_URI = '/api/v1/admins/'

//Register User

const register = async(adminData) =>{
    const response = await axios.post(API_URI, adminData)


    if(response.data){
        localStorage.setItem('admin', JSON.stringify(response))
    }

    return response.data
}


//login User

const login = async(adminData) =>{
    const response = await axios.post(API_URI + 'login', adminData)


    if(response.data){
        localStorage.setItem('admin', JSON.stringify(response))
    }

    return response.data
}

//logout admin
const logout = () =>{
    localStorage.removeItem('admin')
}

const adminService = {
    register, 
    logout,
    login,
}
export default adminService