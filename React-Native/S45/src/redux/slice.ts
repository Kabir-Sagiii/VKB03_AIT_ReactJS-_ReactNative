import { createSlice} from "@reduxjs/toolkit";

  const counterSlice=createSlice({
    name:"counter",

    initialState:{
        count : 0
    },

    reducers :{
       
      
        increment : (state,action)=>{ 
           state.count= state.count + action.payload
       },


       decrement : (state,action)=>{
        state.count= state.count - action.payload
       }
    }
  });
  
         //actionCreator
 export const {increment,decrement}  = counterSlice.actions

 export default  counterSlice.reducer

//   const cartSlice = createSlice({
//     name:"cart",
//     initialState:[],
//     reducers:{
//         addInCart : ()=>{},
//         removeFromCart:()=>{}
//     }
//   })


//createSlice() : Internally reduxtoolkit will create
    // 1. create action types
    // 2. action creators
    //3. reducer function 
  