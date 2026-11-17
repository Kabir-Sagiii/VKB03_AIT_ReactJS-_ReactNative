import { View, Text,Button, Pressable } from 'react-native'
import {router} from "expo-router"

export default function Profile() {
  return (
    <View>
      <Text style={{color:"blue",fontSize:27,padding:20}}>Profile Screen</Text>
     <Button title="Switch to Products Screen" onPress={()=>{
          router.push("/products")
     }}/>

     <Pressable onPress={()=>{router.push("/")}}>
      <View  style={{width:"30%",height:150,backgroundColor:"lightgreen"}}>
      <Text>Product Details</Text>
     </View>
     </Pressable>
    </View>
  )
}