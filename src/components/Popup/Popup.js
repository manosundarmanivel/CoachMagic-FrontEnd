import React,{useState} from "react";
import "./Popup.css";
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close'; 

export const Popup = ({ closePopup, sendButtonClick }) => {
  const [invitationAccepted, setInvitationAccepted] = useState(false);
  const [invitationRejected, setInvitationRejected] = useState(false);
  const handleButtonClick = () => {
    // Send a message back to the parent component
    sendButtonClick("Button clicked in Popup!");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 shadow-md rounded-md w-2/5">
      <h1 className="text-6xl font-bold">QUESTION DETAILS</h1>
      <h2 className="text-lg font-semibold">Name: John</h2>
      <h2 className="text-lg font-semibold">Course : Computer Science and Engineering</h2>
      <h2 className="font-semibold pt-2">Request About</h2>
        <h2 className="text-lg font-semibold">Service Name : Career Guidance</h2>
     
      <h2 className="text-lg font-semibold pt-1">Question</h2>
      <div className="text-justify"> 
      <h1>DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes.</h1></div>
        <h2 className="text-lg font-semibold pt-2">Request Mode</h2>
        <div className="grid grid-cols-3 m-2 gap-5">
          <div className="flex gap-1 items-center">
            <PhoneIcon />
            <p>Audio</p>
          </div>
          <div className="flex gap-1 items-center">
            <AccessTimeIcon />
            <p >7.00-8.00PM</p>
          </div>
          <div className="flex gap-1 items-center">
            <p className="p-2">&#8377;100</p>
          </div>
          </div>
          
        <div className="flex flex-col justify-evenly items-center pt-2">
            <div className="flex gap-5 justify-inbetween items-center">
              <button className="bg-green-400 p-2 rounded-md" onClick={() => setInvitationAccepted(true)}><DoneIcon></DoneIcon>Accept</button>
              <button className="bg-red-500 p-2 rounded-md" onClick={()=>setInvitationRejected(true)}><CloseIcon></CloseIcon>Reject</button>
        </div>
              {invitationAccepted && (
    <div className="mt-4 text-green-500 font-semibold">
      Invitation Accepted!
    </div>
  )}
   {invitationRejected && (
    <div className="mt-4 text-red-500 font-semibold">
      Invitation Rejected!
    </div>
  )}
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={closePopup}
        >
          Close
        </button>
      </div>
    </div>
            </div>
         
       
  );
};