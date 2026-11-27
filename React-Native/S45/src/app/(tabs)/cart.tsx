import { View, Text,Image,Button,ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '@/redux/cartSlice'
export default function Cart() {
  const dispatch = useDispatch()
     const data =    useSelector((store:any)=>{
          return store.cart
        })
  return (
    <View style={{margin:20}}>
      <ScrollView>
       {
        data.map((cart:any)=>{
     return  <View key={cart.id}> 

       <Image source={{uri:cart.images[0]}} style={{width:100,height:100}} />
        <Text>{cart.title}</Text>
        <Button title="Remove Item From Cart" onPress={()=>{
                dispatch(removeFromCart(cart.id))
        }}/>
     </View>
        })
       }
       </ScrollView>
    </View>
  )
}