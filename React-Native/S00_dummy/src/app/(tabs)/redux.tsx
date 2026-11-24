// import { View, Text } from 'react-native'
// import React from 'react'
// import Actions from '@/components/actions'
// import CountValue from '@/components/countValue'
// export default function Redux() {
//   return (
//     <View style={{margin:20}}>
//         <Text style={{textAlign:"center",fontSize:24,fontWeight:"bold"}}>Redux ToolKit Concept</Text>
//        <CountValue />
//       <Actions /> 
     
//     </View>
//   )
// }rfn
import { View, Text, TextInput, Button } from 'react-native'
import {useState} from 'react'
import RadioGroup from "react-native-radio-buttons-group"
import {Picker} from "@react-native-picker/picker"
import CheckBox from "expo-checkbox"
export default function redux() {
  const [gender,setGender] = useState<string>()
  const [city,setcity] = useState()
  const [acceptterm,setAcceptTerm] = useState<boolean>(false)
  return (
    <View style={{margin:20}}>

      <Text style={{marginBottom:20,fontSize:24,fontWeight:"bold",textAlign:'center'}}>
        Signup</Text>


      <Text>Email</Text>
      <TextInput style={{borderWidth:1,borderBlockColor:"#ccc",padding:10,marginTop:5,
        marginBottom:15,borderRadius:5}} placeholder='Email Id' 
        keyboardType='email-address' autoCapitalize='none' />

       <Text>Password</Text>
      <TextInput style={{borderWidth:1,borderBlockColor:"#ccc",
        padding:10,marginTop:5,marginBottom:15,borderRadius:5}} 
        placeholder='Password' secureTextEntry={true} />
    
    <Text>Gender</Text>
    <RadioGroup selectedId={gender} onPress={setGender} layout='row' 
    radioButtons={[{id:"male",value:"male",label:"Male"},{id:"female",
    value:"female",label:"Female"}]} />
    
     <Text>Select Country</Text>
    <View style={{borderWidth:1,borderBlockColor:"#ccc",marginTop:5,marginBottom:15}}>
   
   <Picker  selectedValue={city} onValueChange={setcity}>
    <Picker.Item label='Hyderabad' value={"hyderabad"} />
    <Picker.Item label='Pune' value={"pune"} />
    <Picker.Item label='Mumbai' value={"mumbai"} />
   </Picker>
   </View>


  <View style={{ flexDirection: "row", alignItems: "center" }}>
  <CheckBox
    value={acceptterm}
    onValueChange={setAcceptTerm}
  />
  <Text style={{marginLeft:5}}>Accept Terms and Conditions</Text>
</View>

<Text></Text>
<Button title='Signup'/>
    </View>
  )
}