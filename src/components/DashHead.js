import React from 'react'
import logo from "../img/CM_newlogo1.jpg"
// import MenuIcon from '@mui/icons-material/Menu';
const DashHead = () => {
  return (
  
        <div className='flex flex-col justify-between items-center w-auto'>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-13 h-12" alt="Dp" src={logo} />
                </div>
                <div className="flex flex-row items-center">
                  <div className="flex flex-col">
                    <div><h1 className='text-[20px] font-bold pr-3'>Coach{" "}<span className='text-[#4752d8]'>Magic</span> </h1></div>
                    <div class="ml-2 text-[10px] italic font-normal hover:font-bold ">We won't let you down</div>
                  </div>
                </div>
              </div>
            </div>
            
        </div>
    
  )
}

export default DashHead