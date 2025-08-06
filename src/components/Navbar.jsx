import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex justify-end gap-10 bg-gray-800 text-white p-4'>

        <a href="/ ">Homepage</a>
     
        <a href="/Aboutus ">AboutMe</a>
        <a href="/Projects ">Resume</a>
        <a href="/Contact ">Contact</a>
      
      </div>
   
  )
}

export default Navbar