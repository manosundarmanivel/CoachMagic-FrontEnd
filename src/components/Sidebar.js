import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashHead from "./DashHead";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
// import Proflie from "../img/Avatar Image.svg";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PaymentIcon from "@mui/icons-material/Payment";
import LogoutIcon from "@mui/icons-material/Logout";
import Person2Icon from '@mui/icons-material/Person2';

const Sidebar = () => {
  //   const DashboardList = [
  //     { name: "Dashboard", icon: <DashboardIcon /> },
  //     { name: "Profile", icon: <DashboardIcon /> },
  //     { name: "Invitations", icon: <DashboardIcon /> },
  //     { name: "Reviews", icon: <DashboardIcon /> },
  //     { name: "Analytics", icon: <DashboardIcon /> },
  //     { name: "Payment", icon: <DashboardIcon /> },
  //     { name: "Transactions", icon: <DashboardIcon /> },
  //   ];

  return (
    <div className="w-[270px] font-poppins p-7 m-3  ">
      <DashHead />
      <div className="pt-5">
        <Link to="/">
          <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
            <div>
              <HomeIcon />
            </div>
            <h1 className="pl-3 text-[18px]">Dashboard</h1>
          </div>
        </Link>
        <Link to="/invitations">
          <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
            <div>
              <DashboardIcon />
            </div>
            <h1 className="pl-3 text-[18px]">Invitations</h1>
          </div>
        </Link>
        <Link to="/activity">
          <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
            <div>
              <AssessmentIcon />
            </div>
            <h1 className="pl-3 text-[18px]">Your Activity</h1>
          </div>
        </Link>
        <Link to="/payments">
          <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
            <div>
              <PaymentIcon />
            </div>
            <h1 className="pl-3 text-[18px]">Payments</h1>
          </div>
        </Link>
        <Link to="/settings">
          <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
            <div>
              <SettingsIcon />
            </div>
            <h1 className="pl-3 text-[18px]">Settings</h1>
          </div>
        </Link>
        <Link to="/profile">
          <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
            <div>
              <Person2Icon />
            </div>
            <h1 className="pl-3 text-[18px]">Profile</h1>
          </div>
        </Link>
        <Link to="/Connect">
          <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
            <div>
              <SettingsIcon />
            </div>
            <h1 className="pl-3 text-[18px]">Connect</h1>
          </div>
        </Link>
      </div>
      <div className="mb-4">
      <Link to="/settings">
        <div className="mt-2 absolute top-0 right-0  flex items-center mt-55">
          {/* <img alt="img" src={Proflie} className="mr-1 w-10 h-10"/> */}
          <div className="mr-1">
            <h1 className="text-[16px] font-semibold text-red-500">Logout</h1>
            {/* <h1 className="text-[12px]">manosundar@gmail.com</h1> */}
          </div>
          <div className="flex items-center mr-5">
            <LogoutIcon />
            {/* <ArrowDropDownIcon /> */}
          </div>
        </div>
      </Link></div>
    </div>
  );
};

export default Sidebar;
