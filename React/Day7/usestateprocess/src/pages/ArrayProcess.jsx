import { useState } from "react"


const ArrayProcess = () => {

  const [arr,setArr] = useState(["React","Node","JS","HTML","CSS"])

  const handleClick = ()=>{
   
    let copy = [...arr]
    
    
    copy.push("AWS")
     
     
    setArr(copy)

  }

  const handleUpdate = (eid)=>{
    
    let copy = [...arr]


    // copy[eid] = "MERN"

    // setArr(copy)


   setArr(copy.map((e,i)=>i==eid?"Skill":e))



  }

  const handleDelete = (did)=>{

     let copy = [...arr]

     
     const deleteData = copy.filter((e,i)=>i !== did)

     setArr(deleteData)


  }

  return (
    <>
    <div className="bg-black flex-col gap-5 text-white p-10 h-120 flex justify-center items-center">
     <h1>Array Process | Adding | Update | Delete</h1>
     
     {arr.map((e,i)=>(
        <div key={i}>
            <p>{e}</p>
            <button onClick={()=>handleUpdate(i)} className="bg-white rounded  p-1 text-black w-30">Update</button>
            <button onClick={()=>handleDelete(i)} className="bg-white rounded  p-1 text-black w-30">Delete</button>
        </div>
     ))}
     
     <button onClick={handleClick} className="bg-white rounded  p-1 text-black w-30">Click To Add</button>
     {/* <button onClick={handleUpdate} className="bg-white rounded  p-1 text-black w-30">Click To Update</button> */}
     
    </div>
    </>
  )
}

export default ArrayProcess
