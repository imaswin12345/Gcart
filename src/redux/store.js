import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./wishlistSlice";
import addtoCartSlice from "./addtoCartSlice";


const store = configureStore({
    reducer:{
       wishlistReducer: wishlistSlice,
       cartReducer : addtoCartSlice
       
    }
})

export default store