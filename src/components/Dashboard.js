import React from "react";

const Dashboard = () => {
  return (
    <div className="flex bg-[#F1ECFF] m-10 p-10 rounded-3xl font-poppins">
      <div>
        <div className="flex ">
          <div className="">
            <h1 className="text-[32px]">Dashboard</h1>
            <h3 className="text-[#958C8C] pt-2 pb-2">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit <br /> amet Lorem
              ipsum dolor sit amet
            </h3>
          </div>
          <div>{/* icon */}</div>
        </div>
        <div className="flex bg-white p-3 mt-5 rounded-2xl justify-around">
          <div className="m-5 ">
            <h1 className="text-[16px] text-[#958C8C]">Total Earnings</h1>
            <h2 className="text-[32px] pt-2 pb-2">$52,258.32</h2>
            <div className="bg-[#E3FFF3] w-[78px] text-center p-2 rounded-full">
              <h1>+12%</h1>
            </div>
            <hr/>
          </div>
          <div className="m-5 ">
            <h1 className="text-[16px] text-[#958C8C]">Total Earnings</h1>
            <h2 className="text-[32px] pt-2 pb-2">$52,258.32</h2>
            <div className="bg-[#E3FFF3] w-[78px] text-center p-2 rounded-full">
              <h1>+12%</h1>
            </div>
          </div>
          <div className="m-5 ">
            <h1 className="text-[16px] text-[#958C8C]">Total Earnings</h1>
            <h2 className="text-[32px] pt-2 pb-2">$52,258.32</h2>
            <div className="bg-[#E3FFF3] w-[78px] text-center p-2 rounded-full">
              <h1>+12%</h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div>{/* //calander */}</div>
    </div>
  );
};

export default Dashboard;
