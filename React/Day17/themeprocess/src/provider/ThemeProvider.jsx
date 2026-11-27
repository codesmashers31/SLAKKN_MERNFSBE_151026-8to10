import { useState } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeProvider = ({children}) => {

  const [theme,setTheme] = useState(true)
  const [count,setCount] = useState(0)

  const handleChange = ()=>{

    setTheme(!theme)
    setCount((p)=>p+1)

  }


  return (
    <>
      <ThemeContext.Provider value={{theme,handleChange,count}}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;