import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import buyerService from './buyerService'
// Get User from localstorage
const buyer = JSON.parse(localStorage.getItem('buyer'))
const initialState = {
    buyer: buyer ? buyer: null,
    isError:false,
    isSuccess: false,
    isLoading: false,
    message: ''

}
//Register  buyer
export const register = createAsyncThunk('buyer/register',
 async(buyer, thunkAPI)=>{

    try {
        return await buyerService.register(buyer)
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
export const getBuyers =  createAsyncThunk('buyer/getall/getAll', async(_, thunkAPI)=>{

    try {
    
        return await buyerService.getBuyers()
        
    } catch (error) {
        const message = (error.response && 
            error.response.data &&
            error.response.data.message  ) || 
            error.message || 
            error.toString()
         return thunkAPI.rejectWithValue(message)
    }
  })
//Login  buyer
export const login = createAsyncThunk('buyer/login',
 async(buyer, thunkAPI)=>{

    try {
        return await buyerService.login(buyer)
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
export const logout = createAsyncThunk('buyer/logout',
 async()=>{
     await buyerService.logout()

})


export const buyerSlice = createSlice({
    name:'buyer',
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
            state.buyer = action.payload
        })
        .addCase(register.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.buyer = null
        })

        .addCase(login.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.buyer = action.payload
        })
        .addCase(login.rejected, (state, action) =>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.buyer = null
        })
        .addCase(getBuyers.pending, (state) =>{
            state.isLoading = true
  
          } )
         .addCase(getBuyers.fulfilled, (state, action)=>{
             state.isLoading = false
             state.isSuccess = true
             state.goals = action.payload
         })  
         .addCase(getBuyers.rejected, (state, action)=>{
          state.isLoading = false
          state.isError = true
          state.message = action.payload
      })

        .addCase(logout.fulfilled, (state) =>{
                state.buyer = null

        })
        },
     })

export const { reset } = buyerSlice.actions
export default buyerSlice.reducer 