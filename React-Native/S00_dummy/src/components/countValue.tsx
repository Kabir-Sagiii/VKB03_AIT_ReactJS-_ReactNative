import { View, Text } from 'react-native'
import React from 'react'
import {useSelector} from "react-redux"

export default function CountValue() {
     const data = useSelector((store:any)=>{
        return store.counter
       })
  return (
    <View style={{boxShadow:"0 0 10px black",padding:20,margin:20}}>
      <Text style={{textAlign:"center",fontSize:21,fontWeight:"bold",color:"green"}}>Count Value is : {data.count}</Text>
    </View>
  )
}