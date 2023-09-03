import React,{useState} from "react";
import Header from '../components/Header';
import { Button, Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import '../App.css';
const Invite = ()=>
{
    return(
        <div>
            <Header/>
            <h1 className="font-bold text-[30px] p-8 font-poppins text-black">Invite Sent</h1>
            <div className="border mx-8 rounded-md h-[30em] font-poppins overflow-y-scroll scrollbar-hidden">
            <div className="grid grid-cols-2">
                <h1 className="font-semibold flex justify-end items-center text-[25px]">Choose Your Domain</h1>
                <OutlinedInput sx={{margin:'1em',width:"50%",borderRadius:"10em",height:"50%"}}
                    id="outlined-adornment-search"
                    endAdornment={<InputAdornment position="end">
                        <SearchIcon/>
                    </InputAdornment>}
                    aria-describedby="outlined-search-helper-text"
                    inputProps={{
                    'aria-label': 'search',
                    }}
                />
                </div>
                <div className="columns-3 pt-5 pl-44">
                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Engineering</button>
                <button type="button" class="text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Cs&IT</button>
                <button type="button" class="text-yellow-300 hover:text-white border border-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Science</button>
                <button type="button" class="text-green-400 hover:text-white border border-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Sports</button>
                <button type="button" class="text-purple-400 hover:text-white border border-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Banking</button>
                <button type="button" class="text-pink-300 hover:text-white border border-pink-300 hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Law</button>
                <button type="button" class="text-[#fb923c] hover:text-white border border-[#fb923c] hover:bg-[#eab308] focus:ring-4 focus:outline-none focus:ring-[#eab308] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Media</button>
                <button type="button" class="text-[#bef264] hover:text-white border border-[#bef264] hover:bg-[#a3e635] focus:ring-4 focus:outline-none focus:ring-[#a3e635] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Sales&Marketing</button>
                <button type="button" class="text-[#a5f3fc] hover:text-white border border-[#a5f3fc] hover:bg-[#67e8f9] focus:ring-4 focus:outline-none focus:ring-[#a5f3fc] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Medical Science</button>
                <button type="button" class="text-[#fda4af] hover:text-white border border-[#fda4af] hover:bg-[#fb7185] focus:ring-4 focus:outline-none focus:ring-[#fda4af] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Architecture</button>
                <button type="button" class="text-[#7f1d1d] hover:text-white border border-[#7f1d1d] hover:bg-[#450a0a] focus:ring-4 focus:outline-none focus:ring-[#7f1d1d] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Fashion</button>
                <button type="button" class="text-[#78716c] hover:text-white border border-[#78716c] hover:bg-[#525252] focus:ring-4 focus:outline-none focus:ring-[#78716c] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Advertising</button>

                <button type="button" class="text-[#a5f3fc] hover:text-white border border-[#a5f3fc] hover:bg-[#67e8f9] focus:ring-4 focus:outline-none focus:ring-[#a5f3fc] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Medical Science</button>
                <button type="button" class="text-[#fda4af] hover:text-white border border-[#fda4af] hover:bg-[#fb7185] focus:ring-4 focus:outline-none focus:ring-[#fda4af] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Architecture</button>
                <button type="button" class="text-[#7f1d1d] hover:text-white border border-[#7f1d1d] hover:bg-[#450a0a] focus:ring-4 focus:outline-none focus:ring-[#7f1d1d] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Fashion</button>
                <button type="button" class="text-[#78716c] hover:text-white border border-[#78716c] hover:bg-[#525252] focus:ring-4 focus:outline-none focus:ring-[#78716c] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Advertising</button>
                <button type="button" class="text-[#a5f3fc] hover:text-white border border-[#a5f3fc] hover:bg-[#67e8f9] focus:ring-4 focus:outline-none focus:ring-[#a5f3fc] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Medical Science</button>
                <button type="button" class="text-[#fda4af] hover:text-white border border-[#fda4af] hover:bg-[#fb7185] focus:ring-4 focus:outline-none focus:ring-[#fda4af] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Architecture</button>
                <button type="button" class="text-[#7f1d1d] hover:text-white border border-[#7f1d1d] hover:bg-[#450a0a] focus:ring-4 focus:outline-none focus:ring-[#7f1d1d] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Fashion</button>
                <button type="button" class="text-[#78716c] hover:text-white border border-[#78716c] hover:bg-[#525252] focus:ring-4 focus:outline-none focus:ring-[#78716c] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Advertising</button>
                <button type="button" class="text-[#a5f3fc] hover:text-white border border-[#a5f3fc] hover:bg-[#67e8f9] focus:ring-4 focus:outline-none focus:ring-[#a5f3fc] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Medical Science</button>
                <button type="button" class="text-[#fda4af] hover:text-white border border-[#fda4af] hover:bg-[#fb7185] focus:ring-4 focus:outline-none focus:ring-[#fda4af] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Architecture</button>
                <button type="button" class="text-[#7f1d1d] hover:text-white border border-[#7f1d1d] hover:bg-[#450a0a] focus:ring-4 focus:outline-none focus:ring-[#7f1d1d] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Fashion</button>
                <button type="button" class="text-[#78716c] hover:text-white border border-[#78716c] hover:bg-[#525252] focus:ring-4 focus:outline-none focus:ring-[#78716c] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Advertising</button>
                <button type="button" class="text-[#a5f3fc] hover:text-white border border-[#a5f3fc] hover:bg-[#67e8f9] focus:ring-4 focus:outline-none focus:ring-[#a5f3fc] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Medical Science</button>
                <button type="button" class="text-[#fda4af] hover:text-white border border-[#fda4af] hover:bg-[#fb7185] focus:ring-4 focus:outline-none focus:ring-[#fda4af] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Architecture</button>
                <button type="button" class="text-[#7f1d1d] hover:text-white border border-[#7f1d1d] hover:bg-[#450a0a] focus:ring-4 focus:outline-none focus:ring-[#7f1d1d] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Fashion</button>
                <button type="button" class="text-[#78716c] hover:text-white border border-[#78716c] hover:bg-[#525252] focus:ring-4 focus:outline-none focus:ring-[#78716c] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 rounded-full shadow-lg w-1/2">Advertising</button>
                
                
                
                </div>
            </div>

        </div>

    )
}
export default Invite;