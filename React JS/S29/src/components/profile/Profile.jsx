import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Profile() {
  return (
    <div className='grid grid-cols-[20%_80%] h-[80vh]  my-10 mx-auto'>
         <section className='  shadow-xl text-blue-700 h-[100%] flex flex-col items-center text-2xl justify-evenly'>
            <Link to="details">Details</Link>
             <Link to="orders">Orders</Link>
              <Link to="payments">Payments</Link>
               <Link to="change-password">Change Password</Link>
               <Link to="corders">Canceled Order's</Link>
               <Link to="cart">Cart</Link>
                 <Link to="cart">Change Address</Link>
         </section>

         <section>
    <Outlet />
         </section>
    </div>
  )
}

export default Profile