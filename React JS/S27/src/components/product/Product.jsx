import React from 'react'

function Product({image,title,price,desc}) { //props = {image:"",title:""}
  return (
    <div className='p-3 text-center shadow-xl  w-[270px]'>
         <img src={image} className='w-[100%] h-[200]' alt="" />
         <h3 className='text-xl my-5 text-green-800 font-bold'>{title}</h3>
         <p className='my-3'>${price}</p>
         <p className='my-3'>{desc.slice(0,80)}</p>
         <button className='border-2 p-2 rounded-xl bg-green-800 text-white'>Product Details</button>
    </div>
  )
}

export default Product