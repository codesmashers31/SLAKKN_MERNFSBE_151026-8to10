
import {Link} from 'react-router-dom'
const NavBar = () => {
    
  return (
    <>
    <div className='bg-blue-600 p-3 shadow text-white font-bold flex justify-between items-center'>
      <div className='mx-15'>
        Logo        
      </div>
      <div className='mx-15 flex gap-15'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/hooks">Hooks</Link>
      </div>
    </div>
    </>
  )
}

export default NavBar