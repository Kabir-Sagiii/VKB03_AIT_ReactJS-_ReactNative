import { Button, StyleSheet, Text, View } from "react-native";
import Home from "./components/home";
export default function Index() {
  return (
     <View >
      <Home />
        <Text onPress={()=>{alert("hello")}} style={styles.container}>StyleSheet Approach</Text>
        <Text style={styles.subContainer}>I am a React Native Developer</Text>
      <Text style={styles.container}>Hello Dev's</Text>
      <Button title="Explore More" onPress={()=>{
        alert("Feature's will be comming soon")
      }} />
     </View>

    //  <View >
      /* Inline CSS Approach */
      /* <Text style={{color:"red",fontSize:24,backgroundColor:"black",padding:10}}>Styling the Component</Text>
      <Button title="Search"  />
      <TextInput style={{borderWidth:3,borderColor:"black",width:"50%",margin:10}}/> */
      /* <Text>Welcome to React Native</Text>
      <Text>This is my first Experience in Mobile App Developemnt</Text>
      <Button title="Explore More" />
      <TextInput />
     <Image style={{width:'100',height:'100'}} source={{uri:'https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png'}} /> */
    /* </View> */
  );
}


   const styles=StyleSheet.create({
      container :{color:"blue"},
      subContainer:{color:"green"},

   })
