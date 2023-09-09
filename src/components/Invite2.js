import React from "react";
import Header from "./Header";
import { InputAdornment } from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from "@mui/icons-material/Search";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import VideocamIcon from '@mui/icons-material/Videocam';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import InfoIcon from '@mui/icons-material/Info';

const Invite2 =()=>
{
    const lists=[
        {
            id:1,
            image:"Avatar",
            name:"John issac",
            role:"Software Devops Engineer",
            time_starts:"9pm",
            time_ends:"11pm",
            audio_fee:"Rs:1/min",
            video_fee:"Rs:1/min",

        },
        {
            id:2,
            image:"Avatar",
            name:"John issac",
            role:"Software Devops Engineer",
            time_starts:"9pm",
            time_ends:"11pm",
            audio_fee:"Rs:1/min",
            video_fee:"Rs:1/min",

        },
        {
            id:3,
            image:"Avatar",
            name:"John issac",
            role:"Software Devops Engineer",
            time_starts:"9pm",
            time_ends:"11pm",
            audio_fee:"Rs:1/min",
            video_fee:"Rs:1/min",

        },
        {
            id:4,
            image:"Avatar",
            name:"John issac",
            role:"Software Devops Engineer",
            time_starts:"9pm",
            time_ends:"11pm",
            audio_fee:"Rs:1/min",
            video_fee:"Rs:1/min",

        },

    ]
    return(
        <div className="font-poppins">
            <Header/>
            <div className="grid grid-cols-[1fr_5fr]">
            <div className="m-5">
                <div className="flex gap-44 items-baseline">
                     <h1 className="font-bold items-center text-[20px]">Filters</h1>
                     <button type="button" class="bg-black text-white hover:text-white border border-black-700 hover:bg-gray-600 focus:ring-2 focus:ring-black-300 focus:outline-none font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full">Apply</button>
                </div>
                <div className="shadow shadow-[#0094FF] w-full rounded mt-5">
                <h1 className="font-bold items-center text-[15px] p-2">Experience</h1>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">0yrs-1yrs</span>
                </label> 
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">2yrs-4yrs</span>
                </label> 
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">4yrs-6yrs</span>
                </label> 
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">7yrs-8yrs</span>
                </label> 
                <label className='flex items-center pl-2 pb-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">&gt;10yrs</span>
                </label> 
                </div>
                <div className="shadow shadow-[#0094FF] w-full rounded mt-5">
                <h1 className="font-bold items-center text-[15px] p-2">Timing</h1>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">AM</span>
                </label> 
                <label className='flex items-center pl-2 pb-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">PM</span>
                </label> 
             </div>  
             <div className="shadow shadow-[#0094FF] w-full rounded mt-5">
                <h1 className="font-bold items-center text-[15px] p-2">Budget</h1>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Under &#8377;100</span>
                </label>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">&#8377;100-&#8377;300</span>
                </label>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">&#8377;300-&#8377;600</span>
                </label>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">&#8377;600-&#8377;900</span>
                </label>
                <label className='flex items-center pl-2 pb-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Above &#8377;1000</span>
                </label>
            </div>  
            <div className="shadow shadow-[#0094FF] w-full rounded mt-5">
                <h1 className="font-bold items-center text-[15px] p-2">Tag</h1>
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Warrior</span>
                </label> 
                <label className='flex items-center pl-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Leader</span>
                </label> 
                <label className='flex items-center pl-2 pb-2'>
                    <input className='checkbox checkbox-sm shrink-0 rounded-sm focus:ring:0 accent-indigo-500 to-blue-500' type="checkbox" class="checkbox"/>
                    <span class="select-none text-sm ml-2 font-semibold ">Mentor</span>
                </label> 
            </div>            
                </div>
                <div className="m-5 border rounded-md">
                <div className="p-4 grid grid-cols-2">
                    <h2 className="flex justify-start font-bold text-[1.5em]"><span className="text-[#0094FF] ">Magic</span>Search</h2>
                    <OutlinedInput sx={{width:"100%",borderRadius:"10em",height:"75%"}}
                    id="outlined-adornment-search"
                    endAdornment={<InputAdornment position="end">
                        <SearchIcon/>
                    </InputAdornment>}
                    placeholder="Name/Skills/School/College/Company"
                    aria-describedby="outlined-search-helper-text"
                    inputProps={{
                    'aria-label': 'search',
                    }}
                />
                <div className="mt-5">
                    <label className="shadow shadow-[gray] rounded-full pl-2">
                        Sort By:
                        <select name="Sort By" defaultValue="Relevance" className="rounded-full">
                            <option value="Relevance">Relevance</option>
                            <option value="Price--Low to High">Price--Low to High</option>
                            <option value="Price--High to Low">Price--High to Low</option>
                            <option value="Newest First">Newest First</option>
                        </select>
                    </label>
                </div>                    
                    </div>
                    {
                        lists.map((list)=>
                        (
                            <div className="flex justify-between border rounded-xl shadow-md m-5 p-3">
                            {/* profile + name+ role begins */}
                            <div className="flex items-center">
                            <img
                            alt="img" src={`../img/Avatar.jpg`}
                            className=" m-2 h-[100px] w-[100px] rounded-full object-cover"
                            />
                            <div className="flex flex-col justify-center">
                                <h1>{list.name}</h1>
                                <p>{list.role}</p>
                            </div>
                            </div>
                            {/* profile + name+ role ends */}
                            {/* timing and fee starts */}
                            <div className="flex flex-col justify-evenly items-center">
                            <h2 className="text-[1em] tracking-[0.050em]">Time Available:<span>{list.time_starts}</span>-<span>{list.time_ends}</span></h2>
                            {/* call type begins */}
                            <div className="grid grid-cols-2 m-2 gap-5">
                                <div className="flex flex-col  items-center">
                                <HeadsetMicIcon/>
                                <p>{list.audio_fee}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                <VideocamIcon/>
                                <p>{list.video_fee}</p>
                                </div>
                            </div>
                            {/* call type ends */}
                            </div>
                            {/* timing and fee ends */}
                            {/* invite begins */}
                            <div className="flex flex-col justify-evenly items-center">
                            <button className="flex border rounded-3xl text-white p-2 bg-[#8284EA]">
                                <p className="mx-1">Invite</p>
                                <SendIcon/>
                            </button>
                            <div>
                                    <FavoriteBorderIcon/>
                                    <BookmarkBorderIcon/>
                                    <InfoIcon/>
                            </div>
                            </div>
                            {/* invite ends */}
                            </div>
                        ))
                    }
                </div>
           </div>
        </div>
    )
}
export default Invite2;