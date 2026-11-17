import { View, Text,Image, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '@/redux/cartSlice'
export default function cart() {
  const dispatch = useDispatch()
  const data =   useSelector((store:any)=>{
        return store.cart
    })
    console.log(data)
  return (
    <View>
     {
        data.map((product:any)=>{
            return <View key={product.id}> 
                <Image source={{uri:product.images[0]}} style={{width:100,height:100}} />
             <Button title="remove cart" onPress={()=>{
                    dispatch(removeFromCart(product.id))
             }}/>
             <Text></Text>
            </View>
        })
     }
    </View>
  )
}