import { Stack,Tabs } from "expo-router";
import {Feather,Ionicons,AntDesign} from "@expo/vector-icons"


export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen name={"index"} options={{title:"Home",tabBarIcon:()=><Feather name="home" size={27}  />}} />
     <Tabs.Screen name={"profile"} options={{title:"Profile",tabBarIcon:()=><Feather name="user" size={27}  />}}/>
      <Tabs.Screen name={"products"} options={{title:"Products",tabBarIcon:()=><AntDesign name="product" size={27} color="black"  />}}/>
        <Tabs.Screen name={"list"} options={{title:"RENDER"}}/>
      
  </Tabs>
}
