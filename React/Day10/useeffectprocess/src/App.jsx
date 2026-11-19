// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const App = () => {

//   console.log('Running compoennetd');

//   const [datas,setDatas] = useState(0)
  

//  const handleClick = () => {

//    console.log('====================================');
//    console.log("Running");
//    console.log('====================================');

   
   
//  };

//  handleClick()

// //  useEffect(()=>{
// //   handleClick()
// //  },[])


// //  - Mount -  empty Depaentance
// //  useEffect(()=>{
// //   handleClick()
// //  },[])
// // - Update -  with Depentance
// // useEffect(()=>{
// //   handleClick()
// // },[datas]) 

// // useEffect(()=>{
// // 
// //  return ()=>{} - unmount
//  // },[])
// // - without Depentance - rerender your Compoennet Again anad again
// //  useEffect(()=>{
// //   handleClick()
// //  }) 

//   return (
//     <>
//       App

//       <h1>{datas}</h1>
     
//     </>
//   );
// };

// export default App;





// const App = () => {

//   const [mydatas,setMyDatas] = useState({username:"",useremail:"",userage:""})

//   const [showdata,setShowData] = useState([])

//   const [editId,setEditId] = useState(null)
 

//   const handleChange = (e) => {


//     setMyDatas((p)=>({...p,[e.target.name]:e.target.value}))


    
//   };

// const handleClick = (e) => {
//   e.preventDefault()

//    let getLocalData = JSON.parse(localStorage.getItem("sladb")) || []


//    getLocalData.push(mydatas)


//   //  console.log(getLocalData);

//   localStorage.setItem("sladb",JSON.stringify(getLocalData))
   
//   alert('Successfully Done')

//   setMyDatas({username:"",useremail:"",userage:""})


  
// };


// const getDatas = () => {

//  let getLocalData = JSON.parse(localStorage.getItem("sladb"));


// //  console.log(getLocalData);

//  setShowData(getLocalData)
 
   
  
// };

// const handleEdit = (e,i) => {


// setMyDatas(e)
// setEditId(i)

  
// };

// const handleUpdate = ()=>{

//     let getLocalData = JSON.parse(localStorage.getItem("sladb"))

//     const geting = getLocalData.map((e,i)=>i==editId?{...e,...mydatas}:e)
  
//     localStorage.setItem("sladb",JSON.stringify(geting))

//     setMyDatas({username:"",useremail:"",userage:""})

//     alert('Datas Successfully Updated')

//     setEditId(null)

//     getDatas()

// }



// const handleDelete = (eid) => {

//    let getLocalData = JSON.parse(localStorage.getItem("sladb"))

//    let deleteDatas = getLocalData.filter((e,i)=>i!==eid)

//    localStorage.setItem("sladb",JSON.stringify(deleteDatas))

//    alert('Datas Successfully Deleted')

//    getDatas()
  
// };

// useEffect(()=>{
//   getDatas()
// },[mydatas])








//   return (
//     <>
//       <form>
//         <input type="text" name="username" onChange={handleChange} placeholder="Enter the Name" value={mydatas.username}  />
//         <input type="email" name="useremail" onChange={handleChange} placeholder="Enter the Name" value={mydatas.useremail}  />
//         <input type="number" name="userage" onChange={handleChange} placeholder="Enter the Name" value={mydatas.userage}  />
//         {editId==null?<button onClick={handleClick}>Add Data</button>:<button onClick={handleUpdate}>Update Data</button>}
        
//       </form>


//       <div>
//         {showdata.length == 0 ? <p>No Datas Found</p>:showdata.map((e,i)=>(
//           <div key={i}>
//             <h1>{e.username}</h1>
//             <p>{e.useremail}</p>
//             <p>{e.userage}</p>
//             <button onClick={()=>handleEdit(e,i)}>Edit</button>
//             <button onClick={()=>handleDelete(i)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

const App = () => {
  const [count,setCount] = useState(0)


  useEffect(()=>{

    let timer = setInterval(()=>{

        setCount((p)=>p+1)

    },1000) 


    return ()=>{
         
         clearInterval(timer)

      }
      
  
  },[])


  //  if(count>=6){
  //     setCount(0)
  //   }

  return (
    <>
      <h1>{count}</h1>
    </>
  );
};

export default App;