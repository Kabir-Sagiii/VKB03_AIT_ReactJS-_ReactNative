import { View, Text,StyleSheet, TextInput, Button } from 'react-native'
import {useState} from 'react'
import RadioGroup from "react-native-radio-buttons-group"
import {Picker} from "@react-native-picker/picker"
import Checkbox from "expo-checkbox"
export default function Signup() {
    const [email,setEmail] = useState<string>()
     const [password,setPassword] = useState<string>()
   const [gender,setGender] = useState<string>()
  const [city,setCity] = useState();
  const [acceptTerm,setAcceptTerm]=useState<boolean>(false)
   return (
    <View style={{flex:1,alignContent:"center",margin:20}}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.heading}>Email Id</Text>
      <TextInput value={email} onChangeText={setEmail} autoCapitalize='none' keyboardType='email-address' style={styles.input} placeholder='Enter Email Id' />
   
      <Text style={styles.heading}>Password</Text>
      <TextInput value={password} onChangeText={setPassword}  style={styles.input} placeholder='Create Password' secureTextEntry={true} />
     
     <Text style={styles.heading}>Gender</Text>
      <RadioGroup selectedId={gender} onPress={setGender} 
      radioButtons={[{id:"male",value:"male",label:"Male"},{id:"female",value:"female",label:"Female"},{id:"other",value:"other",label:"Other"}]} layout='row' />

     <Text style={styles.heading}>Select City</Text>
      <View style={{borderWidth:1,borderColor:"#ccc",borderRadius:5,marginTop:5}}>
        <Picker selectedValue={city} onValueChange={setCity}>
        <Picker.Item label='Hyderabad' value="hyderabad"/>
         <Picker.Item label='Nagpur' value="nagpur"/>
          <Picker.Item label='Pune' value="pune"/>
           <Picker.Item label='Gurugram' value="gurugram"/>
      </Picker>
      </View>
    
        <View style={{flexDirection:"row",marginTop:7,marginBottom:30}}>
            
            <Checkbox value={acceptTerm} onValueChange={setAcceptTerm}/>
            <Text style={{marginLeft:7}}>Accept Terms & Condiitons</Text>
        </View>
        <Button title="Signup" onPress={()=>{
            console.log(email,password,gender,city,acceptTerm)
        }}/>
    </View>
  )
}

 const styles= StyleSheet.create({
    title:{
        fontSize:28,
        color:"green",
        textAlign:"center",
        fontWeight:"bold",
        marginTop:20,
        marginBottom:15
    },
    input:{
        borderWidth:1,
        borderColor:"#ccc",
        marginTop:5,
        padding:10,
        borderRadius:5,
        // marginBottom:20
    },
    heading:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:20
    }
 })