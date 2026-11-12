import { View, Text,ScrollView } from 'react-native'
import {useState} from 'react'

export default function ListScreen() {
    const [state,setState] = useState(["rohan","ravi","sumit","priya","ajay","soman","sneha"])
  return (
    <View style={{padding:10}}>
        <ScrollView>
     {
        state.map((element,index)=>{
            return <View key={index+1} style={{width:300,height:230,margin:20}}> 
                <Text >{element}</Text>
            </View>
        })
     }
     </ScrollView>
    </View>
  )
}