import { Stack,Tabs } from "expo-router";
import {Feather,Ionicons,AntDesign} from "@expo/vector-icons"
import { ProductsContext } from "@/context/productsContext";
import { useState } from "react";
import {Provider} from "react-redux"
import myStore from "@/redux/store";

export default function RootLayout() {
  const [state,setState] = useState<{id:number,images:[string],category:string,price:number,title:string}>({id:0,images:[""],category:"",price:0,title:""});

  return <Provider store={myStore}>
<ProductsContext.Provider value={{state,setState}}>
    <Stack>
    <Stack.Screen name="(tabs)"/>
     <Stack.Screen name="productdetails"/>
  </Stack>
  </ProductsContext.Provider>
  </Provider>
}
