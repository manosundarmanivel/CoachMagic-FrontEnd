import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import OtpImg from '../img/OTP 1.svg'

const OtpVerification = () => {
  const [OTP, setOTP] = useState(0);
  return (
    <div className="flex justify-center items-center m-40   font-poppins">
      <div className="text-center">
        <div className="pl-3 m-5">
        <img alt = 'img'src={OtpImg}/>
        </div>
        <h1 className="text-[#5B5B5B] font-bold text-[24px]">OTP Verification</h1>
        <h1 className="pt-3">Enter the OTP sent to  <span className="text-black font-bold">+91 63xxxxxx74</span></h1>
        <div className="pl-10 pt-5 text-center ">
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
        <div className="bg-gradient-to-r m-auto from-cyan-500 to-blue-500 m-5 rounded-full">
         <h1 className="text-white p-2 m-3 font-semibold ">Verify</h1>
        </div>
        
      </div>
    </div>
  );
};

export default OtpVerification;
