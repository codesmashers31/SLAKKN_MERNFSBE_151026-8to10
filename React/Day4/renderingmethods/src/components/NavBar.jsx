import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <div className="bg-black text-white p-3 flex justify-between items-center">
        <div className="mx-15">Logo</div>
        <div className="mx-15 flex gap-15">
            <Link to={"/"}>Products</Link>
            <Link to={"/hooks"}>Hooks Process</Link>
            <Link to={"/rendering"}>Rendering</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar