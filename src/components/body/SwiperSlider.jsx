
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
        <div className='absolute z-20 lg:left-1/2 transform lg:-translate-x-1/2 top-5 md:top-14 lg:top-1/4 flex flex-col items-center'>
          <p
            data-aos='fade-up-right'
            className='text-black text-center font-bold text-3xl md:text-5xl'>
            Welcome To Dreamy Property
          </p>
          <p
            data-aos='fade-up-right'
            data-aos-delay='300'
            className='mt-4 text-center text-gray-600 font-semibold text-3xl'>
            Your journey to Home Ownership, guided by expertise, trust, and
            personalized service
          </p>
          <p
            data-aos='fade-up-right'
            data-aos-delay='700'
            className=' bg-blue-500 mt-4 text-3xl p-3 rounded-lg cursor-pointer'>
            Explore Now
          </p>
        </div>

        <SwiperSlide>
          <div>
            <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/Ns73bQP/id-01.jpg')]">
              <p className='absolute left-10  lg:left-[500px] lg:bottom-40 text-yellow-400 text-3xl'></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/d4YKF84/id-02.jpg')]">
              <p className='absolute left-10  lg:left-[500px] lg:bottom-40 text-yellow-400 text-3xl'></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="relative  h-screen bg-center opacity-80  bg-no-repeat bg-cover bg-[url('https://i.ibb.co/PjRQXvX/4501909-house-modern-lights-hdr-clouds-grass-building-palm-trees-reflection-swimming-pool.jpg')]">
              <p className='absolute left-10  lg:left-[500px] lg:bottom-40 text-yellow-400 text-3xl'></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperSlider;
