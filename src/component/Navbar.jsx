import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-green-300 shadow-md sticky top-0 z-50">
    <div className='max-w-7xl mx-auto flex justify-between items-center px-8 py-4 '>
         <h1 className="text-2xl font-bold text-blue-700">
            EduTrack
          </h1>
          <div className='flex gap-8 text-lg font-medium text-blue-700 '>
      <Link to="/" className='hover:text-white'>Home</Link>
      <Link to="/About" className='hover:text-white'>About</Link>
      <Link to="/Students" className='hover:text-white'>Students</Link>
      </div>
    </div>
     </nav>
  )
}

export default Navbar
