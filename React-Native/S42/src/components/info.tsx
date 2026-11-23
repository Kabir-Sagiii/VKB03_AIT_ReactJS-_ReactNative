import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Info() {
 const data =  useSelector((store:any)=>store.info)


  return (
    <View style={{margin:20}}>
      <Text>Information : {data}</Text>
    </View>
  )
}