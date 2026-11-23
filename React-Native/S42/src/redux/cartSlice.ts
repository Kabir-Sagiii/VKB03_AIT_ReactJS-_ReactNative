import { createSlice,PayloadAction } from "@reduxjs/toolkit";

   interface ICartItem {
     id:number,
     images:Array<string>,
     price:number,
     title:string,
     category:string
   }


   const cartSlice  = createSlice({
       name:"cart",
       initialState:[],
       reducers :{
          addToCart:(state:any,action:PayloadAction<ICartItem>)=>{
              state.push(action.payload)
          },

          removeFromCart:(state,action:PayloadAction<number>)=>{
            return state.filter((cart:ICartItem)=>cart.id !== action.payload)
          }
       }
   })


  export const {addToCart,removeFromCart} = cartSlice.actions

  export default cartSlice.reducer