import React from "react";
import Logo from "../img/logo.jpg";
const Footer = () => {
  return (
    <div className=" mt-20 h-80 w-full bg-black flex">
      <div>
        <img className="h-10" src={Logo} />
      </div>
      <div>
        <div className="flex">
          <div>
            <h1 className="text-white">About</h1>
            <h1 className="text-white">Contact Us</h1>
            <h1 className="text-white">Terms of Service</h1>
            <h1 className="text-white">Privacy</h1>
          </div>
          <div>
            <h1 className="text-white">Pricing</h1>
            <h1 className="text-white">Blog</h1>
            <h1 className="text-white">Creator Report 2022</h1>
            <h1 className="text-white">Caurosal Maker</h1>
          </div>
        </div>
        <div className="flex">
          <h1 className="text-white">LinkedIn</h1>
          <h1 className="text-white">Twitter</h1>
          <h1 className="text-white">Instagram</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
