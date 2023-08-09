import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8  bg-[#FFFFFF]">
        <h1 className='text-3xl  font-bold text-center pb-20 text-black mt-10 pt-10'>Here are our users <br/> Testimonials</h1>
        <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1} 
      breakpoints={{
       
        640: { slidesPerView: 1 }, 
        768: { slidesPerView: 2 }, 
        1024: { slidesPerView: 3 }, 
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay:2000}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
      <SwiperSlide className="flex justify-center">
        <div className="justify-items-center">
          <div className="w-[400px] h-48 shadow-lg m-3 p-5 rounded-lg bg-neutral-800">
            <div>
              <div className="flex ">
                <img
                  className="h-14 rounded-full"
                  src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
                />
                <div className="pl-3">
                  <h1 className="font-sans font-semibold text-white">ChiChi</h1>
                  <h1 className="font-sans font-light text-gray-100">South Africa</h1>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <h1 className="font-serif text-gray-200 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                consectetur justo quis euismod vehicula. Quisque diam dui,
                imperdiet et
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <div className="w-[400px] h-48 shadow-lg m-3 p-5 rounded-lg bg-neutral-800">
            <div>
              <div className="flex ">
                <img
                  className="h-14 rounded-full"
                  src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
                />
                <div className="pl-3">
                  <h1 className="font-sans font-semibold text-white">ChiChi</h1>
                  <h1 className="font-sans font-light text-gray-100">South Africa</h1>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <h1 className="font-serif text-gray-200 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                consectetur justo quis euismod vehicula. Quisque diam dui,
                imperdiet et
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <div className="w-[400px] h-48 shadow-lg m-3 p-5 rounded-lg bg-neutral-800">
            <div>
              <div className="flex ">
                <img
                  className="h-14 rounded-full"
                  src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
                />
                <div className="pl-3">
                  <h1 className="font-sans font-semibold text-white">ChiChi</h1>
                  <h1 className="font-sans font-light text-gray-100">South Africa</h1>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <h1 className="font-serif text-gray-200 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                consectetur justo quis euismod vehicula. Quisque diam dui,
                imperdiet et
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <div className="w-[400px] h-48 shadow-lg m-3 p-5 rounded-lg bg-neutral-800">
            <div>
              <div className="flex ">
                <img
                  className="h-14 rounded-full"
                  src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
                />
                <div className="pl-3">
                  <h1 className="font-sans font-semibold text-white">ChiChi</h1>
                  <h1 className="font-sans font-light text-gray-100">South Africa</h1>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <h1 className="font-serif text-gray-200 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                consectetur justo quis euismod vehicula. Quisque diam dui,
                imperdiet et
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="">
          <div className="w-[400px] h-48 shadow-lg m-3 p-5 rounded-lg bg-neutral-800">
            <div>
              <div className="flex ">
                <img
                  className="h-14 rounded-full"
                  src="https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png"
                />
                <div className="pl-3">
                  <h1 className="font-sans font-semibold text-white">ChiChi</h1>
                  <h1 className="font-sans font-light text-gray-100">South Africa</h1>
                </div>
              </div>
            </div>
            <div className="pt-3">
              <h1 className="font-serif text-gray-200 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                consectetur justo quis euismod vehicula. Quisque diam dui,
                imperdiet et
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      
      
     
    </Swiper>
    </div>
    
  );

  // return(
  //     <div>
  //         <h1 className='text-3xl font-sans font-bold text-center'>Here are our users <br/> testimonials</h1>
  //         <div className='flex flex-wrap p-8'>

  //         {
  //              Array(6).fill("").map((index)=>
  //              {
  //                  return (
  //  <div className='p-5'>

  //      <div className='w-[400px] h-48 shadow-lg m-3 p-5 rounded-lg'>
  //          <div>
  //              <div className='flex'>
  //                  <img className= 'h-14 rounded-full' src='https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png'/>
  //                  <div className='pl-3'>
  //                  <h1 className='font-sans font-semibold'>ChiChi</h1>
  //                  <h1 className='font-sans font-light'>South Africa</h1>
  //                  </div>
  //              </div>
  //          </div>
  //          <div className='pt-3'>
  //              <h1 className='font-serif '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet et</h1>
  //          </div>
  //      </div>
  //  </div>
  //                    )
  //              })

  //         }
  //     </div>
  //     </div>
  // )
};

export default Testimonials;
