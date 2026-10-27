import React, { useState,useEffect } from 'react'
import Navbar from '../nav-bar/Navbar'
import Categories from '../categories/Categories'
import Product from '../product/Product'
import axios from "axios"

function Products() {
  const [categories,setCategories] = useState([{
    image:"https://biogharlb.com/cdn/shop/collections/all_products.png?v=1732737232",
    title:"ALL"
  },
    {image:"https://img.freepik.com/premium-photo/illustration-ultra-realistic-4k-image-modern-electronic-device_756405-53536.jpg",
    title:"Electronics"},
    {image:"https://tse4.mm.bing.net/th/id/OIP.LI7ohUTG5GFEsgoMdhhZ9wHaEK?r=0&pid=Api&h=220&P=0",
    title:"Mens"},
    {image:"https://wallpapercave.com/wp/wp6130531.jpg",
    title:"Womens"},
    {image:"https://static.vecteezy.com/system/resources/previews/027/110/333/non_2x/fashion-model-kids-free-photo.jpg",
    title:"Kids"},
    {image:"https://www.thornior.com/content/images/2023/11/Screenshot-2023-11-23-at-17.20.53.png",
    title:"Furniture"},
    {
      image:"https://png.pngtree.com/background/20230612/original/pngtree-various-makeup-products-lie-on-a-table-on-dark-picture-image_3185889.jpg",
      title:"cosmetics"}])

      const [products,setProducts] = useState([])

 useEffect(()=>{
  getProducts()
 },[])
      // get request
      const getProducts = async ()=>{
      try {
const response = await axios.get("https://dummyjson.com/products")
        if(response){
console.log(response.data.products)
      setProducts(response.data.products)
        }else {
          throw Error("failed to access the data")
        }
      
      }catch(error){
        console.log(error)
      }
    }

  return (
    <div>
       

        <section className='h-[500px] shadow-xl border-2 w-[90%] my-20 mx-auto'>
            <img src="https://img.freepik.com/premium-photo/collection-electronic-devices-black-background-generative-ai_893571-1990.jpg?w=740" className='w-full h-full' alt="" />
        </section>

        <section className='w-[90%] m-auto flex justify-evenly'>
           {
              categories.map(function(element,index){

                return <Categories key={index+1} image={element.image} title={element.title}/>
              })
           }
        </section>

        {/* <button onClick={getProducts} className='mx-30 my-20 px-3 py-3 bg-black text-white rounded-md'>Get PRoducts</button> */}

        <section className='w-[90%] m-auto flex gap-2 flex-wrap justify-evenly my-20'>
           {
               products.map(function({id,images,title,price,description}){
                  return <Product key={id}  image={images[0]} title={title} price={price} desc={description} />
               })
           }
        </section>
    </div>
  )
}

export default Products