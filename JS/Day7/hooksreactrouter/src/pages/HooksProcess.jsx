import { useNavigate } from "react-router-dom"


const HooksProcess = () => {
    
    const navigate = useNavigate()


   const handleBack = ()=>{
        navigate(-1)
   }

   const handleForward = ()=>{

    navigate(1)

   }

   const handleLogin = ()=>{
      navigate("/login",{state:{username:"React"}})
   }
   
  const handleParams = ()=>{

    navigate("/product")

  }
  return (
    <>
     <div className="m-10 flex gap-15">
     <button  onClick={handleBack}>Back</button>
     <button onClick={handleForward}>Forward</button>
     <button onClick={handleLogin}>Login</button>
     <button onClick={handleParams}>Product</button>
     </div>
    </>
  )
}

export default HooksProcess