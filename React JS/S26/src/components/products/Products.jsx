import React from 'react'
import Navbar from '../nav-bar/Navbar'
import Categories from '../categories/Categories'
import Product from '../product/Product'
function Products() {
  return (
    <div>
        <Navbar />

        <section className='h-[500px] shadow-xl border-2 w-[90%] my-20 mx-auto'>
            <img src="https://img.freepik.com/premium-photo/collection-electronic-devices-black-background-generative-ai_893571-1990.jpg?w=740" className='w-full h-full' alt="" />
        </section>

        <section className='w-[90%] m-auto flex justify-evenly'>
          <Categories image={"https://biogharlb.com/cdn/shop/collections/all_products.png?v=1732737232"} title={"All"} />
           <Categories image={"https://img.freepik.com/premium-photo/illustration-ultra-realistic-4k-image-modern-electronic-device_756405-53536.jpg"} title={"Electronics"} />
            <Categories image={"https://tse4.mm.bing.net/th/id/OIP.LI7ohUTG5GFEsgoMdhhZ9wHaEK?r=0&pid=Api&h=220&P=0"} title={"Mens"} />
             <Categories image={"https://wallpapercave.com/wp/wp6130531.jpg"} title={"Womens"} />
              <Categories image={"https://static.vecteezy.com/system/resources/previews/027/110/333/non_2x/fashion-model-kids-free-photo.jpg"} title={"Kids"} />
               <Categories image={"https://www.thornior.com/content/images/2023/11/Screenshot-2023-11-23-at-17.20.53.png"} title={"Furniture"} />
               <Categories image={"https://png.pngtree.com/background/20230612/original/pngtree-various-makeup-products-lie-on-a-table-on-dark-picture-image_3185889.jpg"} title={"Cosmetics"} />
        </section>

        <section className='w-[90%] m-auto flex gap-2 flex-wrap justify-evenly my-20'>
           <Product image={"https://tse4.mm.bing.net/th?id=OIF.H6ye%2bfiCM9aDsWTMJoeOlA&r=0&pid=Api&h=220&P=0"} title={"Iphone 18"} price={"110000"} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil?'} />
           <Product image={"https://tse4.mm.bing.net/th?id=OIF.H6ye%2bfiCM9aDsWTMJoeOlA&r=0&pid=Api&h=220&P=0"} title={"Iphone 18"} price={"110000"} desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil?'} />
           <Product />
           <Product />
           <Product />
            <Product />
           <Product />
           <Product />
           <Product />
           <Product />
            <Product />
           <Product />
           <Product />
           <Product />
           <Product />
            <Product />
           <Product />
           <Product />
           <Product />
           <Product />
        </section>
    </div>
  )
}

export default Products