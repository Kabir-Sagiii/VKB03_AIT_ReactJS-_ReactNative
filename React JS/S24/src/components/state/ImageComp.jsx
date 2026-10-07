import {useState} from 'react'

function ImageComp() {
    const [state,setState] = useState("https://ik.imagekit.io/laxaar/1686313855890ReactJS_2400x1200.png")
        const [title,setTitle] = useState("React JS")
  
    function changeToNextJS(){
        setState("https://images.ctfassets.net/23aumh6u8s0i/6pjUKboBuFLvCKkE3esaFA/5f2101d6d2add5c615db5e98a553fc44/nextjs.jpeg")
        setTitle("Next JS")
    }

    function changeToReactJS(){
        setState("https://ik.imagekit.io/laxaar/1686313855890ReactJS_2400x1200.png")
        setTitle("React JS")
    }
  
  
    return (
    <div className='mt-50'>
        <h1 className='mb-5 text-3xl text-orange-800'>{title}</h1>
        <img src={state} className='w-[500px] h-[300px]' alt="" /> <br/><br/>
       <section className='flex w-[300px] justify-evenly'>
         <div onClick={changeToReactJS}>
            <input type="radio" name="image" className='mr-1'/>
        <label>React JS</label>
        </div>
          
        <div onClick={changeToNextJS}>
             <input type="radio" name="image" className='mr-1'/>
        <label>Next JS JS</label>
        </div>
       </section>
        {/* <button onClick={changeToReactJS} className='bg-green-700 px-5 py-2 m-2 text-white'>React JS</button>
        <button onClick={changeToNextJS} className='bg-black px-5 py-2 m-2 text-white'>Next JS</button> */}
    </div>
  )
}

export default ImageComp