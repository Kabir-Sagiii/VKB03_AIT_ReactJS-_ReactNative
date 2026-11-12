import { View, Text ,Button,Pressable, Alert} from 'react-native'
import {useRef} from 'react'

export default function refconcept() {
           //create the reference
           const myRef = useRef("React Native")
           //myRef = {current :dummy data }
  return (
    <View>
      <Text style={{fontSize:27,textAlign:"center",marginTop:20,color:"green"}}>useRef Concept</Text>
    
    <Pressable style={{backgroundColor:"green",width:"30%",padding:10,borderRadius:7,marginTop:20,marginHorizontal:"auto"}} 
    onPress={()=>{
           myRef.current = "React Native"
        Alert.alert("Data Assigned to its Initial Value")}}>
        <Text style={{color:"white",textAlign:"center"}}>Clear Data</Text>
    </Pressable>

    <Pressable style={{backgroundColor:"green",width:"30%",padding:10,borderRadius:7,marginTop:20,marginHorizontal:"auto"}} 
    onPress={()=>{
        //update reference
        myRef.current = "Gen AI"
        Alert.alert("Data Updated")
    }}>
        <Text style={{color:"white",textAlign:"center"}}>Update Data</Text>
    </Pressable>

     <Pressable style={{backgroundColor:"green",width:"30%",padding:10,borderRadius:7,marginTop:20,marginHorizontal:"auto"}}
      onPress={()=>{
        //access data from reference
        Alert.alert(myRef.current)}}>
        <Text style={{color:"white",textAlign:"center"}}>Display Data</Text>
    </Pressable>
    
    </View>
  )
}