import { Button, StyleSheet, Text, View } from "react-native";
import {router} from "expo-router"
import { useSelector, UseSelector } from "react-redux";
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
     </View>

    
  );
}


   const styles=StyleSheet.create({
      container :{color:"blue",fontSize:27,padding:10},
      subContainer:{color:"green"},

   })
