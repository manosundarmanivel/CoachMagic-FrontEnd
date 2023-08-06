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
    <nav className='nav-container shadow-md flex justify-between items-center'>
    {/* <img src={Logo} className='w-[160px] logo text-white lg:ml-10 mr-10 ml-2'></img> */}
    <h1 className='logo text-black lg:ml-10 mr-10 ml-2 font-bold font-sans text-3xl'>Coach <span className='text-[#0094FE] '>Magic</span></h1>
    <ul className={ toggle?"navbar":'navbar nav-open'}>
   
       <li><a href="#" className="links font-bold text-md">Pricing</a></li>
       <li><a href="#" className="links font-bold text-md">Asap Mentor
       </a></li>
       <li><a href="#" className="links font-bold text-md">About</a></li>
       <div className="btn-container">
       <button className='p-3  m-2 mx-4 rounded-2xl border-2 border-black bg-white font-semibold font-sans'>Login</button>
       <button className='p-3  m-2 mx-4 rounded-2xl border-2 border-black bg-black text-white font-semibold font-sans'>Sign up free</button>
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