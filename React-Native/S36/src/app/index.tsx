import { Button, StyleSheet, Text, View } from "react-native";
import {router} from "expo-router"
export default function Index() {
  return (
     <View >
     
       
        
      <Text style={styles.container}>Home Screen</Text>
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
