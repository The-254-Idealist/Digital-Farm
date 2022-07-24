import { configureStore } from '@reduxjs/toolkit';
import  authReducer  from '../features/auth/authSlice'; 
import  productReducer from '../features/product/productSlice'
import  adminReducer from '../features/admin/adminSlice'
import  buyerReducer from '../features/buyer/buyerSlice'
import  goalReducer from '../features/goals/goalSlice'
import  sellerReducer from '../features/seller/sellerSlice'
import cartReducer from '../features/cartRedux';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    authseller: sellerReducer,
    product: productReducer,
    authadmin: adminReducer,
    authbuyer: buyerReducer,
    cart: cartReducer,
    
  },
});
