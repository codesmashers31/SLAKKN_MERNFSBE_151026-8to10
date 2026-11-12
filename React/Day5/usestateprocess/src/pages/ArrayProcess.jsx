import { useState } from "react"


const ArrayProcess = () => {

  const [arr,setArr] = useState([1,2,4,5,6,7])

  const handleClick = ()=>{

//    let copy = [...arr]

//    copy.push(1,2,3,4,5)

//     console.log(copy);
    
//    setArr(copy)

// setArr((p)=>[...p,1,2,3,4,5,6])

    let copy = [...arr]

    copy[4] = "This is Arr"

    setArr(copy)


  }

  return (
    <>
    <div>
        {arr}

        <button onClick={handleClick}>Click to add</button>
    </div>
    </>
  )
}

export default ArrayProcess