import { StyleSheet, Text, View } from 'react-native'


export default function Home() {
  return (
    <View>
      <Text style={design.text}>home</Text>
    </View>
  )
}

  const design = StyleSheet.create({
    text:{color:"red",fontSize:27,fontWeight:'bold'}
  })