import React, {useState } from 'react';
import Profile from "../img/Avatar Image.svg";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import profiledet from "./Tabs"
import { FaShare } from 'react-icons/fa';
import LabTabs from './Tabs';
import { InputText } from "primereact/inputtext";
import wic from "../img/whatsapp-color-svgrepo-com.svg";
import lic from "../img/link-circle-svgrepo-com.svg";
import gic from "../img/gmail-svgrepo-com.svg"



const ProfilePage = () => {
  const [color, setColor] = useState('');
  const[image,setimage] = useState(Profile);
  const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna id aliquet ultrices, justo nisl tincidunt nunc, ac lacinia nunc nisl nec nunc. Nulla facilisi. Sed euismod, urna id aliquet ultrices, justo nisl tincidunt nunc, ac lacinia nunc nisl nec nunc. Nulla facilisi.";
  const preced = "Kongu Engineering college"
  const exit = "Google, California"
  // const [image2, setImage] = React.useState(Profile);

    const [showPopWindow, setShowPopWindow] = useState(false);
  
    const handleShareButtonClick = () => {
      setShowPopWindow(true);
    };
  
    const closePopWindow = () => {
      setShowPopWindow(false);
    };
    
    const backgroundImage = require('../img/whatsapp.png');
  return (
    <div className='py-12'>
    
    <div className='flex flex-row right-4  px-2 w-[1300px] h-[750px] container ml-10 mt-5 rounded-3xl'
    style={
      {
        backgroundImage: `url(${gic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // filter: 'blur(10px)'
      }
    }> 
    <div className='bg-[#F1ECFF] bg-opacity-8 backdrop-filter  w-[1300px] h-[850px] backdrop-blur-lg p-2 rounded-2xl'>
    <div className="flex flex-col items-center font-poppins">
    <button className="flex absolute top-3 right-4 p-1 text-gray-500 hover:text-gray-700"
    onClick={handleShareButtonClick}>
        <FaShare className="mr-1" />
        Share
      </button>
      <img
        src={image}
        alt="Profile"
        className="w-32 h-32 rounded-full"
      />
      {/* <InputText
              type="file"
              onChange={(event) => {
                setImage(URL.createObjectURL(event.target.files[0]));
              }}
            /> */}
      <h1 className="text-3xl font-bold mt-4 ">Nekelash</h1>
      <p className="text-2xl font-bold">Backend developer</p>
      <p className="text-2xl font-bold mb-2">Warrior</p>
      <p className="text-2xl font-bold mb-1">I AM DOWN, BUT I NOT LET YOU DOWN</p>
    <div className="flex flex-row justify-center items-center py-3 px-2 ml-2">
      <div className="max-w-md h-[220px] w-[600px] p-4 bg-gray-100 rounded-lg shadow-lg border-2 border-gray-500">
        <h1 className="text-2xl font-bold mb-4">Bio</h1>
        <p className="text-left text-2xl font-bold mb-4">
        {bio}
        </p>
      </div>
      <div className="max-w-md w-[600px] h-[220px] ml-5 p-4 px-2 bg-gray-100 rounded-lg shadow-lg border-2 border-gray-500">
      <div className='px-5'>
      <label className='list-decimal text-2xl font-bold mb-4'>
        <h1 className="text-2xl font-bold mb-4">Skills and years of experience</h1>
        {/* <input type="checkbox" className="hidden" /> */}
        {/* <span className="list-marker"></span> */}
        
        <li>AutoCAD 2011 - 2Yrs</li>
        <li>Fusion 360 -4Yrs</li>
        <li>CRED 7.1 -3Yrs</li>
        <li>SolidWorks 2018 - 3Yrs</li>
        <li>Selenium and Java - 1Yrs</li>

      </label>
      </div>
      </div>
    </div>
    
      <div className="flex flex-row py-3">
      <div className="max-w-md p-4 bg-gray-100 rounded-lg shadow-lg py-2 border-2 border-gray-500">
          <h1 className="text-2xl font-bold mb-4">Preceding
          <p className="text-center">
          {preced}
          </p>
          </h1>
      </div>
      <div className="max-w-md ml-3 p-4 bg-gray-100 rounded-lg shadow-lg py-2 border-2 border-gray-500">
          <h1 className="text-2xl font-bold mb-4">Existing
          <p className="text-center">
          {exit}
          </p>
          </h1>
      </div>
    </div>
    <div className='flex flex-row py-6 -mx-4'>
    <div className="max-w-md ml-4 p-4 bg-gray-100 rounded-lg shadow-lg py-5 px-4 border-2 border-gray-500">
          <h1 className="text-2xl font-bold mb-4">Email
          <p className="text-center">
          israth786anwar@gmail.com
          </p>
          </h1>
      </div>
      <div className="max-w-md ml-4 p-4 bg-gray-100 rounded-lg shadow-lg py-5 px-4 border-2 border-gray-500">
          <h1 className="text-2xl font-bold mb-4">Phone
          <p className="text-center">
          +91 99999 xxxxx
          </p>
          </h1>
      </div>
      <div className="max-w-md ml-4 p-4 bg-gray-100 rounded-lg shadow-lg py-5 px-4 border-2 border-gray-500">
          <h1 className="text-2xl font-bold mb-4">social handles
          <p className="text-center">
          linkedin.com/in/syed-israth-786268202
          </p>
          </h1>
      </div>
      </div>
    </div>
    <div className="flex flex-row justify-center items-center py-3 px-2 ml-2">
          <h1 className="text-2xl font-bold mb-4">Schedule page link<span> </span>
         <span className="text-blue-500">
        <a href={'linkedin.com/in/syed-israth-786268202'} className="underline"> Click here </a>
      </span>
         </h1>
      </div>
    
    </div>

    {showPopWindow && (
        <div className="pop-window px-4 py-2">
          <div className="share-icons py-2">
            <a href="whatsapp://send?text=Check%20out%20this%20awesome%20content!">
              <img src={wic} alt="WhatsApp"
              className='w-8 h-10 rounded-full px-1' />
            </a>
            <a href="mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}:?subject=Check%20out%20this%20awesome%20content!&body=I%20thought%20you%20might%20like%20this%20link:%20https://example.com">
              <img src={gic} alt="Email"
              placeholder='gmail'
              className='w-8 h-10 rounded-full px-1' />
            </a>
            <a href="https://example.com">
              <img src={lic} alt="Link"
              className='w-8 h-10 rounded-full px-0.2' /> 
            </a>
          </div>
          <button onClick={closePopWindow}>Close</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default ProfilePage;
