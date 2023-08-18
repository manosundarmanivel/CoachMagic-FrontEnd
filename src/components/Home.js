import React from "react";

import Testimonials from "./Testimonials";
import Footer from "./Footer";
import HomeImg from "../img/Accept request-bro.svg";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="flex">
      <div className=" p-20  ">
        {/* <Outlet/> */}
        <h1 className=" font-bold font-sans text-7xl p-8 text-black ">
          A Place value your <br />{" "}
          <span className="text-purple-500">Question</span> <br />
          not your <span className="text-green-400"> Identity</span>
        </h1>
        <h1
          className=" font-semibold font-sans text-2xl p-8 text-black
      "
        >
          Glad to be a part of your dream accomplishment <br /> by connecting
          with
          <span> Expertise</span> people
        </h1>
        <div className="mx-10 my-10">
          

         <Link to='/dashboard' ><button className=" bg-black text-white rounded-2xl p-4 font-sans text-lg font-semibold">
            Sign Up Free
          </button></Link>
        </div>
      </div>
      <div>
        <img className="h-[600px] p-10 pl-20 " src={HomeImg} />
        
      </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
