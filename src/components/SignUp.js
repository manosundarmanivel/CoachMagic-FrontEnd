import React from 'react'
import Logo from '../img/logo.jpg'


const Signup = () => {
  return (
    <div className='flex justify-center items-center h-screen p-7 bg-black'>
            <div className=' border-[4px] border-[solid] rounded-[10px] border-[white]'>
            <fieldset className= 'text-center rounded-full'>
                <div className="container rounded-[10px] p-10 ">
                    <div className="image flex justify-center rounded-[10px]">
            <img className='w-24 md:w-20 lg:w-36 xl:w-37 ' src={Logo}/>
            </div>
            <br />
                 <h3 className='text-[white]'>Signup</h3> 
                <p className='text-[white]'>Just some details to get you in!</p>
                <div className="input flex flex-col">
                    <label for="">
                    <input type="text" placeholder='Username' className='text-start from-transparent text-[white] rounded-[8px] border-[1px] px-10 mx-1 my-1 border-[solid] border-[white]'  />
                    </label>
                    <label for="">
                    <input type="email/number" placeholder='Email/Phone' className='text-start from-transparent focus:bg-inherit text-[white] rounded-[8px] border-[1px] px-10 mx-1 my-1 border-[solid] border-[white]'  />
                    </label>
                    <label for="">
                    <input type="password" placeholder='password'  className='text-start  text-[white] rounded-[8px] border-[1px] px-10 mx-1  my-1 border-[solid] border-[white]' />
                    </label>
                    <label for="">
                    <input type="password" placeholder='Confirm password'  className='text-start text-[white] rounded-[8px] border-[1px] px-10 mx-1  my-1 border-[solid] border-[white]' />
                    </label>
                </div>
                <div className="btn">
                    <button className='text-[white] border-[2px] border-[solid] border-[white] px-10 py-1 rounded-[5px] bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-800'  >
                        Signup
                    </button>
                </div>
                <div className="signup  ">
                <p className='text-[white]'>Already registered?</p>
                <a href="" className='text-[white] hover:underline hover:text-white-500'>Login</a>
                </div>
                <div className="footer rounded-[10px] grid grid-cols-2">
                <a href="" className='text-[white] flex justify-start hover:underline hover:text-white-500'>Support</a>
                <a href="" className='text-[white]  flex justify-end hover:underline hover:text-white-500'>Customer Care</a>
                </div>
                </div>
            </fieldset>
            </div>
        </div>
    
  )
}

export default Signup