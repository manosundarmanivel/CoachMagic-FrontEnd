import React from "react";

import BasicDateCalendar from "./Calender";
import { Divider, Pagination } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";


const Dashboard = () => {
  return (
    <div className="flex ">
      
      <div className="flex flex-wrap font-poppins w-max ">
      <div className="flex  bg-[#F1ECFF] mt-10 p-10 rounded-3xl w-max ">
        <div>
          <div className="flex ">
            <div className="">
              <h1 className="text-[28px] font-bold">Dashboard</h1>
              <h3 className="text-[#958C8C] pt-2 pb-2 ">
                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                ipsum dolor sit amet
              </h3>
            </div>
            <div>{/* icon */}</div>
          </div>
          <div className="flex flex-wrap bg-white p-3 mt-5 mx-auto rounded-2xl justify-around ">
            <div className="m-5 ">
              <h1 className="text-[16px] text-[#958C8C]">Total Earnings</h1>
              <h2 className="text-[32px] pt-2 pb-2">$52,258.32</h2>
              <div className="bg-[#E3FFF3] w-[78px] text-center p-2 rounded-full">
                <h1>+12%</h1>
              </div>
            </div>
            {/* <Divider flexItem sx={{color:'black'}}/> */}

            <div className="m-5">
              <h1 className="text-[16px] text-[#958C8C]">Total Invites</h1>
              <h2 className="text-[32px] pt-2 pb-2">248</h2>
              <div className="bg-[#E3FFF3] w-[78px] text-center p-2 rounded-full">
                <h1>+8%</h1>
              </div>
            </div>
            <div className="m-5 ">
              <h1 className="text-[16px] text-[#958C8C]">Total reach</h1>
              <h2 className="text-[32px] pt-2 pb-2">2.582.322</h2>
              <div className="bg-[#FFE3E3] w-[78px] text-center p-2 rounded-full">
                <h1>-11%</h1>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 mt-5 w-full rounded-2xl">
            <div className="flex justify-between p-2">
              <h1>Your Meetings</h1>
              <KeyboardArrowDownIcon />
            </div>
            <div className="pt-3 pb-2">
              <div>

              </div>
              <Divider/>
              <div className="flex justify-between m-3 items-center">
                <div>
                  <div className="flex ">
                    <img alt=""
                      className="h-12 rounded-lg"
                      src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                    />
                    <div className="ml-3">
                      <h1 className="text-[14px]">Mano Sundar</h1>
                      <h1 className="text-[12px] pt-1 text-[#958C8C]">
                        21 Aug 2023
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/3 justify-between">
                  <div className="bg-[#FFEDED] p-3 text-[13px] text-[#942626] rounded-lg">
                    Cancled
                  </div>
                  <div className="flex ">
                    <div className="border-2 rounded-full m-1 p-1">
                      <EditRoundedIcon />
                    </div>
                    <div className="border-2 rounded-full m-1 p-1">
                      <ClearRoundedIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between m-3 items-center">
                <div>
                  <div className="flex ">
                    <img
                    alt=""
                      className="h-12 rounded-lg"
                      src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                    />
                    <div className="ml-3">
                      <h1 className="text-[14px]">Mano Sundar</h1>
                      <h1 className="text-[12px] pt-1 text-[#958C8C]">
                        21 Aug 2023
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/3 justify-between">
                  <div className="bg-[#E3FFF3] p-3 text-[13px] text-[#156B46]] rounded-lg">
                    Completed
                  </div>
                  <div className="flex ">
                    <div className="border-2 rounded-full m-1 p-1">
                      <EditRoundedIcon />
                    </div>
                    <div className="border-2 rounded-full m-1 p-1">
                      <ClearRoundedIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between m-3 items-center">
                <div>
                  <div className="flex ">
                    <img 
                    alt=""
                      className="h-12 rounded-lg"
                      src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                    />
                    <div className="ml-3">
                      <h1 className="text-[14px]">Mano Sundar</h1>
                      <h1 className="text-[12px] pt-1 text-[#958C8C]">
                        21 Aug 2023
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/3 justify-between">
                  <div className="bg-[#FFF3E5] p-3 text-[13px] text-[#A36A27] rounded-lg">
                    Pending
                  </div>
                  <div className="flex ">
                    <div className="border-2 rounded-full m-1 p-1">
                      <EditRoundedIcon />
                    </div>
                    <div className="border-2 rounded-full m-1 p-1">
                      <ClearRoundedIcon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between m-3 items-center">
                <div>
                  <div className="flex ">
                    <img 
                    alt=""
                      className="h-12 rounded-lg"
                      src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                    />
                    <div className="ml-3">
                      <h1 className="text-[14px]">Mano Sundar</h1>
                      <h1 className="text-[12px] pt-1 text-[#958C8C]">
                        21 Aug 2023
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex w-1/3 justify-between">
                  <div className="bg-[#FFEDED] p-3 text-[13px] text-[#942626] rounded-lg">
                    Cancled
                  </div>
                  <div className="flex ">
                    <div className="border-2 rounded-full m-1 p-1">
                      <EditRoundedIcon />
                    </div>
                    <div className="border-2 rounded-full m-1 p-1">
                      <ClearRoundedIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Divider/>
            <div className="flex justify-end p-3">
              <Pagination count={3} />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-10 mb-10 p-5 ml-8 h-3/5 bg-[#def2fa] rounded-2xl ">
        <div className="flex justify-between">
          <h1 className="text-[28px] mt-5 font-semibold">Calendar</h1>
          <MoreHorizIcon />
        </div>
        <BasicDateCalendar />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
