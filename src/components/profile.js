import React, { useState } from "react";
import Profile from "../img/Avatar Image.svg";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import profiledet from "./Tabs";
import { FaShare } from "react-icons/fa";
import LabTabs from "./Tabs";
import { InputText } from "primereact/inputtext";
import wic from "../img/whatsapp-color-svgrepo-com.svg";
import lic from "../img/link-circle-svgrepo-com.svg";
import gic from "../img/gmail-svgrepo-com.svg";
import bropic from "../img/bro-prof.png";

const ProfilePage = () => {
  const [color, setColor] = useState("");
  const [image, setimage] = useState(Profile);
  const bio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna id aliquet ultrices, justo nisl tincidunt nunc, ac lacinia nunc nisl nec nunc. Nulla facilisi. Sed euismod, urna id aliquet ultrices, justo nisl tincidunt nunc, ac lacinia nunc nisl nec nunc. Nulla facilisi.";
  const preced = "Kongu Engineering college";
  const exit = "Google, California";
  const [image2, setImage] = React.useState(Profile);

  const [showPopWindow, setShowPopWindow] = useState(false);

  const handleShareButtonClick = () => {
    setShowPopWindow(true);
  };

  const closePopWindow = () => {
    setShowPopWindow(false);
  };

  const backgroundImage = require("../img/whatsapp.png");
  return (
    <div className="py-[90px] ml-[300px] p-10">
      <div className="bg-purple-300 p-10 rounded-3xl flex">
        <div className=" bg-white flex rounded-3xl py-2">
          <div className=" flex flex-col bg-white   rounded-3xl  transform transition duration-300 hover:scale-125">
            <div className="flex flex-col items-center font-poppins">
              <img
                src={bropic}
                alt="Profile"
                className="w-35 h-35  transform transition duration-500 hover:scale-125"
              />
              {/* <InputText
              type="file"
              onChange={(event) => {
                setImage(URL.createObjectURL(event.target.files[0]));
              }}
            /> */}
              <h1 className="text-3xl font-bold mt-5">SYED IRSATH</h1>
              <p className="text-2xl font-bold">Backend developer</p>
              <p className="text-2xl font-bold mb-1">Warrior</p>
              <p className="text-2xl font-bold mb-1">
                I AM DOWN, BUT I NOT LET YOU DOWN
              </p>

              <div className="flex ml-4">
                <div className="p-3 ">
                  <div className="max-w-md h-[220px] w-[600px] p-2 bg-gray-100 rounded-lg shadow-lg border-2 border-black ">
                    <h1 className="text-2xl font-bold mb-4 ml-2">Bio</h1>
                    <p className="text-left text-2xl mb-4 ml-2">{bio}</p>
                  </div>
                  <div className="max-w-md p-2 m-2 ml-0 mt-6 bg-gray-100 rounded-lg shadow-lg py-2 px-4 border-2 border-black w-screen">
                    <h1 className="text-2xl font-bold mb-4">
                      Preceding
                      <p className="text-left font-thin">{preced}</p>
                    </h1>
                  </div>
                </div>
                <div className="p-2 ml-0">
                  <div className="max-w-md w-[600px] h-[220px] ml-0 p-2 px-0 bg-gray-100 rounded-lg shadow-lg border-2 border-black">
                    <div className="px-5 ">
                      <label className="list-decimal text-2xl mb-4">
                        <h1 className="text-2xl font-bold mb-4">
                          Skills and years of experience
                        </h1>

                        <ol type="1" className="py-0">
                          <li>AutoCAD 2011 - 2Yrs</li>
                          <li>Fusion 360 -4Yrs</li>
                          <li>CRED 7.1 -3Yrs</li>
                          <li>SolidWorks 2018 - 3Yrs</li>
                          <li>Selenium and Java - 1Yrs</li>
                        </ol>
                      </label>
                    </div>
                  </div>
                  <div className="max-w-md m-6 ml-0 mt-6 p-4 bg-gray-100 rounded-lg shadow-lg py-2 px-4 border-2 border-black w-screen">
                    <h1 className="text-2xl font-bold mb-4">
                      Existing
                      <p className="text-left font-thin">{exit}</p>
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <div class="grid grid-flow-row py-3 px-8 mr-2 grid-cols-5 ...">
                  <div className="max-w-md p-4 bg-gray-100 rounded-lg shadow-lg py-5 px-4 border-2 border-black col-span-2">
                    <h1 className="text-2xl font-bold mb-4">
                      Email
                      <p className="text-left font-thin">
                        israth786anwar@gmail.com
                      </p>
                    </h1>
                  </div>
                  <div className="max-w-md ml-4 p-4 bg-gray-100 rounded-lg shadow-lg py-5 px-4 border-2 border-black col-span-1">
                    <h1 className="text-2xl font-bold mb-4">
                      Phone
                      <p className="text-left font-thin">+91 99999 xxxxx</p>
                    </h1>
                  </div>
                  <div className="max-w-md ml-4 p-4 bg-gray-100 rounded-lg shadow-lg py-5 px-4 border-2 border-black col-span-2">
                    <h1 className="text-2xl font-bold mb-4">
                      social handles
                      <p className="text-left font-thin text-black">
                        <a href={"linkedin.com/in/syed-israth-786268202"}>
                          linkedin.com/in/syed-israth-786268202
                        </a>
                      </p>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center items-center py-3 px-2 ml-2 transform transition duration-500 hover:scale-125">
              <h1 className="text-2xl font-bold mb-4">
                Schedule page link<span> </span>
                <span className="text-blue-500">
                  <a
                    href={"linkedin.com/in/syed-israth-786268202"}
                    className="underline"
                  >
                    {" "}
                    Click here{" "}
                  </a>
                </span>
              </h1>
            </div>
          </div>

          {/* <div className="text-center p-2">
            <button
              className="p-1 hover:text-gray-700"
              onClick={handleShareButtonClick}
            >
              <FaShare className="mr-1" />
              <h1>Share</h1>
            </button>
          </div> */}
        </div>
        {showPopWindow && (
          <div className="pop-window px-4 py-2 overflow-hidden">
            <div className="share-icons py-2">
              <a href="whatsapp://send?text=Check%20out%20this%20awesome%20content!">
                <img
                  // src={wic}
                  alt="WhatsApp"
                  className="w-8 h-10 rounded-full px-1"
                />
              </a>
              <a href="mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}:?subject=Check%20out%20this%20awesome%20content!&body=I%20thought%20you%20might%20like%20this%20link:%20https://example.com">
                <img
                  // src={gic}
                  alt="Email"
                  placeholder="gmail"
                  className="w-8 h-10 rounded-full px-1"
                />
              </a>
              <a href="https://example.com">
                <img
                  // src={lic}
                  alt="Link"
                  className="w-8 h-10 rounded-full px-0.2"
                />
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
