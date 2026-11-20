import { useState } from "react";

const Timers = () => {
  const [count,setCount] = useState(0)
  const [timer,setTimer] = useState(null)

  const handleClcik = () => {

    if(timer){
        clearInterval(timer)
        setTimer(null)
        return
    }


    const timers = setInterval(()=>{

        setCount((p)=>p+1)



    },1000)

    setTimer(timers)
    
  };
  return (
    <>
      <h2>count:{count}</h2>
      <button onClick={handleClcik}>
        {timer?"Stop":"Start"}
      </button>
    </>
  );
};

export default Timers;