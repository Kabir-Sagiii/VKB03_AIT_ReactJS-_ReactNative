import { View, Text, Button, Alert, ScrollView } from 'react-native'
import {useState} from 'react'
import axios from "axios"

export default function getData() {
const [users,setUsers]=useState([])
    
//Get Request
const getUsers = async ()=>{
     const res = await axios.get("http://192.168.31.38:3000/results")
       setUsers(res.data)
    }
//Post Request
    const addUser = async ()=>{
       try {
        const res = await axios.post("http://192.168.31.38:3000/results",{"name":"Smith",age:34})
         if(res.data){
            getUsers()
         }else {
            throw Error()
         }
    }catch(error){
     console.log(error)
     Alert.alert("Something went wrong")
       }
    }

    //Put Request

    const updateUser = async ()=>{
       try {
 const res= await  axios.put("http://192.168.31.38:3000/results/3",{name:"Jack Hiils",city:"Mumbai"})
        if(res.data){
            Alert.alert("User Updated")
            getUsers()
        }else {
            throw Error()
        }

}catch(error){
     console.log(error);
     Alert.alert("Failed to Update")
       }
    

    }

    //Delete Request

    const removeUser = async (id:string)=>{
      await axios.delete(`http://192.168.31.38:3000/results/${id}`)
        alert("user removed");
        getUsers()
    }

  return (
    <View style={{margin:20}}>
      <Text style={{textAlign:"center",fontSize:24,fontWeight:"bold",marginBottom:10}}>Get Request</Text>
    <Button title='Get Data' onPress={()=>{
         getUsers()
    }}/>
        <Text></Text>
    <Button title='Add User' onPress={()=>{
         addUser()
    }}/>

      <Text></Text>
    <Button title='Update User' onPress={()=>{
         updateUser()
    }}/>

    <Text></Text>
    <Button title='Update User' onPress={()=>{
         updateUser()
    }}/>
     <Text></Text>
     <ScrollView >
        {
            users.length > 0 && users.map(({name,id})=>{
                return <View key={id} style={{marginBottom:20}}> 

                    <Text style={{textAlign:"center",fontSize:18,color:"green"}} >{name}</Text>
                    <Button title="Remove" onPress={()=>{
                        removeUser(id)
                    }} />
                </View>
            })
        }
     </ScrollView>
    </View>
  )
}