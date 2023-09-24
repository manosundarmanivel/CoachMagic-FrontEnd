import React from "react";
// import ivgpic from "../img/inviteget.png";
import ivgpic from "../img/bro-prof.png";
import pro1 from "../img/profile1.jpeg";
import pro2 from "../img/profile2.jpeg";
import pro3 from "../img/profile3.jpeg";
import pro4 from "../img/profile4.jpeg";
import pro5 from "../img/profile5.jpeg";
import pro6 from "../img/profile6.jpeg";
import pro7 from "../img/profile7.png";
const Community = () => {
  return (
    <div>
      {/* <div className="flex flex-row">
    <div>
      hi
    </div>
    <div>hi</div>
    </div> */}
      <div className="ml-5 flex flex-row font-poppins py-8">
        <div className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]  from-sky-700 via-stone-600 to-indigo-200 p-5 rounded-2xl  shadow-md">
          <div className="flex flex-col mb-4">
            <div>
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div class="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for Coach/Mentor"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>
            </div>
          </div>
          <div className=" w-[380px] h-[520px] overflow-y-auto text-white">
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-14 h-14" alt="Dp" src={ivgpic} />
                </div>
                <div className="flex flex-row ml-2 items-center">
                  <div className="flex flex-col">
                    <div>RV SYED</div>
                    <div class="text-[13px]">bye...</div>
                  </div>
                  <div className="ml-[150px] text-[13px]">9:40am</div>
                </div>
              </div>
              <div class="py-4">
                <hr class="flex-grow border-t border-gray-300"></hr>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-14 h-14" alt="Dp" src={pro7} />
                </div>
                <div className="flex flex-row ml-2 items-center">
                  <div className="flex flex-col">
                    <div>Kamalesh</div>
                    <div class="text-[13px]">how are you neke</div>
                  </div>
                  <div className="ml-[100px] text-[13px]">9:30am</div>
                </div>
              </div>
              <div class="py-4">
                <hr class="flex-grow border-t border-gray-300"></hr>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-14 h-14" alt="Dp" src={pro1} />
                </div>
                <div className="flex flex-row ml-2 items-center">
                  <div className="flex flex-col">
                    <div>Sharvita</div>
                    <div class="text-[13px]">how are you neke</div>
                  </div>
                  <div className="ml-[100px] text-[13px]">9:20am</div>
                </div>
              </div>
              <div class="py-4">
                <hr class="flex-grow border-t border-gray-300"></hr>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-14 h-14" alt="Dp" src={pro2} />
                </div>
                <div className="flex flex-row ml-2 items-center">
                  <div className="flex flex-col">
                    <div>Malarvizhi</div>
                    <div class="text-[13px]">how are you neke</div>
                  </div>
                  <div className="ml-[100px] text-[13px]">9:18am</div>
                </div>
              </div>
              <div class="py-4">
                <hr class="flex-grow border-t border-gray-300"></hr>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-14 h-14" alt="Dp" src={pro3} />
                </div>
                <div className="flex flex-row ml-2 items-center">
                  <div className="flex flex-col">
                    <div>Nekelash</div>
                    <div class="text-[13px]">how are you neke</div>
                  </div>
                  <div className="ml-[100px] text-[13px]">9:10am</div>
                </div>
              </div>
              <div class="py-4">
                <hr class="flex-grow border-t border-gray-300"></hr>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-14 h-14" alt="Dp" src={pro4} />
                </div>
                <div className="flex flex-row ml-2 items-center">
                  <div className="flex flex-col">
                    <div>Sruti</div>
                    <div class="text-[13px]">how are you neke</div>
                  </div>
                  <div className="ml-[100px] text-[13px]">9:40am</div>
                </div>
              </div>
              <div class="py-4">
                <hr class="flex-grow border-t border-gray-300"></hr>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-14 h-14" alt="Dp" src={pro5} />
                </div>
                <div className="flex flex-row ml-2 items-center">
                  <div className="flex flex-col">
                    <div>Kiruthiya sree</div>
                    <div class="text-[13px]">how are you neke</div>
                  </div>
                  <div className="ml-[100px] text-[13px]">9:40am</div>
                </div>
              </div>
              <div class="py-4">
                <hr class="flex-grow border-t border-gray-300"></hr>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <div>
                  <img className="rounded-full w-14 h-14" alt="Dp" src={pro6} />
                </div>
                <div className="flex flex-row ml-2 items-center">
                  <div className="flex flex-col">
                    <div>Mano Sundar</div>
                    <div class="text-[13px]">how are you neke</div>
                  </div>
                  <div className="ml-[100px] text-[13px]">9:40am</div>
                </div>
              </div>
              <div class="py-4">
                <hr class="flex-grow border-t border-gray-300"></hr>
              </div>
            </div>
              
          </div>
        </div>
        <div className="relative ml-[45px] bg-gray-25 w-[600px] h-[630px] rounded-2xl shadow-md border-2 border-blue-200">
        <div className="flex flex-col w-[600px] h-[630px] p-4">
          <div className="flex flex-row mb-2 bg-slate-100 py-2 rounded-md">
          <div className="drop-shadow-2xl ml-3"><img className=" rounded-full h-10 w-10 border-none items-center shadow-md" src={ivgpic} alt="profile pic"/></div>
            
            <div className="p-2 ml-1"><label>RV SYED</label></div>
          </div>
          
          <div className="overflow-y-auto mb-12">
            <div className="px-3">
              <div className="flex flex-col relative">
                <div className="flex flex-row">
                
                  <div>
                    <img
                      className="rounded-full h-10 w-10 align-middle border-none"
                      src={ivgpic}
                      alt="Sender"
                    />
                  </div>
                  <div class="flex flex-col">
                  <div className="bg-blue-500 rounded-2xl p-3 items-center ml-2 shadow-md">
                    Hi hello how are you buddy
                  </div>
                  <div className="ml-3 mt-1 text-[13px]">5:59pm</div>
                  </div>
                </div>
                <div className="flex flex-row py-3 md:flex md:flex-grow justify-end space-x-1">
                <div className="flex flex-col">
                  <div className="bg-white rounded-2xl p-3 mr-[48px] ml-[48px] shadow-md right-0">
                    Hi, im fine bro!
                  </div>
                  <div class="md:flex md:flex-grow justify-end space-x-1 mr-[48px] text-[13px] mt-1"><label>6:00pm</label></div>
                  </div>
                  <div>
                    <img
                      className="rounded-full h-10 w-10 align-middle border-none  ml-2 absolute right-0"
                      src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                      alt="Sender"
                    />
                  </div>
                </div>
                <div className="flex flex-row">
                
                  <div>
                    <img
                      className="rounded-full h-10 w-10 align-middle border-none"
                      src={ivgpic}
                      alt="Sender"
                    />
                  </div>
                  <div class="flex flex-col">
                  <div className="bg-blue-500 rounded-2xl p-3 items-center ml-2 shadow-md">
                    How is your placemet drive?
                  </div>
                  <div className="ml-3 mt-1 text-[13px]">6:00pm</div>
                  </div>
                </div>
                <div className="flex flex-row py-3 md:flex md:flex-grow justify-end space-x-1">
                <div className="flex flex-col">
                  <div className="bg-white rounded-2xl p-3 mr-[48px] ml-[48px] shadow-md right-0">
                    It was soo nice!!
                  </div>
                  <div class="md:flex md:flex-grow justify-end space-x-1 mr-[48px] text-[13px] mt-1"><label>6:00pm</label></div>
                  </div>
                  <div>
                    <img
                      className="rounded-full h-10 w-10 align-middle border-none  ml-2 absolute right-0"
                      src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                      alt="Sender"
                    />
                  </div>
                </div>
                <div className="flex flex-row">
                
                  <div>
                    <img
                      className="rounded-full h-10 w-10 align-middle border-none"
                      src={ivgpic}
                      alt="Sender"
                    />
                  </div>
                  <div class="flex flex-col">
                  <div className="bg-blue-500 rounded-2xl p-3 items-center ml-2 mr-[20px] shadow-md">
                    Did you follow the steps i suggest you in yesterday meet!
                  </div>
                  <div className="ml-3 mt-1 text-[13px]">6:01pm</div>
                  </div>
                </div>
                <div className="flex flex-row py-3 md:flex md:flex-grow justify-end space-x-1">
                <div className="flex flex-col">
                  <div className="bg-white rounded-2xl p-3 mr-[48px] ml-[48px] shadow-md right-0">
                    Yes bro! it helped me lot in my way.
                    Thanks for that by the way.
                  </div>
                  <div class="md:flex md:flex-grow justify-end space-x-1 mr-[48px] text-[13px] mt-1"><label>6:02pm</label></div>
                  </div>
                  <div>
                    <img
                      className="rounded-full h-10 w-10 align-middle border-none  ml-2 absolute right-0"
                      src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                      alt="Sender"
                    />
                  </div>
                </div>
                <div className="flex flex-row">
                
                  <div>
                    <img
                      className="rounded-full h-10 w-10 align-middle border-none"
                      src={ivgpic}
                      alt="Sender"
                    />
                  </div>
                  <div class="flex flex-col">
                  <div className="bg-blue-500 rounded-2xl p-3 items-center ml-2 shadow-md">
                    Sounds good! later bye..
                  </div>
                  <div className="ml-3 mt-1 text-[13px]">6:02pm</div>
                  </div>
                </div>
                <div className="flex flex-row py-3 md:flex md:flex-grow justify-end space-x-1">
                <div className="flex flex-col">
                  <div className="bg-white rounded-2xl p-3 mr-[48px] ml-[48px] shadow-md right-0">
                    bye....
                  </div>
                  <div class="md:flex md:flex-grow justify-end space-x-1 mr-[48px] text-[13px] mt-1"><label>6:02pm</label></div>
                  </div>
                  <div>
                    <img
                      className="rounded-full h-10 w-10 align-middle border-none  ml-2 absolute right-0"
                      src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                      alt="Sender"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="px-4 absolute inset-x-0 bottom-0 mb-2 mt-2">
          <form class="flex items-center mt-2">
              <label for="simple-search" class="sr-only">
                Type message here
              </label>
              <div class="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Type message here"
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
</svg>
                <span class="sr-only">Type message here</span>
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
