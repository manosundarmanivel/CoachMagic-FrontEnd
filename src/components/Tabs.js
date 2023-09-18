import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Profile from "../img/Avatar Image.svg";
import { InputText } from "primereact/inputtext";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { TimePicker } from "@mui/x-date-pickers";
import BasicTimePicker from "./TimePicker";

const timezones = [
  "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
  "America/New_York",
  "America/Los_Angeles",
  "Europe/London",
  // Add more timezones as needed
];
export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isToggled, setIsToggled] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };
  const [selectedTimezone, setSelectedTimezone] = useState(timezones[0]);

  const handleTimezoneChange = (event) => {
    setSelectedTimezone(event.target.value);
  };
  const [Mont1, setInput1] = useState("");
  const [Mont2, setInput2] = useState("");
  const [Tue1, setInput3] = useState("");
  const [Tue2, setInput4] = useState("");
  const [Wed1, setInput5] = useState("");
  const [Wed2, setInput6] = useState("");
  const [Thu1, setInput7] = useState("");
  const [Thu2, setInput8] = useState("");
  const [Fri1, setInput9] = useState("");
  const [Fri2, setInput10] = useState("");
  const [Sat1, setInput11] = useState("");
  const [Sat2, setInput12] = useState("");
  const [Sun1, setInput13] = useState("");
  const [Sun2, setInput14] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);

  const [addTime, setAddTime] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };
  const handleCheckboxChange3 = () => {
    setIsChecked3(!isChecked3);
  };
  const handleCheckboxChange4 = () => {
    setIsChecked4(!isChecked4);
  };
  const handleCheckboxChange5 = () => {
    setIsChecked5(!isChecked5);
  };
  const handleCheckboxChange6 = () => {
    setIsChecked6(!isChecked6);
  };
  const handleCheckboxChange7 = () => {
    setIsChecked7(!isChecked7);
  };

  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const handleInputChange3 = (e) => {
    setInput3(e.target.value);
  };
  const handleInputChange4 = (e) => {
    setInput4(e.target.value);
  };

  const handleInputChange5 = (e) => {
    setInput5(e.target.value);
  };
  const handleInputChange6 = (e) => {
    setInput6(e.target.value);
  };

  const handleInputChange7 = (e) => {
    setInput7(e.target.value);
  };
  const handleInputChange8 = (e) => {
    setInput8(e.target.value);
  };

  const handleInputChange9 = (e) => {
    setInput9(e.target.value);
  };
  const handleInputChange10 = (e) => {
    setInput10(e.target.value);
  };

  const handleInputChange11 = (e) => {
    setInput11(e.target.value);
  };
  const handleInputChange12 = (e) => {
    setInput12(e.target.value);
  };

  const handleInputChange13 = (e) => {
    setInput13(e.target.value);
  };
  const handleInputChange14 = (e) => {
    setInput14(e.target.value);
  };

  const [image, setImage] = React.useState(Profile);
  console.log(image);

  const [skills, setSkills] = React.useState([]);
  const [newSkill, setNewSkill] = React.useState("");
  const [newYoe, setNewYoe] = useState([]);

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill + " - " + newYoe + " Years"]);
      setNewSkill("");
      setNewYoe("");
    }
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", fontFamily: "poppins" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" />
            <Tab label="Education & Skills" value="2" />
            <Tab label="Schedule" value="3" />
            <Tab label="Pricing" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <h1 className="text-[#4C535F]">Your Profile Picture</h1>
            <img
              alt="img"
              className=" m-2 h-[100px] w-[100px] rounded-full object-cover"
              src={image}
            />
            <InputText
              type="file"
              onChange={(event) => {
                setImage(URL.createObjectURL(event.target.files[0]));
              }}
            />
            <Divider sx={{ marginTop: "25px" }} />
            <div className="flex">
              <div className="p-2">
                <h1 className="font-[16px] pb-2 pt-2">Full name</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Please enter the full name"
                />
                <h1 className="font-[16px] pb-2 pt-2">Domain</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Please enter the Domain"
                />
                <h1 className="font-[16px] pb-2 pt-2">Bio</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Craft your bio"
                />
                <h1 className="font-[16px] pb-2 pt-2">Tag</h1>
                {/* <input className='bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]' placeholder='Craft your bio'/> */}
                <select
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Select your prefered tag"
                  id="cars"
                  name="cars"
                >
                  <option className="text-[#FAFBFC]" value="">
                    Select your option
                  </option>
                  <option value="volvo">Mentor</option>
                  <option value="saab">Leader</option>
                  <option value="fiat">Warrior</option>
                </select>
              </div>

              <div className="p-2">
                <h1 className="font-[16px] pb-2 pt-2">Email</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Please enter the Email"
                />
                <h1 className="font-[16px] pb-2 pt-2">Phone</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Please enter your phone number"
                />
                <h1 className="font-[16px] pb-2 pt-2">Know about me</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Link to Social Account"
                />
                <h1 className="font-[16px] pb-2 pt-2">Slogan</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Write Your Slogan"
                />
              </div>
            </div>

            <div className="flex p-2 pt-4">
              <button className="text-white bg-black p-3 text-[14px] rounded-md">
                Update Profile
              </button>
              <button className="text-[14px] p-3 pl-8"> Reset</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <ul className="list-disc pl-6">
              {skills.map((skill, index) => (
                <li key={index} className="mb-2">
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Enter a new skill"
                className="p-2 border rounded mr-2"
              />
              <input
                type="text"
                value={newYoe}
                onChange={(e) => setNewYoe(e.target.value)}
                placeholder="Years of Experience"
                className="p-2 border rounded mr-2"
              />
              <button
                onClick={addSkill}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Add Skill
              </button>
              {/* <div className="pb-2 pt-5">
                <h1 className="font-[16px] pb-2 pt-2">Years of Experience</h1>
                <select class="py-2 px-2 border border-gray-200 rounded bg-[#FAFBFC]   w-[186px] hover:border-blue-700 hover:border-[3px] cursor-pointer">
                  <option className="text-[#FAFBFC]" value="">
                    Years
                  </option>
                  <option value="0-1">0 - 1 years</option>
                  <option value="2-5">2 - 5 years</option>
                  <option value="more than 5">more than 5 years</option>
                  <option value="more than 10">more than 10 years</option>
                </select>
              </div> */}
              <div className="flex">
                <div className="p-2">
                  <h1 className="font-[16px] pb-2 pt-2">Preceeding</h1>
                  <input
                    className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                    placeholder="School/College/CompanyName"
                  />
                </div>
                <div className="p-2">
                  <h1 className="font-[16px] pb-2 pt-2">Existing</h1>
                  <input
                    className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                    placeholder="School/College/CompanyName"
                  />
                </div>
              </div>
            </div>
            <div className="flex p-2 pt-10">
              <button className="text-white bg-black p-3 px-7 text-[14px]  rounded-md hover:bg-gray-500">
                Save changes
              </button>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div>
            <div className="max-w-sm py-4">
              <label htmlFor="timezone" className="block font-medium mb-4">
                Select Timezone:
              </label>
              <select
                id="timezone"
                className="block w-full h-10 text-lg p-1 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-600"
                value={selectedTimezone}
                onChange={handleTimezoneChange}
              >
                {timezones.map((timezone) => (
                  <option key={timezone} value={timezone}>
                    {timezone}
                  </option>
                ))}
              </select>
              <p>____________________________________________________</p>
            </div>

            <div classname="ml-3">
              <p className="font-semibold py-3">Available timining in day</p>
              <label className="flex items-center space-x-2 py-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="form-checkbox"
                />
                <span>Monday</span>
              </label>
              {isChecked && (
                <div>
                  <div className="p-2 border-gray-300 rounded flex space-x-4">
                    <div>
                      <BasicTimePicker label={"From"} /> 
                    </div>
                    <div>
                      <div className="flex items-center">
                        <BasicTimePicker label={"To"} />
                        <button
                          onClick={() => {
                            setAddTime(true);
                          }}
                          className=" ml-3 h-10 w-10 rounded-full text-white bg-blue-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  {addTime && (
                    <div className="pl-2 border-gray-300 rounded flex space-x-4">
                    <div>
                      <BasicTimePicker label={"From"} /> 
                    </div>
                    <div>
                      <div className="flex items-center">
                        <BasicTimePicker label={"To"} />
                        <button
                          onClick={() => {
                            setAddTime(true);
                          }}
                          className=" ml-3 h-10 w-10 rounded-full text-white bg-blue-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  )}
                </div>
              )}
              <label className="flex items-center space-x-2 py-2">
                <input
                  type="checkbox"
                  checked={isChecked2}
                  onChange={handleCheckboxChange2}
                  className="form-checkbox"
                />
                <span>Tuesday</span>
              </label>
              {isChecked2 && (
                <div className="p-2border-gray-300 rounded grid gap-20 grid-cols-2">
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 1</label> */}
                    <input
                      placeholder="From"
                      type="text"
                      value={Tue1}
                      onChange={handleInputChange3}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 2</label> */}
                    <input
                      type="text"
                      value={Tue2}
                      placeholder="To"
                      onChange={handleInputChange4}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
              )}
              <label className="flex items-center space-x-2 py-2">
                <input
                  type="checkbox"
                  checked={isChecked3}
                  onChange={handleCheckboxChange3}
                  className="form-checkbox"
                />
                <span>Wednesday</span>
              </label>
              {isChecked3 && (
                <div className="p-2 border-gray-300 rounded grid gap-20 grid-cols-2">
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 1</label> */}
                    <input
                      type="text"
                      placeholder="From"
                      value={Wed1}
                      onChange={handleInputChange5}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 2</label> */}
                    <input
                      type="text"
                      value={Wed2}
                      placeholder="To"
                      onChange={handleInputChange6}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
              )}
              <label className="flex items-center space-x-2 py-2">
                <input
                  type="checkbox"
                  checked={isChecked4}
                  onChange={handleCheckboxChange4}
                  className="form-checkbox"
                />
                <span>Thursday</span>
              </label>
              {isChecked4 && (
                <div className="p-2 border-gray-300 rounded grid gap-20 grid-cols-2">
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 1</label> */}
                    <input
                      type="text"
                      placeholder="From"
                      value={Thu1}
                      onChange={handleInputChange7}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 2</label> */}
                    <input
                      type="text"
                      value={Thu2}
                      placeholder="To"
                      onChange={handleInputChange8}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
              )}
              <label className="flex items-center space-x-2 py-2 py-2">
                <input
                  type="checkbox"
                  checked={isChecked5}
                  onChange={handleCheckboxChange5}
                  className="form-checkbox"
                />
                <span>Friday</span>
              </label>
              {isChecked5 && (
                <div className="p-2 border-gray-300 rounded grid gap-20 grid-cols-2">
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 1</label> */}
                    <input
                      type="text"
                      placeholder="From"
                      value={Fri1}
                      onChange={handleInputChange9}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 2</label> */}
                    <input
                      type="text"
                      value={Fri2}
                      placeholder="To"
                      onChange={handleInputChange10}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
              )}
              <label className="flex items-center space-x-2 py-2 py-2">
                <input
                  type="checkbox"
                  checked={isChecked6}
                  onChange={handleCheckboxChange6}
                  className="form-checkbox"
                />
                <span>Saturday</span>
              </label>
              {isChecked6 && (
                <div className="p-2 border-gray-300 rounded grid gap-20 grid-cols-2">
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 1</label> */}
                    <input
                      type="text"
                      placeholder="From"
                      value={Sat1}
                      onChange={handleInputChange11}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 2</label> */}
                    <input
                      type="text"
                      value={Sat2}
                      placeholder="To"
                      onChange={handleInputChange12}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
              )}
              <label className="flex items-center space-x-2 py-2">
                <input
                  type="checkbox"
                  checked={isChecked7}
                  onChange={handleCheckboxChange7}
                  className="form-checkbox"
                />
                <span>Sunday</span>
              </label>
              {isChecked7 && (
                <div className="p-2 border-gray-300 rounded grid gap-20 grid-cols-2">
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 1</label> */}
                    <input
                      type="text"
                      placeholder="From"
                      value={Sun1}
                      onChange={handleInputChange13}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                  <div>
                    {/* <label className="block mb-1 font-semibold">Input 2</label> */}
                    <input
                      type="text"
                      value={Sun2}
                      placeholder="To"
                      onChange={handleInputChange14}
                      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
              )}
              <p>____________________________________________________</p>
            </div>
            <div className="flex items-center py-4">
              <p className="font-semibold mr-5">
                Block the date and time of unavailable{" "}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded flex items-center space-x-2">
                <svg
                  className="w-5 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>Add Schedule</span>
              </button>
            </div>
            <div className="flex p-2 pt-4">
              <Link to="/">
                <button className="text-white hover:bg-indigo-400 bg-black p-3 text-[14px] rounded-md">
                  Save Changes
                </button>
              </Link>
              <Link to="/settings">
                <button className="text-[15px] p-3 pl-8 hover:text-red-500">
                  {" "}
                  Reset
                </button>
              </Link>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="4">
          <div classname="">
          <p className="flex justify-center font-semibold  text-[1.5em]">Let's Connect For Questions & Answer Session</p>
          <br/>
          <br/>

             <div className="flex justify-between">
              <label for="audio_fee" className="mx-2">Audio 
                <input type="text" id="audio_fee" placeholder="Ruppees" className="border mx-2 rounded-md "/>/min
              </label>
              <label for="video_fee">Video 
                <input type="text" id="video_fee" placeholder="Ruppees" className="border mx-2 rounded-md "/>/min
              </label>
             </div>
                <br/>
              
              <div className="flex flex-col gap-4 ">
             <label className="font-bold">
                Schools
             </label> 
              <select className="">
                <option>Select one</option>
                <option>Acharya vidhaybhavan Matriculation Higher Secondary School</option>
                <option>Acharya vidhaybhavan Matriculation Higher Secondary School</option>
                <option>Acharya vidhaybhavan Matriculation Higher Secondary School</option>
                <option>Acharya vidhaybhavan Matriculation Higher Secondary School</option>
              </select>
              </div>

                <br/>

              <div className="flex flex-col gap-4 ">
             <label className="font-bold">
                Colleges
             </label>
              <select className="">
                <option>Select one</option>
                <option>Kongu Engineering College</option>
                <option>Kumaraguru Engineering College</option>
                <option>Sri krishna Engineering College</option>
                <option>Sri Ramakrishna Engineering College</option>

              </select>
              </div>
              
                <br/>
                <br/>


                <div className="flex justify-evenly">
                  <p>Free Tutoring</p>
                  <div className={`w-12 h-6 bg-violet-400 rounded-full cursor-pointer ${isToggled ? "dark" : " "}`} onClick={toggleSwitch}>
                    <div className="border w-4 h-4 bg-white rounded-full flex justify-start  m-1 dark:mx-7"></div>
                  </div>
                </div>
                
                <br/>
                <br/>
                <br/>

                {
                  isToggled &&
                  <div className="flex justify-center">
                  <p>Your code is  <span className="border p-2 bg-slate-200 rounded-xl">540454</span></p>
                  <br/>
                  <br/>
                  <br/>
                  </div>
                  
                }

                <div className="flex justify-center">
                <button className="border rounded-full bg-violet-400 py-1 px-3">Proceed</button>
                </div>

          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
