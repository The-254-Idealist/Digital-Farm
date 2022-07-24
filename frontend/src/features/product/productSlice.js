import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import productService from './productService'

const initialState ={
    products:[],
    isError:false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//create new product
export const createProduct = createAsyncThunk('products/create',
 async( productData, thunkAPI)=>{

    try {
        const token = thunkAPI.getState().authseller.seller.token
        return await productService.createProduct(productData, token)
       
    } catch (error) {
        const message = (error.response && 
                error.response.data &&
                error.response.data.message  ) || 
                error.message || 
                error.toString()
             return thunkAPI.rejectWithValue(message)
    }

})

//get seller products
export const getSellerProduct =  createAsyncThunk('products/sellerproducts/getAll', async(_, thunkAPI)=>{

    try {
      const token = thunkAPI.getState().authseller.seller.token
      return await productService.getSellerProduct(token)
        
    } catch (error) {
        const message = (error.response && 
            error.response.data &&
            error.response.data.message  ) || 
            error.message || 
            error.toString()
         return thunkAPI.rejectWithValue(message)
    }
})
export const getProducts =  createAsyncThunk('products/getAll', async(_, thunkAPI)=>{

  try {
  
      return await productService.getProducts()
      
  } catch (error) {
      const message = (error.response && 
          error.response.data &&
          error.response.data.message  ) || 
          error.message || 
          error.toString()
       return thunkAPI.rejectWithValue(message)
  }
})
// Delete seller product
export const deleteProduct = createAsyncThunk(
    'products/delete',
    async (id, thunkAPI) => {
      try {
        const token = thunkAPI.getState().authseller.seller.token
        return await productService.deleteProduct(id, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )


export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers: {
        reset:(state) => initialState
    },
    extraReducers : (builder) => {
        builder
          .addCase(createProduct.pending, (state) =>{
              state.isLoading = true

            } )
           .addCase(createProduct.fulfilled, (state, action)=>{
               state.isLoading = false
               state.isSuccess = true
               state.products.push(action.payload)
            })  
           .addCase(createProduct.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            })   
              .addCase(getSellerProduct.pending, (state) =>{
              state.isLoading = true

            } )
           .addCase(getSellerProduct.fulfilled, (state, action)=>{
               state.isLoading = false
               state.isSuccess = true
               state.products = action.payload
           })  
           .addCase(getSellerProduct.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        }) 
        .addCase(getProducts.pending, (state) =>{
          state.isLoading = true

        } )
       .addCase(getProducts.fulfilled, (state, action)=>{
           state.isLoading = false
           state.isSuccess = true
           state.products = action.payload
       })  
       .addCase(getProducts.rejected, (state, action)=>{
        state.isLoading = false
        state.isError = true
        state.message = action.payload
    })

        

        .addCase(deleteProduct.pending, (state) => {
            state.isLoading = true
          })
          .addCase(deleteProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.products = state.products.filter(
              (product) => product._id !== action.payload.id
            )
          })
          .addCase(deleteProduct.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
    }
    
})
export const { reset } = productSlice.actions
export default productSlice.reducer