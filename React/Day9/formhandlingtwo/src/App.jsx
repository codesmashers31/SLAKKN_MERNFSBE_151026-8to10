// import { useState } from "react";

import { use, useState } from "react";

// const App = () => {

//  const [task,setTask] = useState("")

//  const [savetask,setSaveTask] = useState([])

//  const [editId,setEditId] = useState(null)

//   const handleChange = (e)=>{

//      setTask(e.target.value)

//   }




//   const handleClick = ()=>{

//     if(!task) {
//       alert("Please fill the Input")
//       return
//     }

    
//     const copy = [...savetask]

//     // console.log(copy);

//     copy.push(task)

//     setSaveTask(copy)

//     setTask("")
   

//   }


//   const handleEdit = (element,eid) => {
  
    

//      setTask(element)


//      setEditId(eid)

      

    
//   }
  

//   const handleDelete = (userid)=>{


//     const copy = [...savetask]

//     const deleteData = copy.filter((e,i)=>i!==userid)

//     setSaveTask(deleteData)


//     // setSaveTask((p)=>[...p].filter((e,i)=>i!==userid))



//   }

//   const handleUpdate = ()=>{

//      setSaveTask((p)=>[...p].map((e,i)=>i==editId?task:e))

//      setTask("")

//      setEditId(null)

//   }
//   return (
//     <>
//       <div>
//         <input type="text" onChange={handleChange} placeholder="Enter the Task" value={task} />
//         {editId==null?<button onClick={handleClick}>Add Task</button>:<button onClick={handleUpdate}>Update Task</button>}
        
//       </div>

//       <div>
//         <table border={"2"}>
//            <thead>
//              <tr><th>S.no</th><th>Task Name</th><th>Action</th></tr>
//            </thead>
//            <tbody>

//             {
//               savetask.length === 0 ? (<tr><td  colSpan={3}>No Datas Available</td></tr>):(savetask.map((e,i)=>(
//               <tr key={i}>
//               <td>{i+1}</td>
//               <td>{e}</td>
//               <td>
//                 <button onClick={()=>handleEdit(e,i)}>Edit</button> ||
//                 <button onClick={()=>handleDelete(i)}>Delete</button>
//               </td>
//             </tr>
//              )))
//             }
            
//            </tbody>
//         </table>
//         {/* {savetask.map((e,i)=>(

//           <div key={i}>
//                <h1>{e}</h1>
               
//           </div>

//         ))} */}
//       </div>
//     </>
//   );
// };

// export default App;









const App = () => {

  const [obj,setObj] = useState({usertask:"",taskdate:"",status:""})

  const [saveData,setSaveData] = useState([])

  const [editId,setEditId] = useState(null)

  const handleChange = (e)=>{

     setObj({...obj,[e.target.name]:e.target.value})

  
  }

  const handleAdd = (e)=>{

    e.preventDefault()

    const copy = [...saveData]

    copy.push(obj)

    setSaveData(copy)

    alert("Data Successfully Added")

    setObj({usertask:"",taskdate:"",status:""})
  
    // setSaveData((p)=>[...p,obj])



  }

  const handleEdit = (e,i)=>{
   

    setObj(e)
    setEditId(i)
    

  }


  const handleDelete = (userid)=>{


    setSaveData((p)=>[...p].filter((e,i)=>i!==userid))

  }

    const handleUpdate = (e)=>{

      e.preventDefault()

     setSaveData((p)=>[...p].map((e,i)=>i==editId?{...e,...obj}:e))

     alert("Data Successfully Updated")

    setObj({usertask:"",taskdate:"",status:""})

     setEditId(null)

  }
  return (
    <>
     <form>
      <input type="text" name="usertask" placeholder="Enter the Task" onChange={handleChange} value={obj.usertask} />
      <input type="date" name="taskdate"  onChange={handleChange} value={obj.taskdate} />
      <input type="text" name="status" placeholder="Enter the Status" onChange={handleChange} value={obj.status} />
     
     {editId==null?<button onClick={handleAdd}>Task Add</button>:<button onClick={handleUpdate}>Task Update</button>}
      
     </form>


     <div>
      {saveData.length == 0 ? ("No Data"):(saveData.map((e,i)=>(
        <div key={i}>

          <h2>{e.usertask}</h2>
          <p>{e.taskdate}</p>
          <p>{e.status}</p>
          
          <button onClick={()=>handleEdit(e,i)}>Edit</button>
          <button onClick={()=>handleDelete(i)}>Delete</button>
       
        </div>
      )))}
     </div>
    </>
  );
};

export default App;