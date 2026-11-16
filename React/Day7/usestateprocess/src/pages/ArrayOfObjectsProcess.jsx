import { useState } from "react"


const ArrayOfObjectsProcess = () => {

  const [arrObj,setArrObj] = useState(
    [
      {name:"React",age:26,salary:40000},
      {name:"React New",age:28,salary:470000},
      {name:"Node",age:23,salary:70000},
      {name:"Js",age:45,salary:60000}
    
    ]
  )

  const [sum,setSum] = useState(null)

  const handleAdd = ()=>{
  
    const copy = [...arrObj]

    const obj = {name:"node 1",age:20,salary:70000}

    copy.push(obj)


   setArrObj(copy)
    
    // setArrObj((p)=>[...p,obj])
  }

  const handleUpdate = (eid)=>{



   setArrObj((p)=>[...p].map((e,i)=>i==eid?{...e,age:300}:e))


  }

  const handleDelete = (proid)=>{


    const copy = [...arrObj]


    const deletedatas = copy.filter((e,i)=>i !== proid)


    setArrObj(deletedatas)

   

  }

  const filterPrice = ()=>{

   const copy = [...arrObj]

   const fileterdatas = copy.filter((e,i)=>e.salary > 50000)

   setArrObj(fileterdatas)


  }


  const sumofvalues = ()=>{

    const copy = [...arrObj]

     const sumofproess = copy.reduce((acc,i)=>acc+i.salary,0)

      setSum(sumofproess)


  }


  return (
    <>
      <div className="bg-amber-200 flex flex-col gap-5 p-10 justify-around items-center">
         {arrObj.map((e,i)=>(
          <div key={i} className="bg-white p-5 flex gap-6">
             <h3>{e.name}</h3>
             <p>{e.age}</p>
             <p>{e.salary}</p>
             <button onClick={()=>handleUpdate(i)}>Update Data</button>
             <button onClick={()=>handleDelete(i)}>Delete Data</button>
          </div>
         ))}

         <button className="bg-black text-white p-1 rounded w-30" onClick={handleAdd}>Add Data</button>

         <button onClick={filterPrice} className="bg-black text-white p-1 rounded w-30">Filter by Price above 50000</button>

         <button onClick={sumofvalues} className="bg-black text-white p-1 rounded w-30">Sum of Items</button><h1>{sum}</h1>
      </div>
    </>
  )
}

export default ArrayOfObjectsProcess