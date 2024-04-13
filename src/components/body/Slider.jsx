import { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
function Slider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const images = [
    "https://i.ibb.co/vhrPQSg/slider-2.webp",
    "https://i.ibb.co/r0qTtVk/slider-2.jpg",
    "https://i.ibb.co/09dD3Fk/slider-3.jpg",
    "https://i.ibb.co/WcmLjdS/slider-4.jpg",
  ];
  const captions = [
    "Caption for image 1",
    "Caption for image 2",
    "Caption for image 3",
    "Caption for image 4",
  ];

  const back = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex <= images.length) {
      setCurrentIndex(images.length - currentIndex + 1);
    }
  };

  return (
    <article className='relative w-full flex lg:h-[calc(100vh-100px)] flex-shrink-0 overflow-hidden rounded-2xl shadow-2xl mb-10'>
      <div className='rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10'>
        <span>{currentIndex}</span>/<span>{images.length}</span>
      </div>

      {images.map((image, index) => (
        <div
          key={index}
          className='h-96'
          style={{ display: currentIndex === index + 1 ? "block" : "none" }}>
          <img
            src={image}
            alt='Image'
            className='absolute inset-0 z-10 h-full w-full object-cover opacity-90'
          />
          <div className='absolute bottom-10 left-2/4 z-20 text-xl text-center bg-gray-300 bg-opacity-50'>
            {captions[index]}
          </div>


          <div className='absolute z-10 top-1/4 left-3  w-1/3 font-bold bg-transparent  '>
            <p className='text-red-600 text-7xl leading-50 '>
              Welcome To NS Property
            </p>
            <p>Find Your Dream Property</p>
          </div>
        </div>
      ))}

      <button
        onClick={back}
        className='absolute left-1/3 bottom-10 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200'>
        <FaArrowCircleLeft />
      </button>

      <button
        onClick={next}
        className='absolute right-44 bottom-10 translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200'>
        <FaArrowCircleRight />
      </button>
    </article>
  );
}

export default Slider;
