import React from 'react'

function Navbar() {
  return (
    <div className='h-[90px] bg-black grid grid-cols-[40%_60%]'>
         <section className='text-green-300 flex justify-center items-center'>
            <h1 className='text-5xl font-bold'>My-Ecomm-Mart</h1>
         </section>
         <section className=' text-white flex justify-end items-center'>
            <a href="" className='mr-17 text-xl'>Home</a>
            <a href="" className='mr-17 text-xl'>Products</a>
            <a href="" className='mr-17 text-xl'>Profile</a>
            <a href="" className='mr-17 text-xl'>ContactUs </a>
            <a href="" className='mr-17 text-xl '>
                <button>Logout</button>
            </a>
         </section>
    </div>
  )
}

export default Navbar