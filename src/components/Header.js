import React from 'react'
import Logo from '../img/logo.jpg'
import { useState } from 'react'
import '../App.css'

const Header = () => {

  let [toggle,toggleFun]=useState(false)
    
    function navbarToggle()
    {
        toggleFun(oldval=>!oldval)
    }
  return (
    <nav className='nav-container bg-black flex justify-between items-center'>
    <img src={Logo} className='w-[160px] logo text-white lg:ml-10 mr-10 ml-2'></img>
    <ul className={ toggle?"navbar":'navbar nav-open'}>
   
       <li><a href="#" className="links text-white">Pricing</a></li>
       <li><a href="#" className="links text-white">Asap Mentor
       </a></li>
       <li><a href="#" className="links text-white">About</a></li>
       <div className="btn-container">
       <button className='p-2  m-2 mx-4 rounded-full border-2 border-blue-500 bg-white font-semibold font-sans'>LOGIN</button>
       <button className='p-2  m-2 mx-4 rounded-full border-2 border-blue-500 bg-white font-semibold font-sans'>SIGNUP</button>
    </div>
    </ul>
   

<div className="hamburger  mr-2" onClick={navbarToggle}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white font-bold">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
</svg>
</div>

  </nav>
  )
}

export default Header