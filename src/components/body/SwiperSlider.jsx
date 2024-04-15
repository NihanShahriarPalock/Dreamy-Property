
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper relative lg:h-[calc(100vh-100px)]'>
        <div className='absolute z-20  left-1/2 transform -translate-x-1/2 top-1/4 text-5xl text-red-700 font-bold'>
          <p>Welcome To Dream Property</p>
          <span  className="btn absolute bg-green-500  left-14">Explore Now</span>
          
        </div>
        <SwiperSlide>
          <div>
            <div className="relative border border-red-500 h-screen bg-center opacity-90  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/vhrPQSg/slider-2.webp')]">
              <p className='absolute left-10  lg:left-[500px] lg:bottom-40 text-yellow-400 text-3xl'>
                Hello hi bye
              </p>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div>
            <div className="h-screen bg-center  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/r0qTtVk/slider-2.jpg')]">
              <p>hello</p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SwiperSlider;
