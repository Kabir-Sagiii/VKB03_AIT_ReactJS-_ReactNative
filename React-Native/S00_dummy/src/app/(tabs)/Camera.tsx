

import { View, Text,Button,Alert,Image } from 'react-native'
import {useRef, useState} from 'react'
import {CameraView,useCameraPermissions} from "expo-camera"

export default function NativeFeature() {
  const cameraRef = useRef<CameraView | null>(null);
  const [permission,requestPermission] =useCameraPermissions()
  const [cameraOn,setCameraOn] = useState(false)
  const [show,setShow] = useState<string>()

  const takePhoto = async ()=>{
    const photo=   await cameraRef.current?.takePictureAsync();
    console.log(photo?.uri)
    setShow(photo?.uri)
  }
  
 
  const handleCameraOn = async () => {
  // Already granted ho to seedha on
  if (permission?.granted) {
    setCameraOn(true);
    return;
  }

  const result = await requestPermission();
  if (result.granted) {
    setCameraOn(true);
  } else {
    Alert.alert("Permission denied", "Camera use karne ke liye permission chahiye");
  }
};


  return (
    <View style={{flex:1}}>
      {cameraOn && <CameraView style={{flex:1}} ref={cameraRef} />}
      {show && <Image source={{uri:show}} style={{ width: 200, height: 200 }} />}
     <View style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:"100%",margin:"auto"}}>
     { cameraOn && <Button title="Camera" onPress={takePhoto}/> }
      <Text></Text>
      <Button title="on Camera" onPress={handleCameraOn} />
        <Text></Text>
       <Button title="Off Camera" onPress={()=>{setCameraOn(false)}} />
     </View>
    </View>
  )
}