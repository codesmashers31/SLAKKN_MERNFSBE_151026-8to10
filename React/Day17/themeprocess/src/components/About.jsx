import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const About = () => {
   const {theme} = useContext(ThemeContext)
  return (
    <>
      <div className={theme?"bg-black text-white h-100 p-10 flex justify-center items-center":"bg-white h-100 p-10 flex justify-center items-center"}>
       <h1>About</h1>
      </div>
    </>
  );
};

export default About;