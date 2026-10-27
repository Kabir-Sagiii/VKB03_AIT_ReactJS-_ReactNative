import {useState} from 'react'

function FormManual() {
    const [username,setUsername] = useState("Sagar")
  return (
    <div className='m-10'>
        <h1 className='text-4xl text-green-800 my-10'>Manage the Form Manually</h1>
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log(username)
        }}>
              <div>
        
              <input className='border-3 mx-3' value={username} onChange={(event)=>{ setUsername(event.target.value)}} type="text" id="username" placeholder='username'/>
             <button type="submit" className='px-5 py-2 bg-black text-white'>Submit</button>
              </div>
              
        </form>
          <h2 className='text-3xl text-red-500'>-----</h2>
    </div>
  )
}

export default FormManual