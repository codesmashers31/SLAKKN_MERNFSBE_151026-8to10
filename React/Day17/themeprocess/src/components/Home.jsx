import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Home = () => {

  const {theme,count} = useContext(ThemeContext)

  return (
    <>
      <div className={theme?"bg-black text-white h-100 p-10 flex justify-center items-center":"bg-white h-100 p-10 flex justify-center items-center"}>
       <h1>Home</h1>
       <p>{count}</p>
      </div>
    </>
  );
};

export default Home;