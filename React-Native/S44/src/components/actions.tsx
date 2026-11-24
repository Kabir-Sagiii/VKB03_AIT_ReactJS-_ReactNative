import { View, Text,Button } from 'react-native'
import React from 'react'
import { increment,decrement } from '@/redux/slice'
import {useDispatch} from "react-redux"

export default function Actions() {
  const dispatch  =  useDispatch()
  return (
    <View style={{margin:20}}>
      <Button title="inc Count" onPress={()=>{
        dispatch(increment(10)) 
      }}/>
      <Text></Text>
       <Button title="dec Count" onPress={()=>{
         dispatch(decrement(5))
       }}/>
    </View>
  )
}