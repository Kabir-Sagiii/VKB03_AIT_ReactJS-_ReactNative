import {useState} from 'react'
import { useForm } from 'react-hook-form'
function Form() {
       const [myData,setMyData] = useState()
       const {register,handleSubmit} = useForm()

       const myFormSubmit = (data)=>{
        console.log(data)
        setMyData(data.username)
       }

  return (
    <div className='m-20'>
        <h1 className='text-4xl my-10 text-blue-700'>React Hook Form</h1>
        <form onSubmit={handleSubmit(myFormSubmit)}>
            <input {...register("username")} className='border-2 mx-2 my-2' type="text" placeholder='username'/>
            <input {...register("password")} type="password" className='border-2 mx-2 my-2' placeholder='password' />
            <div className='my-3'>
                <input {...register("gender")} value="male" type="radio" className='mr-1' />Male &nbsp;&nbsp;&nbsp;&nbsp;
                 <input {...register("gender")} value="female" type="radio" className='mr-1'/>Female
            </div>
            <div className='my-3'>
                <select {...register("city")}>
                    <option>Select City</option>
                     <option value="mumbai">Mumbai</option>
                      <option value="hyd">Hyderabad</option>
                       <option value="pune">Pune</option>
                </select>
            </div>
            <button className='bg-green-800 py-2 px-5 text-white rounded-lg' type="submit">Submit</button>
        </form>

        {/* <h2 className='text-xl text-green-800'>{myData} </h2> */}
    </div>
  )
}

export default Form