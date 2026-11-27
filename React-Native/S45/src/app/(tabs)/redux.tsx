// import { View, Text } from 'react-native'
// import React from 'react'
// import Actions from '@/components/actions'
// import CountValue from '@/components/countValue'
// export default function Redux() {
//   return (
//     <View style={{margin:20}}>
//         <Text style={{textAlign:"center",fontSize:24,fontWeight:"bold"}}>Redux ToolKit Concept</Text>
//        <CountValue />
//       <Actions /> 
     
//     </View>
//   )
// }

import { View, Text } from 'react-native'
import React from 'react'
import Inputdata from '@/components/inputdata'
import Info from '@/components/info'

export default function redux() {
  return (
    <View>
      <Text style={{textAlign:"center",fontSize:24,fontWeight:"bold",marginTop:10}}>Redux Toolkit Example</Text>
      <Inputdata /> 
      <Info />
    </View>
  )
}