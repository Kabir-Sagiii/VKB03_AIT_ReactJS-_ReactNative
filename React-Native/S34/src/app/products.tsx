import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Products() {
  return (
    <View>
      <Text style={design.text}>Products</Text>
    </View>
  )
}

   const design  = StyleSheet.create({
    text : {
      color:"green",
      fontSize:27
    }
   })