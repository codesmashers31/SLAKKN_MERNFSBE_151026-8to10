import React from 'react'
import { NavLink } from 'react-router-dom'

const BooleanProcess = () => {


  let datas = false
  let data = undefined
  return (
    <>
    <div className='bg-black  p-10 h-100'>
       {datas? <div className={datas?"p-4 h-70 w-50 rounded bg-white":"p-4 h-100 w-50 rounded bg-white"}>
          {datas?"Box On":"Box Off"}
        </div>: <div className='p-4 h-50 w-50 rounded bg-red-500'>
          {datas && "Box On"}
        </div>}

        <h1 className='text-white'> 
          {data??"This is Null"}
        </h1>

        
    </div>
    </>
  )
}

export default BooleanProcess