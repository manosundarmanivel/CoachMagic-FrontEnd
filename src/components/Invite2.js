import React from "react";
import Header from "./Header";

const Invite2 =()=>
{
    return(
        <div>
            <Header/>
            <div className="mt-6 ml-5">
                <div className="flex gap-44 items-baseline">
                     <h1 className="font-bold items-center text-[20px]">filters</h1>
                     <button type="button" class="bg-black text-white hover:text-white border border-black-700 hover:bg-gray-600 focus:ring-2 focus:ring-black-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full">Apply</button>
                </div>
                <div className="shadow shadow-[#0094FF] w-3/12 rounded">
                <h1 className="font-bold items-center text-[15px] p-2">Sort by choice</h1>
                <label className='flex items-center pl-2'>
                    <input className='apperance-none checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Freelancer</span>
                </label> 
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Industrial People</span>
                </label>  
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Educators</span>
                </label>  
                <label className='flex items-center pl-2 pb-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Programmers</span>
                </label>  
                </div>
                <div className="shadow shadow-[#0094FF] w-3/12 rounded mt-5">
                <h1 className="font-bold items-center text-[15px] p-2">Timing</h1>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">8am-10am</span>
                </label> 
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">12pm-2am</span>
                </label> 
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">4pm-6pm</span>
                </label> 
                <label className='flex items-center pl-2 pb-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Anytime</span>
                </label> 
                </div>

                <div className="shadow shadow-[#0094FF] w-3/12 rounded mt-5">
                <h1 className="font-bold items-center text-[15px] p-2">Experience</h1>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">1yrs-3yrs</span>
                </label> 
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">&gt;5yrs</span>
                </label> 
                <label className='flex items-center pl-2 pb-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Fresher</span>
                </label> 
                </div>

           </div>
        </div>
    )
}
export default Invite2;