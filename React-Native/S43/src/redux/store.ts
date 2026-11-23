import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slice"
import cartReducer from "./cartSlice"
import infoReducer from "./infoSlice"

 let myStore = configureStore({
    reducer :{
        counter:counterReducer,
        cart:cartReducer,
        info:infoReducer
    }
 })

 export default myStore