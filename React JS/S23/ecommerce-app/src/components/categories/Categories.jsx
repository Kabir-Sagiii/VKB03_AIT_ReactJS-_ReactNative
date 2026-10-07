import React from 'react'

function Categories(props) {
  return (
    <div className='text-center'>
        <img src={props.image} className='w-[90px] h-[90px] rounded-full shadow-lg border-3 border-orange-800' alt="" />
        <h3 className='text-xl mt-3 font-bold text-green-800 hover:text-yellow-800'>{props.title}</h3>
    </div>
  )
}

export default Categories