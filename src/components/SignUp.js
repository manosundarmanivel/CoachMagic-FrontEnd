import React from 'react'
import DashHead from './DashHead'
import OtpVerification from './OtpVerification'

const Signup = () => {
    const [setOtp,showOtp]=React.useState(false);
    const handleOtpGenerate=()=>
    {
        showOtp(!setOtp);
    }
  return (
    <div>
    {!setOtp &&
    <div className='flex justify-center items-center p-7 text-[black]'>
    <div className='border-[1px] border-dotted rounded-[10px] border-[black] w-2/6 "container p-5'>
        <div className="image flex justify-center my-0">
            <DashHead/>
        </div>
        <div className='flex flex-col gap-0.5'>
            <h3 className='mt-2.5 font-bold text-2xl'>Signup</h3>
            <p className=''>Just some details to get you in!</p>
            <label className='my-1.5'>
                <input type="text" placeholder='Username' className='bg-transparent w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500'  />
            </label>
            <label className='my-1.5'>
                <input type="email/number" placeholder='Email/Phone' className='bg-transparent w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
            </label>
            <label className='my-1.5'>
                <input type="password" placeholder='Password'  className='bg-transparent w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
            </label>
            <label className='my-1.5'>
                <input type="password" placeholder='Confirm password'  className='bg-transparent w-full text-sm  px-4 py-3 bg-gray-900 border  border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500 to-blue-500' />
            </label>
            <label className='flex items-center'>
            <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
            <span class="select-none text-sm ml-2 ">I agree with the terms and conditions</span>
           </label>  
           <div className="btn mt-2 flex justify-center">
               <button className='text-[white] w-3/6 hover:text-[gray] p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500 bg-gradient-to-r from-indigo-500 to-blue-500' onClick={handleOtpGenerate}>Signup</button>
            </div>
            <label className='text-[black] hover:underline hover:text-white-500 mt-1.5 text-center'>
               <p className=''>Already registered?<a href="" className='text-[black] '>Login</a></p>
            </label>
            <div className="footer rounded-[10px] grid grid-cols-2 mt-2">
        <a href="" className='text-[black] flex justify-start hover:underline hover:text-white-500'>Support</a>
        <a href="" className='text-[black]  flex justify-end hover:underline hover:text-white-500'>Customer Care</a>
        </div>
        </div>
    </div>
    </div>

    }

    
    {
        setOtp &&
        (
            <OtpVerification/>
        )
    }
    </div>
  )
}

export default Signup