import React, {useState } from 'react';
import Profile from "../img/Avatar Image.svg";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import profiledet from "./Tabs"
import LabTabs from './Tabs';
import { InputText } from "primereact/inputtext";


const ProfilePage = () => {
    const[image,setimage] = useState(Profile);
  const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna id aliquet ultrices, justo nisl tincidunt nunc, ac lacinia nunc nisl nec nunc. Nulla facilisi. Sed euismod, urna id aliquet ultrices, justo nisl tincidunt nunc, ac lacinia nunc nisl nec nunc. Nulla facilisi.";
  const [image2, setImage] = React.useState(Profile);

  return (
    <div className='flex pl-10 py-12'>
    {/* <Divider sx={{ margin: "38rem" }} /> */}
    <Divider sx={{ marginLeft: "38rem" }} />
    <div className='bg-purple-500 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 rounded-lg'>
    <div className="flex flex-col items-center font-poppins">
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
      <h1 className="text-2xl font-bold mt-4">Nekelash</h1>
      <p className="text-gray-500">Backend developer</p>
      <p className="text-2xl font-bold mb-4">Warrior</p>
    <div className="flex-col justify-center items-center py-4 ">
      <div className="max-w-md p-3 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
        <p className="text-center">
        {bio}
        </p>
      </div>
    </div>
    
      <div className="flex-col justify-center items-center py-4">
      <div className="max-w-md p-4 rounded-lg shadow-lg py-5 ">
          <h1 className="text-2xl font-bold mb-4">Slogan
          <p className="text-center">
          Anna ungaluku na periya fan na!!!
          </p>
          </h1>
      </div>
    </div>
    <div className='flex flex-row px-2 py-6 ml-2'>
    <div className="max-w-md p-4 rounded-lg shadow-lg py-5">
          <h1 className="text-2xl font-bold mb-4">Email
          <p className="text-center">
          nekelash@gamil.com
          </p>
          </h1>
      </div>
      <div className="max-w-md p-4 rounded-lg shadow-lg py-5">
          <h1 className="text-2xl font-bold mb-4">Phone
          <p className="text-center">
          +91 99999 xxxxx
          </p>
          </h1>
      </div>
      <div className="max-w-md p-4 rounded-lg shadow-lg py-5">
          <h1 className="text-2xl font-bold mb-4">social handles
          <p className="text-center">
          nekelash@gamil.com
          </p>
          </h1>
      </div>
      </div>
    </div>
    </div>
    <Divider sx={{ marginTop: "25px" }} />
    </div>
  );
};

export default ProfilePage;
