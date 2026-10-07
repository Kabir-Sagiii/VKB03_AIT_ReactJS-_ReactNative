import Products from "./components/products/Products"
import { useState } from "react"
function App() {
   const [state,setState] = useState(["aditya","vishal","rakesh","amit","shubham"])
 
  return (

    <div>
      <Products />
    </div>

    // <div className="m-20">
    //   <ol type="1">
    //     {
    //       state.map(function(element){
    //          return <li>{element}</li>
    //       })
    //     }
    //   </ol>
    // </div>


    // <div className='m-10'>
    //     {
    //       state.map(function(element){
    //         return <h1 className="text-5xl mt-5 ">{element}</h1>
    //       })
    //     }
    // </div>
  )
}

export default App