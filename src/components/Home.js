import React from "react";
import { Outlet } from "react-router-dom";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import HomeImg from "../img/Accept request-bro.svg";

const Home = () => {
  return (
    <div>
      <div className="flex">
      <div className=" p-20  ">
        {/* <Outlet/> */}
        <h1 className=" font-bold font-sans text-6xl p-8 text-white ">
          A Place value your <br />{" "}
          <span className="text-purple-500">Question</span> <br />
          not your <span className="text-green-400"> Identity</span>
        </h1>
        <h1
          className=" font-semibold font-sans text-2xl p-8 text-white
      "
        >
          Glad to be a part of your dream accomplishment <br /> by connecting
          with
          <span className="text-yellow-300"> Expertise</span> people
        </h1>
        <div className="mx-10 my-10">
          <button className=" bg-[#407BFE] text-white rounded-full p-3 font-sans font-semibold">
            Sign Up Free
          </button>
        </div>
      </div>
      <div>
        <img className="h-[600px] p-20 " src={HomeImg} />
        
      </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
