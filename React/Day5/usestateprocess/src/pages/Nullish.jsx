import { useState } from "react"


const Nullish = () => {

  const [nullsh,setNullsh] = useState(678)
   
  const handleClick = ()=>{

    setNullsh(undefined)

  }
   
  return (
    <>
     <div className="bg-gray-300 h-100 p-10 flex justify-center items-center">
          
      <h1>{nullsh??"This is React"}</h1>

      <button onClick={handleClick}>Click to Update</button>
 
     </div>
    </>
  )
}

export default Nullish