import { View, Text, Button, Alert, Pressable, Image } from 'react-native'
import {useState,useRef} from 'react'
import {CameraView,useCameraPermissions} from "expo-camera"


export default function camera() {
    const [permission,grantPermission] = useCameraPermissions()
    const [showCamera,setShowCamera] = useState(false)
    const cameraRef= useRef<CameraView>(null)
    const [imageUrl,setImageUrl] = useState<string>()

    const takePhoto = async ()=>{
         const photo  = await cameraRef.current?.takePictureAsync()
         setImageUrl(photo?.uri)
        }
  
    return (
    <View>

        {
            showCamera && <View>
            <CameraView ref={cameraRef} style={{width:"100%",height:400}}/>
           <Pressable 
           onPress={takePhoto}
             style={{
                position:'absolute',
                bottom:30,
                width:70,
                height:70,
                backgroundColor:"white",
                borderWidth:4,
                borderRadius:"50%",
                borderColor:"gray",
                alignSelf:"center"
             }}
           />
        </View>
        }

        {
            imageUrl && <View>
            <Image source={{uri:imageUrl}} style={{width:100,height:100}}/>
        </View>
        }
      
      <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-evenly"}}>
        <Button title="Open Camera" onPress={async ()=>{
              if(permission?.granted){
                setShowCamera(true)
                return
              }

             const result=  await grantPermission()
             if(result.granted){
                setShowCamera(true)
             }else{
                Alert.alert("Permisison is Denied")
             }
        }} />
        <Button title="Close Camera" onPress={()=>{
            setShowCamera(false)
        }} />
      </View>
    </View>
  )
}