import { View, Text,Image } from 'react-native'
import {useContext} from 'react'
import { ProductsContext } from '@/context/productsContext'

export default function Productdetails() {
  const data = useContext(ProductsContext)
  return (
    <View >
      <Image source={{uri:data?.state.images[0]}} style={{width:350,height:350,margin:20}}  />
      <Text style={{textAlign:'center',fontSize:24}}>{data?.state.title}</Text>
    </View>
  )
}