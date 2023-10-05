import React, { useState } from "react";
const Query = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [showContainer, setShowContainer] = useState(false);
  // const [ isAlertVisible, setIsAlertVisible ] = React.useState(false);
  const handleButtonClick = () => {
    setShowContainer(true);
    setTimeout(() => {
      setShowContainer(false);
    }, 3000);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      <div className="flex flex-row ml-[80px]">
        <div class="px-2 py-4 mt-3 font-poppins">
          <div className="flex flex-col text-[50px] ml-center p-2">
            <p>
              Group Community{" "}
              <span className="">
                Query!
              </span>
            </p>
          </div>
          <div className=" p-7 rounded-3xl text-2xl">
          <form>
            <div className="flex flex-col ml-12">
              <div class="flex flex-row items-center py-4">
                <div class="ml-3">
                  <h1>Name : </h1>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={"query as 'name'"}
                    className="ml-7 w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>

              <div class="flex flex-row items-center py-4">
                <div class="ml-0">
                  <h1>Domain : </h1>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder={"Domain you want to query"}
                    className="ml-7 w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl py-3">
              Request About{" "}
              <span className="animate-pulse bg-gradient-to-r from-red-600 to-red-600 inline-block font-extrabold text-transparent bg-clip-text">
                ?
              </span>
            </h1>
            <div className="">
              <div className="parent flex flex-col">
                <div className="child flex flex-row items-center py-3">
                  <div>
                    <label>Service Name : </label>{" "}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder={"Eg: Career Guidance"}
                      className="ml-8 w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
                <div className="child flex flex-row items-center py-3 row-span-2">
                  <div className="ml-10">
                    <label>Question :</label>{" "}
                  </div>
                  <div class="w-1/2">
                    <textarea
                      type="text"
                      placeholder={"write your question here"}
                      className="ml-8 w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                  </div>
                </div>
                <div className="child flex flex-row items-center py-4">
                  <div className="ml-10">
                    <label>
                      Question
                      <br></br>Situation{" "}
                    </label>{" "}
                  </div>
                  <div class="ml-1"> :</div>
                  <div>
                    <div className="flex items-center justify-center ml-7">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 text-blue-600"
                          value="urgent"
                          checked={selectedOption === "urgent"}
                          onChange={handleOptionChange}
                        />
                        <span className="ml-2">Urgent</span>
                      </label>
                      <label className="inline-flex items-center ml-6">
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 text-blue-600"
                          value="not-urgent"
                          checked={selectedOption === "not-urgent"}
                          onChange={handleOptionChange}
                        />
                        <span className="ml-2">Not Urgent</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row-reverse">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white  hover:bg-indigo-400 bg-black text-[14px] rounded-3xl">
                  <span class="relative px-5 py-2.5 duration-75">
                    submit
                  </span>
                </button>
              </div>
            </div>
          </form>
          </div>
          {/* <div className="py-5">
            <button class="mb-2" onClick={handleButtonClick}>
            <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  Click to see previous Query state : 
                </h2>
            </button>
            {!showContainer ? (
              <div className="flex flex-row">
                <div className="mr-5">
                  <label>Current Query : </label>{" "}
                </div>
                <div>
                  <ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
                    <li class="flex items-center">
                      <div role="status">
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                        <span class="sr-only">Loading...</span>
                      </div>
                      Pending
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                
                <ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
                  <li class="flex items-center">
                  <label>Previous Query : </label>
                    <svg
                      class="w-4 h-4 mr-2 ml-2 text-green-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Accepted
                  </li>
                </ul>
              </div>
            )}
          </div> */}
        </div>
        <div className="py-8 mt-6 ml-8 text-[23px] font-poppins ">
        <div>Community <a href="/community"><button className="w-[97px] bg-slate-200 rounded-3xl items-center border border-gray-300 shadow-md"><span className="animate-pulse bg-gradient-to-l from-blue-600 via-green-600 to-indigo-400 inline-block text-transparent bg-clip-text">
               <u> Chats
                </u></span></button></a></div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Query;
