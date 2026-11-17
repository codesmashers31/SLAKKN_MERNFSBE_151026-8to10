import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-amber-300 p-2 flex justify-around items-center'>
       <div className='mx-15'>Logo</div>
       <div className='mx-15 flex gap-15'>
        <Link to={"/"}>Todo</Link>
        </div>
    </div>
  )
}

export default Navbar
