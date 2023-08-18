import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DashHead from "./DashHead";
import OTPInput, { ResendOTP } from "otp-input-react";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  const DashboardList = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "Profile", icon: <DashboardIcon /> },
    { name: "Invitations", icon: <DashboardIcon /> },
    { name: "Reviews", icon: <DashboardIcon /> },
    { name: "Analytics", icon: <DashboardIcon /> },
    { name: "Payment", icon: <DashboardIcon /> },
    { name: "Transactions", icon: <DashboardIcon /> },
  ];

  return (
    <div className="w-[250px] font-poppins p-7 m-3">
      <DashHead />
      <div className="pt-5">
        <Link to='/dashboard' >
        <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
          <div>
            <DashboardIcon />
          </div>
          <h1 className="pl-3 text-[20px]">Dashboard</h1>
        </div>
        </Link>
        <Link to='/profile' >
        <div className="flex pt-4 pb-4 items-center hover:text-[#0094FE]">
          <div>
            <AccountCircleIcon />
          </div>
          <h1 className="pl-3 text-[20px]">Profile</h1>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
