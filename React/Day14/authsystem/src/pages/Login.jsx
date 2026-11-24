import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

   const [savedata,setSaveData] = useState({useremail:"",userpassword:""})  
  
  
    const handleChange = (e) => {
  
      setSaveData((p)=>({...p,[e.target.name]:e.target.value}))
      
    };
  
  
    const handleSubmit = (e) => {
  
      e.preventDefault()
      
      if(!savedata.useremail || !savedata.userpassword){
          alert('Fill the datas')
          return
      }
  
      
  
      let getDatas = JSON.parse(localStorage.getItem("authdatas")) || []
  
      const checkEmail = getDatas.find((e)=>e.useremail==savedata.useremail && e.userpassword == savedata.userpassword)
  
      if(!checkEmail){
          alert('Please Enter Valid Datas')
          return
      }
  
      localStorage.setItem("isActive",JSON.stringify(checkEmail))
  
      alert("Valid")
  
      setSaveData({useremail:"",userpassword:""})
     
      navigate("/dashboard")
      
      
    };
  return (
    <>
      <form onSubmit={handleSubmit}>
       
        <input type="email" value={savedata.useremail} name="useremail" onChange={handleChange} placeholder="Enter the Email" />
        <input type="password" value={savedata.userpassword} name="userpassword" onChange={handleChange} placeholder="Enter the Password" />
        <input type="submit" value={"Login"} />
      </form>

      <p>If your Not register <Link to="/register">Register</Link></p>
    </>
  );
};

export default Login;