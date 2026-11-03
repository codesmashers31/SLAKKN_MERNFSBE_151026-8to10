import Link from "../utils/Link"
import Logo from "../utils/Logo"


const NavBar = () => {
  return (
   <>
   <div className="shadow bg-white fixed top-0 w-screen p-3 font-sans flex justify-between items-center">
    <div>
   <Logo/>
    </div>
    <div className="flex gap-15 mx-15">
   <Link/>
    </div>
   </div>
   </>
  )
}

export default NavBar