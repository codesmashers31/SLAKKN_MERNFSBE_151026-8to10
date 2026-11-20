import { useEffect, useState } from "react";
import Timers from "./components/Timers";

const App = () => {
 
  const [showDatas,setShowDatas] = useState([])
  const [count,setCount] = useState(0)

 const fetchDatas = async() => {

  

    try {

      const res = await fetch("https://dummyjson.com/products?limit=5")

      const parseData = await res.json()

      console.log(parseData.products);

      // let datas = parseData.products;

      setShowDatas(parseData.products)
      
      
      
      
    } catch (error) {

      console.log(error.message);
      
      
    }

   
 };

 useEffect(()=>{
  fetchDatas()
  
 },[])
 




  return (
    <>
      <div>
        {showDatas.map((e)=>(
          <div key={e.id}>
            <img src={e.images} alt="" style={{width:"100px"}} />
            <h2>{e.title}</h2>
            <p>{e.category}</p>
            <p>{e.price}</p>
          </div>
        ))}
      </div>
      
     <Timers/>

    </>
  );
};

export default App;