import { useState } from "react";
import CounterContext from "../context/CounterContext";

const CounterProvider = ({children}) => {

    const [count,setCount] = useState(0)

    const handleClick = ()=>{

        setCount((p)=>p+1)

    }


  return (
    <>
      <CounterContext.Provider value={{count,handleClick}}>
        {children}
      </CounterContext.Provider>
    </>
  );
};

export default CounterProvider;