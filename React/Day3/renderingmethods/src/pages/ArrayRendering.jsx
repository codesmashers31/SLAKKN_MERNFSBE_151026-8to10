

const ArrayRendering = () => {

  const arr = [1,2,3,4,5,6]


  let copy = [...arr]

   copy = copy.filter((e)=>e%2===0)

  //  copy = copy.find((e)=>e%2===0)

  //  console.log(copy);
   

  return (
    <>
    <div className="p-10">
      {copy?copy:copy.map((e,i)=>(
        <p key={i}>{e}</p>
      ))}
    </div>
    </>
  )
}

export default ArrayRendering