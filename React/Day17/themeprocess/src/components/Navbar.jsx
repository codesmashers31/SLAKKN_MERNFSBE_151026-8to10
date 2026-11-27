import { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const {theme,handleChange,count} = useContext(ThemeContext)
  return (
    <>
      <div className={theme?"bg-black text-white flex justify-center gap-20 items-center p-2":"bg-white flex justify-center gap-20 items-center p-2"}>
        <div>
            logo
        </div>
        <div className="flex gap-15">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <button onClick={handleChange}>{theme?"Light":"Dark"}</button>
            <p>{count}</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;