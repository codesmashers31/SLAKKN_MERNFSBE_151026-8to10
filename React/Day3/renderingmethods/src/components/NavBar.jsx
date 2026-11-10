import { Link } from "react-router-dom"
import { CgArrowBottomRightR } from "react-icons/cg";

const NavBar = () => {
  return (
    <>
    <div className="bg-amber-300 p-3 flex justify-between items-center">
        <div className="mx-15">
            LOGO
        </div>
        <div className="mx-19 flex items-center gap-15">
            <Link to="/">Product</Link>
            <Link to="/boolean">Boolean</Link>
            <Link to="/array">Array</Link>
            <Link to="/object">Object</Link>
            <Link to="/afo" className="flex gap-2 items-center justify-center"><CgArrowBottomRightR />Array Of Object</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar