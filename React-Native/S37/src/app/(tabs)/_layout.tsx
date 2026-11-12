import { Stack,Tabs } from "expo-router";
import {Feather,Ionicons,AntDesign} from "@expo/vector-icons"

export default function TabsLayout() {
  return (
<Tabs>
    <Tabs.Screen name={"index"} options={{title:"Home",headerShown:false,tabBarIcon:()=><Feather name="home" size={27}  />}} />
     <Tabs.Screen name={"profile"} options={{title:"Profile",headerShown:false,tabBarIcon:()=><Feather name="user" size={27}  />}}/>
      <Tabs.Screen name={"products"} options={{title:"Products",headerShown:false,tabBarIcon:()=><AntDesign name="product" size={27} color="black"  />}}/>
       
      
  </Tabs>
  )
}