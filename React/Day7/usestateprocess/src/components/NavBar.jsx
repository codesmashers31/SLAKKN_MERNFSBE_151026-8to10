import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-purple-500 p-3 shadow text-white font-semibold font-sans flex justify-start items-center gap-15">
        <div className="mx-10">Logo</div>
        <div className="flex gap-15">
            <Link to="/">Array</Link>
            <Link to="/obj">Object</Link>
            <Link to="/arrobj">Array of Objects</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar