import React, { useState } from 'react'

const ObjectProcess = () => {

  const [obj,setObj] = useState({name:"React",subject:"Node",Price:30000,skils:["React","Node","JS","HTML","CSS"]})

  

  const handleClick = ()=>{

//   const copy = {...obj,brand:"React"}

  

//   setObj(copy)

    setObj({...obj,Offer:"4676"})


  }

  const handleUpdate = ()=>{

    setObj({...obj,Price:"800000"})

  }

  const handleDelete = ()=>{

    setObj({...obj,Price:""})

  }
  


  return (
    <>
    <div className="bg-black flex-col gap-5 text-white p-10 h-120 flex justify-center items-center">

      <div>
        <h1>{obj.name}</h1>
        <p>{obj.subject}</p>
        <p>{obj.Price}</p>
        <p>{obj.Offer}</p>
        <p>{obj.course}</p>
        <p>{obj.skils.map((e)=>(
            <span className='flex gap-20'>{e}</span>
        ))}</p>

      </div>


      <button onClick={handleClick} className='bg-white p-1 rounded w-30 text-black'>Click to add</button>

      <button onClick={handleUpdate} className='bg-white p-1 rounded w-30 text-black'>Click to Update</button>

       <button onClick={handleDelete} className='bg-white p-1 rounded w-30 text-black'>Click to Delete</button>

    </div>
    </>
  )
}

export default ObjectProcess