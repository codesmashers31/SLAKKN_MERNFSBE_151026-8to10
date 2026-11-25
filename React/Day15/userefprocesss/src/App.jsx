// import { useRef } from "react"
// import SaveDatas from "./components/SaveDatas"


// const App = () => {

//   //console.log('Running');
  
 
//   const myRef = useRef("")
//   let datas = JSON.parse(localStorage.getItem("myrefdatas")) || []
//   const displayRef = useRef(null)
//   const dispalyrefnew = useRef(null)
//   const buttontext = useRef('Hide')

//   const handleRef = ()=>{

//     //console.log(myRef.current.value);
//     const myinput = myRef.current.value

//     // if(myinput==5){

//     //   displayRef.current.innerHTML = myinput

//     // }

    

//     datas.push(myinput)

//     localStorage.setItem("myrefdatas",JSON.stringify(datas))


    
    
    

//   }

//   const hanldeClick = ()=>{

//     // dispalyrefnew.current.style.display = "none"

//     if(dispalyrefnew.current.style.display === "block"){
//       dispalyrefnew.current.style.display = "none"
//       buttontext.current.innerText = "Show"
//     }else{
//       dispalyrefnew.current.style.display = "block"
//       buttontext.current.innerText = "Hide"
//     }

//   }

//   return (
//     <>
//     <input type="text" onBlur={handleRef} ref={myRef} />
//     <p ref={displayRef}></p>

//     <div ref={dispalyrefnew} style={{backgroundColor:"black",display:"block",color:"white",padding:"10px",width
//       :"100px",height:"100px"
//     }}>
//       This is Box
//     </div>

//     <button ref={buttontext} onClick={hanldeClick}>Hide</button>


//     <div style={{marginTop:"10px"}}>
      
//       <SaveDatas/> 



//     </div>
//     </>
//   )
// }

// export default App


import React from 'react'
import SrollingToTheContent from './components/SrollingToTheContent'

const App = () => {
  return (
    <div>
      <SrollingToTheContent/>
    </div>
  )
}

export default App
