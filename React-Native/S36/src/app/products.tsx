import { View, Text,StyleSheet,Image, Button,ScrollView } from 'react-native'
// import { productsInfo } from './data/products'
import {useState,useEffect} from 'react'
import axios from "axios"
import {router} from "expo-router"
import {getAllProducts} from "./services/products"
export default function Products() {
const [products,setProducts] = useState([]);
 useEffect(()=>{
 getAllProducts(setProducts)
 },[])
  return (
    <View>
      <ScrollView>
      <View style={styles.sectionTitle}>
         <Text style={{ fontSize:24,
      fontWeight:"bold"}}>Latest Products</Text>
      </View>
      <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
     {
        products.length > 0 && products.map((product :{id:0,images:[""],category:"",price:0,title:""})=>{
         return <View key={product.id} style={styles.card}> 
             <Image source={{uri:product.images[0]}} style={{width:"100%",height:150}} />
             <Text style={{marginTop:5 ,marginBottom:5,color:"green",textAlign:"center",fontWeight:"bold",fontSize:17}}>{product.title}</Text>
             <Text style={{marginTop:5,marginBottom:5,textAlign:"center"}}>{product.category}</Text>
             <Text style={{marginTop:5,marginBottom:5,textAlign:"center"}}>$ {product.price}</Text>
             <Button title="Details" onPress={()=>{
                  router.push("/productdetails")
             }}/>
            </View>
        })
     }
     </View>
     </ScrollView>
    </View>
  )
}

 const styles = StyleSheet.create({
    card :{
        width:170,
        padding:10,
        boxShadow:"0 0 10px black",
        margin:10,
        textAlign:"center"
    },
    sectionTitle :{
      marginTop:20,
      marginBottom:3,
      marginLeft:7,
     
    }
 })