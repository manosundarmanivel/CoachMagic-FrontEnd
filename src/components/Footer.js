import React from "react";
import Logo from "../img/logo.jpg";
const Footer = () => {
  return (
    <div className=" mt-20 h-100 w-full bg-[#141414] ">
      <div className="p-20 flex grid grid-cols-2">
      <div>
      <h1 className=' text-white font-bold font-sans text-6xl'>Coach <span className='text-[#0094FE] '>Magic</span></h1>
      </div>
      <div>
        <div className="flex ">
          <div className="p-5 ml-10 grid grid-rows-4 gap-3">
            <h1 className="text-white">About</h1>
            <h1 className="text-white">Contact Us</h1>
            <h1 className="text-white">Terms of Service</h1>
            <h1 className="text-white">Privacy</h1>
          </div>
          <div className="p-5 ml-40 grid grid-rows-4 gap-3">
            <h1 className="text-white">Pricing</h1>
            <h1 className="text-white">Blog</h1>
            <h1 className="text-white">Creator Report 2022</h1>
            <h1 className="text-white">Caurosal Maker</h1>
          </div>
        </div>
        <div className="flex pl-5 pt-5 ml-10">
          <h1 className="text-white">LinkedIn</h1>
          <h1 className="text-white">Twitter</h1>
          <h1 className="text-white">Instagram</h1>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
