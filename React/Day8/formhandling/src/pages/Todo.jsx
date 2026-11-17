// import { useState } from "react";


// const Todo = () => {

     
//     const [todo,setTodo] = useState("")

//     const [savedata,setSaveData] = useState([])

//     const [editId,setEditId] = useState(null)

//     const handleChange = (e)=>{


//         //console.log(e.target.value);

//         setTodo(e.target.value)

    

//       //   if(e.target.value%2===0){
//       //        setTodo("Even Number")
//       //   }else{
//       //    setTodo("Not a Event odd number")
//       //   }

//       //   console.log(todo);
        
        
        
//     }

//     const handelAdd = (e)=>{
   
//       const datas = {id:Date.now(),todo}

//       if(!todo){

//          alert('Please fill the form')
//          return

//       }

//       // const copy = [...savedata]

//       // copy.push(datas)
   
//       // setSaveData(copy)

//       setSaveData((p)=>[...p,datas])

//       setTodo("")

//     }


//     const handleEdit = (datas)=>{

//         setTodo(datas.todo)

//         setEditId(datas.id)

//     }


//     const handleDelete = (id)=>{


//       const copy = [...savedata]


//       const detele = copy.filter((e)=>e.id!==id)


//       setSaveData(detele)






//     }

//     const handelupdate = ()=>{

//        setSaveData((p)=>[...p].map((e,i)=>e.id == editId?{...e,todo}:e))
      
//        setEditId(null)

//        setTodo("") 


//     }
//   return (
//      <>
//      <div>
        
//         <input value={todo}  className="border mx-10 mt-10 w-100 rounded p-1" type="text" onChange={handleChange} />
        
//         {editId==null?<button onClick={handelAdd}>Add Task</button>:<button onClick={handelupdate}>Update Task</button>}

        
//      </div>

//      <div className="p-10 flex justify-around items-center">
//       {savedata.map((e)=>(
//          <div key={e.id} className="border p-5 flex flex-col justify-center items-center gap-2">
//             <h1>{e.id}</h1>
//             <p>{e.todo}</p>
//             <button onClick={()=>handleEdit(e)} className="bg-blue-500 p-1 text-white rounded w-30">Edit</button>
//             <button onClick={()=>handleDelete(e.id)} className="bg-red-500 text-white p-1 rounded w-30 mx-3">Delete</button>
//          </div>
//       ))}
//      </div>
//      </>
//   )
// }

// export default Todo



import React, { useState } from 'react'

const Todo = () => {

   const [inputdata,setInputData] = useState("")
   const [savedata,setSaveData] = useState([])

 const handleChange = (e)=>{

   

   setInputData(e.target.value)

 }


 const handleClick = ()=>{

   const obj = {id:Date.now(),inputdata}

    setSaveData((p)=>[...p,obj])

 }

  return (
      
      <>
      {/* <h1>{inputdata}</h1> */}
      <input type="text"  onChange={handleChange} />
      <button onClick={handleClick}>Click</button>

      <div>
         {savedata.map((e,i)=>(
            <div key={i} >
               <p >{e.id}</p>
            <p>{e.inputdata}</p>
            </div>
         ))}
      </div>
      </>
  )
}

export default Todo
