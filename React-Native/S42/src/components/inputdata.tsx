import { View, Text,TextInput,Button } from 'react-native'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateName } from '@/redux/infoSlice'

export default function Inputdata() {
  const [text,setText] = useState<string>()
  const dispatch = useDispatch()
  return (
    <View style={{margin:20}}>
     <TextInput placeholder='enter info' value={text} onChangeText={setText}/>
     <Button title="Update Info" onPress={()=>{
          dispatch(updateName(text))
     }}/>
    </View>
  )
}