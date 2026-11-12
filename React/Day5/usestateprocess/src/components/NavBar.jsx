import { Link } from "react-router-dom"


const NavBar = () => {
  return (
    <>
    <div className="bg-amber-200 p-3 flex justify-between items-center">
        <div className="mx-15">Logo</div>
        <div className="mx-15 flex gap-15">
            <Link to="/">Boolean</Link>
            <Link to="/null">Nullsh</Link>
            <Link to="/array">Array</Link>
            <Link to="/practice">Practice</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar