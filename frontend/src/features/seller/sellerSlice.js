import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import sellerService from './sellerService'
// Get User from localstorage
const seller = JSON.parse(localStorage.getItem('seller'))
const initialState = {
    seller: seller ? seller: null,
    isError:false,
    isSuccess: false,
    isLoading: false,
    message: ''

}
//Register  seller
export const register = createAsyncThunk('seller/register',
 async(seller, thunkAPI)=>{

    try {
        return await sellerService.register(seller)
    } catch (error) {
        const message = (error.response && 
                error.response.data &&
                error.response.data.message  ) || 
                error.message || 
                error.toString()
             return thunkAPI.rejectWithValue(message)
    }

})

//Getting all buyers
export const getSellers =  createAsyncThunk('seller/getall/getAll', async(_, thunkAPI)=>{

    try {
    
        return await sellerService.getSellers()
        
    } catch (error) {
        const message = (error.response && 
            error.response.data &&
            error.response.data.message  ) || 
            error.message || 
            error.toString()
         return thunkAPI.rejectWithValue(message)
    }
  })
//Login  seller
export const login = createAsyncThunk('seller/login',
 async(seller, thunkAPI)=>{

    try {
        return await sellerService.login(seller)
    } catch (error) {
        const message = (error.response && 
                error.response.data &&
                error.response.data.message  ) || 
                error.message || 
                error.toString()
             return thunkAPI.rejectWithValue(message)
    }

})

//Logout
export const logout = createAsyncThunk('seller/logout',
 async()=>{
     await sellerService.logout()

})


export const sellerSlice = createSlice({
    name:'authseller',
    initialState,
    reducers: {
        reset:(state) =>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.seller = action.payload
        })
        .addCase(register.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.seller = null
        })

        .addCase(login.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.seller = action.payload
        })
        .addCase(login.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.seller = null
        })
        .addCase(getSellers.pending, (state) =>{
            state.isLoading = true
  
          } )
         .addCase(getSellers.fulfilled, (state, action)=>{
             state.isLoading = false
             state.isSuccess = true
             state.goals = action.payload
         })  
         .addCase(getSellers.rejected, (state, action)=>{
          state.isLoading = false
          state.isError = true
          state.message = action.payload
      })

        .addCase(logout.fulfilled, (state) =>{
                state.seller = null

        })
        },
     })

export const { reset } = sellerSlice.actions
export default sellerSlice.reducer 