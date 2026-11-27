import { useContext } from "react";
import CounterContext from "../context/CounterContext";
import { Link } from "react-router-dom";

const Navbar = () => {

 const {count} = useContext(CounterContext)

  return (
    <>
    <div>
        <div>
            logo
        </div>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/cards"}>Products</Link>
            <Link>{count}</Link>
        </div>
    </div>
    </>
  );
};

export default Navbar;