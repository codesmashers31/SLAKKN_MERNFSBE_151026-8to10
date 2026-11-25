import React, { useRef } from 'react'

const SaveDatas = () => {

  const formRef = useRef("")

   
let datas = JSON.parse(localStorage.getItem("mysheet")) || []
  
  const handleClick = ()=>{
   
    
   
    let save = formRef.current.value

    datas.push(save)

    localStorage.setItem("mysheet",JSON.stringify(datas))

    alert("Successfully done")

    formRef.current.value = ""

    

    

  }



  return (
    <>
     <input type="text" ref={formRef}   />
     <button  onClick={handleClick}>Save Datas</button>

     <div>
       {datas.map((e,i)=>(
        <p key={i}>{e}</p>
       ))}
     </div>
    </>
  )
}

export default SaveDatas
