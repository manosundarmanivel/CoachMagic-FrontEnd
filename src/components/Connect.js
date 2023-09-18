import React from "react";
import compic from "../img/community.png";
import ivspic from "../img/invitesent.png";
import ivgpic from "../img/inviteget.png";
function Connect() {
  return (
    <div className>
      <div class="px-2 py-4 mt-7 font-poppins">
        <div className=" text-[60px] ml-center">
          <p>
            Connect Empowering{" "}
            <span className="animate-pulse bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Minds
            </span>
            ,<br></br>
            Inspiring{" "}
            <span className="animate-pulse bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Growth
            </span>
            .
          </p>
        </div>

        <div className="flex flex-row justify-center py-12 -ml-2.5">
          <div className="w-[260px] px-5  transform transition duration-300 hover:scale-125">
            <div className="flex flex-col bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-sky-800 via-stone-800 to-indigo-200 h-[250px] justify-center items-center rounded-3xl">
              <div className="">
                <img src={compic} alt="Community"></img>
              </div>
              <div className="mt-3">
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full text-orange-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Community
                  </span>
                  <span class="relative invisible">Community</span>
                </a>
              </div>

              <div></div>
            </div>
          </div>
          <div className="w-[260px] px-5  transform transition duration-300 hover:scale-125">
            <div className="flex flex-col bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-sky-800 via-stone-800 to-indigo-200 h-[250px] justify-center items-center rounded-3xl">
              <div className="">
                <img src={ivgpic} alt="Inviteget"></img>
              </div>
              <div className="mt-5">
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full text-[#E6FFFA] transition-all duration-300 transform group-hover:translate-x-full ease">
                    Invite Get
                  </span>
                  <span class="relative invisible">Invite Get</span>
                </a>
              </div>

              <div></div>
            </div>
          </div>
          <div className="w-[260px] px-5  transform transition duration-300 hover:scale-125">
            <div className="flex flex-col bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-sky-800 via-stone-800 to-indigo-200 h-[250px] justify-center items-center rounded-3xl">
              <div className="w-[150px]">
                <img src={ivspic} alt="Community"></img>
              </div>
              <div className="py-3">
                <a
                  href="#_"
                  class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-blue-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group"
                >
                  <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span class="absolute flex items-center justify-center w-full h-full text-[#68D391] transition-all duration-300 transform group-hover:translate-x-full ease">
                    Invite Sent
                  </span>
                  <span class="relative invisible">Invite Sent</span>
                </a>
              </div>

              <div></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
        <a
          href="#_"
          class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-3xl group"
        >
          <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#1A5265] rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-indigo-400"></span>
          <span class="relative">Share Page</span>
        </a>
      </div>
      </div>
      
    </div>
  );
}

export default Connect;
