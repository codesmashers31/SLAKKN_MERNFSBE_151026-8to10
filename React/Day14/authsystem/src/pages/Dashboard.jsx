import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const naviogate = useNavigate()
  const [userdatas,setUserDatas] = useState({})
 
 const getData = ()=>{
    const getDatas = JSON.parse(localStorage.getItem("isActive"))
    if(!getDatas){
      alert("Your Not A Valid User")
      naviogate("/")
      return
    }
    setUserDatas(getDatas)
 }

 const handleClick = () => {

   localStorage.removeItem("isActive")
   naviogate("/")
   
 };

 useEffect(()=>{
  getData()
 },[])

  return (
    <>
      <div>
        <h2>{userdatas.username}</h2>
        <p>{userdatas.useremail}</p>
        <p>{userdatas.id}</p>
      </div>

      <button onClick={handleClick}>Logout</button>
    </>
  );
};

export default Dashboard;