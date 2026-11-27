import { useContext } from "react";
import CounterContext from "../context/CounterContext";

const Counter = () => {

     const {count,handleClick} = useContext(CounterContext)
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Increce</button>
      </div>
    </>
  );
};

export default Counter;