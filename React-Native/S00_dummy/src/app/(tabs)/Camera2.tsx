import { View, Text, Button,Alert,Pressable } from 'react-native'
import {useState,useRef} from 'react'
import {CameraView,useCameraPermissions} from "expo-camera"

export default function Camera2() {
    const cameraRef= useRef<CameraView | null>(null)
    const [showCameraView,setShowCameraView] = useState(false)
    const [permission,grantPermission] = useCameraPermissions()
 
    const takePhoto = async ()=>{
        await cameraRef.current?.takePictureAsync()
    }

    return (
    <View style={{flex:1}}>
         {
            showCameraView && <View style={{flex:1}}> 
                <CameraView style={{flex:1}} ref={cameraRef}/>

                <Pressable  onPress={takePhoto} style={{
      position: "absolute",
      bottom: 30,
      alignSelf: "center",
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: "white",
      borderWidth: 4,
      borderColor: "gray",
    }}/>
            </View>
         }
        <View style={{marginTop:20,margin:20,flexDirection:"row",justifyContent:"space-evenly"}}>
      <Button title="On Camera" onPress={async ()=>{
        if(permission?.granted){
        setShowCameraView(true)
      return
    }
    const result    =  await grantPermission()
        if(result.granted){
             setShowCameraView(true)
        }else {
            Alert.alert("Failed to Grant PErmission")
        }
      }}/>
       <Button title="Off Camera" onPress={()=>{
        setShowCameraView(false)
       }}/>
       </View>
    </View>
  )
}