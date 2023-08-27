import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import Otp from '../img/EnterOTP.mp4'

const OtpVerification = () => {
  const [OTP, setOTP] = useState(0);
  return (
    <div className="flex justify-center items-center m-40   font-poppins">
      <div className="text-center">
        <div className="w-[50%]">
        <video autoPlay  muted className="ml-[10rem]">
                <source src={Otp} type='video/mp4'/>
            </video>
        </div>
        <h1 className="text-[#5B5B5B] font-bold text-[24px]">OTP Verification</h1>
        <h1 className="pt-3">Enter the OTP sent to  <span className="text-black font-bold">+91 63xxxxxx74</span></h1>
        <div className="pl-10 pt-5 text-center flex justify-center ">
          <OTPInput
            inputStyles={{
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: "10px",
            }}
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
          />
         
        </div>
        <h1 className="p-2 m-2">Didn’t you receive the OTP?</h1>
        <div className="">
        <ResendOTP onResendClick={() => console.log("Resend clicked")} />
        </div>
         <button className="text-white py-2 px-7 font-semibold w-min  bg-gradient-to-r from-cyan-500 to-blue-500  rounded-full">Verify</button>
        
      </div>
    </div>
  );
};

export default OtpVerification;
