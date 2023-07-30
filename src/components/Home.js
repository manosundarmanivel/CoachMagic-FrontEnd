import React from "react";
import { Outlet } from "react-router-dom";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
   <div>
    <div className=" p-20 ">
       {/* <Outlet/> */}
      <h1 className=" font-bold font-sans text-6xl p-8">A Place value your <br/> <span className="text-purple-500">Question</span>  <br/>not your <span className="text-green-400"> Identity</span></h1>
      <h1 className=" font-semibold font-sans text-2xl p-8">
        Glad to be a part of your dream accomplishment <br/> by connecting with
        <span className="text-yellow-300"> Expertise</span>  people
      </h1>
      <div className="mx-10 my-10">
      <button className=" bg-blue-400 rounded-full p-3 font-sans font-medium">Sign Up Free</button>
      </div>
      
    </div>
    <Testimonials/>
    <Footer/>
   </div>
    

  );
};

export default Home;
