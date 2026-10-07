import Products from "./components/products/Products"
import { useState } from "react"
function App() {
   const [state,setState]= useState(["raj","sneha","Salmaan",true,999])

   const [data,setData] = useState(
    [<h1 className="text-red-500 text-3xl">heading element</h1>,<p className="text-yellow-500 text-3xl">i am para</p>]
  )
  return (
    <div className='m-10'>
      {/* <Products /> */}
      {/* <h1 className="text-5xl p-5 m-20 text-blue-700">
        Rendering the Data in JSX : {state}
      </h1> */}
      {data}
    </div>
  )
}

export default App