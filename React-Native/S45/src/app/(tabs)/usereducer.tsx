import { View, Text,Button } from 'react-native'
import {useReducer} from 'react'

const countReducer = (state:any,action:any)=>{
      if(action.type==="inc"){
    return state + action.count}
    else if(action.type==="dec"){
        return state - action.count
    }else {
        return 0
    }
}

export default function usereducer() {
            const [state,dispatch]  = useReducer(countReducer,0)
  return (
    <View style={{margin:10}}>
      <Text 
      style={{textAlign:"center",fontSize:24,fontWeight:"bold",marginBottom:10}}>
        Count Value : {state}
        </Text>
      <Button title="Inc Count By 1" onPress={()=>{
        dispatch({type:"inc",count:1})
      }}/>
        <Text></Text>
         <Button title="Inc Count by 5" onPress={()=>{
        dispatch({type:"inc",count:5})
      }}/>
      <Text></Text>
       <Button title="Dec Count By 1" onPress={()=>{
        dispatch({type:"dec",count:1})
      }}/>
      <Text></Text>
       <Button title="Dec Count by 3" onPress={()=>{
        dispatch({type:"dec",count:3})
      }}/>

      <Text></Text>
       <Button title="Reset Value" onPress={()=>{
        dispatch({type:"reset"})
      }}/>
    </View>
  )
}