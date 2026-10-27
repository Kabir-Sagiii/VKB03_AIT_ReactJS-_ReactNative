import Products from "./components/products/Products"

import Home from "./components/home/Home"
import Navbar from "./components/nav-bar/Navbar"
import ContactUs from "./components/contactus/Contactus"
import Profile from "./components/profile/Profile"
import {Route,Routes} from "react-router-dom"
import Details from "./components/details/Details"
import Payments from "./components/payments/Payments"
import Orders from "./components/orders/Orders"
import FormManual from "./components/Forms/FormManual"
import Form from "./components/Forms/Form"
function App() {
 
 
  return (

    <div>
      <Navbar />
    
   <Routes>
     <Route path={"/"} element={<Home />}/>
     <Route path={"/products"} element={<Products />}/>

      <Route path={"/profile"} element={<Profile />}>
      <Route path="" element={<Details />}/>
        <Route path={"details"} element={<FormManual />} />
         <Route path={"payments"} element={<Form />} />
          <Route path={"orders"} element={<Orders />} />
       
      </Route>


   <Route path={"/contactus"} element={<ContactUs />}/>
   </Routes>
    </div>

    
  )
}

export default App