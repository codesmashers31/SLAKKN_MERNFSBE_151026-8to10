import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Contact = () => {
  const {theme,handleChange} = useContext(ThemeContext)
  return (
    <>
      <div className={theme?"bg-black text-white h-100 p-10 flex justify-center items-center":"bg-white h-100 p-10 flex justify-center items-center"}>
       <h1>Contact</h1>
       <button onClick={handleChange}>{theme?"light":"Dark"}</button>
      </div>
    </>
  );
};

export default Contact;