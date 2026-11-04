import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="flex shadow justify-between top-0 items-center bg-white p-4 fixed w-screen">
      <div className="mx-15">
          LOGO
      </div>
      <div className="mx-15 flex gap-15">
         <NavLink  to="/">Home</NavLink>
         <NavLink className={({isActive})=>isActive ? "bg-amber-300 p-1 text-center w-40":"bg-white p-1 text-center w-40"} to="/about">About</NavLink>
         <Link to="/contact">Contact</Link>
         <Link to="/service">Services</Link>
      </div>
    </div>
    </>
  )
}

export default NavBar