import axios from "axios"
export async function getAllProducts(setProducts:any){
  var res:any =  await axios.get("https://dummyjson.com/products");
  
  setProducts(res.data.products)
  
 
}