import { useState } from "react"


const HooksProcess = () => {

 let [count,setCount] = useState(0)

 const countChange = (e)=>{

  

  setCount("Node")

 }

  return (
    <>
    <div className="bg-yellow-50 flex justify-center items-center  flex-col gap-10 p-10 h-100">
        <h1>{count}</h1>
        
        <button className="bg-black text-white p-1 rounded w-50 hover:bg-amber-300 hover:text-black" onClick={countChange}>Count Increment</button>
    </div>
    </>
  )
}

export default HooksProcess



