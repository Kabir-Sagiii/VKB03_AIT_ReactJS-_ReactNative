import { Stack,Tabs } from "expo-router";

// export default function RootLayout() {
//   return <Stack >
//     <Stack.Screen name={"index"} />
//      <Stack.Screen name={"profile"} />
//       <Stack.Screen name={"products"} />
//   </Stack>;
// }

export default function RootLayout() {
  return <Tabs>
    <Tabs.Screen name={"index"} options={{title:"Home"}} />
     <Tabs.Screen name={"profile"} options={{title:"Profile"}}/>
      <Tabs.Screen name={"products"} options={{title:"Products"}}/>
  </Tabs>
}
