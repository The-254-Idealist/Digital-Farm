import axios from 'axios'

const API_URI = '/api/products/'

//create product
const createProduct = async(productData, token) =>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}` 
        }
    }
    const response = await axios.post(API_URI, productData, config)
    return response.data
}

//get  product
const getProducts = async() =>{
  
    const response = await axios.get(API_URI)
    
    return response.data
}
//Protected routes user views what he has posted (Seller)
//
const getSellerProduct = async(token) =>{
    const config = {
        headers:{
            Authorization: `Bearer ${token}` ,
        }
    }
    const response = await axios.get(API_URI + 'sellerproducts', config)
    
    return response.data
}
// Delete user product
const deleteProduct = async (productId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
      const response = await axios.delete(API_URI + productId, config)
      return response.data
  }
const goalService = {
    createProduct,
    getProducts,
    getSellerProduct,
    deleteProduct,
}
export default goalService