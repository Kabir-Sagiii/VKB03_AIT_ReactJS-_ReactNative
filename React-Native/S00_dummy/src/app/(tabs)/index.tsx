import { Button, StyleSheet, Text, View } from "react-native";
import {router} from "expo-router"
import { useSelector, UseSelector } from "react-redux";
import axios from "axios";
export default function Index() {
 const data =   useSelector((store:any)=>{
      return store.counter
   })
  return (
     <View >
     
       
        
      <Text style={styles.container}>Home Screen :{data.count}</Text>
      <Button title="Switch to Profile Screen" onPress={()=>{
           router.push("/profile")
      }} />
<Text></Text>
      <Button title="Get User" onPress={async ()=>{
        const res =   await  axios.delete("http://192.168.31.38:3000/results/2")
        console.log(res.data)
      }} />
     </View>

    
  );
}


   const styles=StyleSheet.create({
      container :{color:"blue",fontSize:27,padding:10},
      subContainer:{color:"green"},

   })
