import React,{useState} from "react";
import Header from './Header';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Popup } from "./Popup/Popup";

const Inviteget=()=>{
    const [open, setOpen] = useState(false);
    const [invitationAccepted, setInvitationAccepted] = useState(false);
    return(
        <div>
            <Header/>
            <div className="m-4">
                <div className="bg-blue-200 shadow-2xl shadow-gray-300 w-[500px] ml-[400px] rounded-md" >
                    {/*<h1 className="p-2 font-bold">VIEW DETAILS</h1>*/}
                        <div className="flex justify-center p-2">
                        <img src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=ahypUC_KTc95VOsBkzLFZiCQ0VJwewfrSV43BOrLETM=" className=" h-[100px] w-[100px] rounded-full object-cover"></img>
                        </div>
                        <div className="p-2 text-center font-semibold">
                        <h1>NAME : John Issac</h1>
                        <h1>TAG : Mentor</h1>
                        </div>
                </div>

                <h1 className="font-bold">REQUEST DETAILS </h1>
                {/*<------------------------------------question part------------------------------------------------------>*/}
                <div className="grid grid-cols-2">
                <div className="flex justify-between border rounded-xl shadow-md m-5 p-3">
                    <div className="flex flex-col text-justify">
                        <h1 className="font-bold">Service Name</h1>
                        <h1>Career Guidance</h1>
                    </div>
                    <div className="flex flex-col justify-evenly items-center">
                        <button  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"onClick={() => setOpen(true)}>View Details </button>
                       {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
                    </div>
                </div>

                <div className="flex justify-between border rounded-xl shadow-md m-5 p-3">
                    <div className="flex flex-col text-justify">
                        <h1 className="font-bold">Service Name</h1>
                        <h1>Doubt Clarification</h1>
                    </div>
                    <div className="flex flex-col justify-evenly items-center">
                        <button  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"onClick={() => setOpen(true)}>View Details </button>
                       {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
                    </div>
                </div>
                
                <div className="flex justify-between border rounded-xl shadow-md m-5 p-3">
                    <div className="flex flex-col text-justify">
                        <h1 className="font-bold">Service</h1>
                        <h1>Job Search</h1>
                    </div>
                    <div className="flex flex-col justify-evenly items-center">
                        <button  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"onClick={() => setOpen(true)}>View Details </button>
                       {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
                    </div>
                </div>
                
                <div className="flex justify-between border rounded-xl shadow-md m-5 p-3">
                    <div className="flex flex-col text-justify">
                        <h1 className="font-bold">Question</h1>
                        <h1>Devops</h1>
                    </div>
                    <div className="flex flex-col justify-evenly items-center">
                        <button  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"onClick={() => setOpen(true)}>View Details </button>
                       {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
                    </div>
                </div>

                <div className="flex justify-between border rounded-xl shadow-md m-5 p-3">
                    <div className="flex flex-col text-justify">
                        <h1 className="font-bold">Question</h1>
                        <h1>Devops</h1>
                    </div>
                    <div className="flex flex-col justify-evenly items-center">
                        <button  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"onClick={() => setOpen(true)}>View Details </button>
                       {open ? <Popup text="Hello there!" closePopup={() => setOpen(false)} /> : null}
                    </div>
                </div>
                </div>
           </div> 
            










        </div>
    )
}
export default Inviteget;