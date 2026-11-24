import { createSlice } from "@reduxjs/toolkit";

   const infoSlice = createSlice({
       name:"info",
       initialState:"",
       reducers :{

        updateName : (state,action)=>{
            return action.payload
        }

       }
   })

   //access actionCreators
export const {updateName} = infoSlice.actions

  //access reducer
   export default infoSlice.reducer