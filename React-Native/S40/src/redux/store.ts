import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slice"

 let myStore = configureStore({
    reducer :{
        counter:counterReducer
    }
 })

 export default myStore