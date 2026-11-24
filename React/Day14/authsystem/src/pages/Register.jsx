import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {


    const navigate = useNavigate()

  const [savedata,setSaveData] = useState({username:"",useremail:"",userpassword:""})  


  const handleChange = (e) => {

    setSaveData((p)=>({...p,[e.target.name]:e.target.value}))
    
  };


  const handleSubmit = (e) => {

    e.preventDefault()
    
    if(!savedata.username || !savedata.useremail || !savedata.userpassword){
        alert('Fill the datas')
        return
    }

    const obj = {id:Date.now(),username:savedata.username,useremail:savedata.useremail,userpassword:savedata.userpassword}

    let getDatas = JSON.parse(localStorage.getItem("authdatas")) || []

    const checkEmail = getDatas.find((e)=>e.useremail===savedata.useremail)

    if(checkEmail){
        alert('Already Email Register')
        return
    }

   

    getDatas.push(obj)

    localStorage.setItem("authdatas",JSON.stringify(getDatas))

    alert("Data Successfully Added")

    setSaveData({username:"",useremail:"",userpassword:""})
    
    navigate("/")

    
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={savedata.username} name="username" onChange={handleChange} placeholder="Enter the Name" />
        <input type="email" value={savedata.useremail} name="useremail" onChange={handleChange} placeholder="Enter the Email" />
        <input type="password" value={savedata.userpassword} name="userpassword" onChange={handleChange} placeholder="Enter the Password" />
        <input type="submit" value={"Register"} />
      </form>

      <p>If your Already have Data <Link to="/">Login</Link></p>
    </>
  );
};

export default Register;