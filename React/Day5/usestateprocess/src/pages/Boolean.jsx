import { useState } from "react"


const Boolean = () => {
  
  console.log('Rendering...');
  

 const [isActive,setIsActive] = useState(true)

 const handleClick = ()=>{

  setIsActive(!isActive)
   
  // setIsActive((prev)=>!prev)
  
 }

 

  return (
    <>
    <div className="bg-gray-300 h-100 p-10 flex justify-center items-center">
        
       <div className="flex flex-col justify-center items-center p-2 gap-5">
         <p>{isActive?"this is React":"This is not react"}</p>

        <button className="bg-white p-1 rounded w-30" onClick={handleClick}>{isActive?"ON":"OFF"}</button>
       
        {isActive?<p className="bg-yellow-300 p-2 w-30 rounded">This is node</p>:<p>This  is not node</p>}
       

        {/* {isActive?<div>This is my content</div>:""} */}

         {isActive&&<div>This is my content</div>}


         <div className={isActive&&"bg-yellow-300  p-2 w-50 h-50 rounded"}>
           Box
         </div>
        

       </div>
    </div>
    </>
  )
}

export default Boolean