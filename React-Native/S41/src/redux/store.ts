import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slice"
import cartReducer from "./cartSlice"
 let myStore = configureStore({
    reducer :{
        counter:counterReducer,
        cart:cartReducer
    }
 })

 export default myStore