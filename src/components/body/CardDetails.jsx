import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const IdInt = parseInt(id);
  const card = cards.find((card) => card.id == IdInt);
    
  return (
    <div>
      <Helmet>
        <title>NS | Product - {id}</title>
      </Helmet>
      {/* 1st  */}
      {/* <div className=' bg-[#23BE0A0D] rounded-2xl items-center p-2 flex   justify-center'></div> */}

      <div
        className='border border-red-500 w-full h-[calc(100vh-200px)] bg-center opacity-90 bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${card.image})` }}></div>

      <div className='flex  justify-center h-screen mt-10'>
        <ul className=' grid w-full grid-cols-3 gap-x-5 px-8'>
          <li className=''>
            <input
              className='peer sr-only'
              type='radio'
              value='yes'
              name='answer'
              id='yes'
            />
            <label
              className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 '
              htmlFor='yes'>
              Description
            </label>

            <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[98vw]  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible '>
              {card.description}
            </div>
          </li>

          <li className=''>
            <input
              className='peer sr-only'
              type='radio'
              value='no'
              name='answer'
              id='no'
            />
            <label
              className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 '
              htmlFor='no'>
              About
            </label>

            <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[98vw]  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible '>
              about
            </div>
          </li>

          <li className=''>
            <input
              className='peer sr-only'
              type='radio'
              value='yesno'
              name='answer'
              id='yesno'
            />
            <label
              className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500  '
              htmlFor='yesno'>
              Something
            </label>

            <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[98vw] mx-auto  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible'>
              Lorem ipsum
            </div>
          </li>
        </ul>
      </div>

      {/* 2nd pass */}
      {/* <div className='flex flex-col lg:flex-row gap-3 lg:gap-12'>
        <div className='w-full lg:w-1/2 bg-[#23BE0A0D] rounded-2xl items-center p-2 flex   justify-center'>
          <img className='w-full ' src={card.image} alt='' />
        </div>
        <div className='w-full lg:w-1/2'>
          <h2 className='text-[40px] font-bold text-[#131313]'>
            {card.estate_title}
          </h2>

          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            Price: {card.price}
          </p>
          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            Status: {card.status}
          </p>
          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            Area: {card.area}
          </p>
          <p className='mt-4 mb-6 font-medium text-xl text-[#131313CC]'>
            Location: {card.location}
          </p>
          <div className='divide-y-2 divide-dashed divide-gray-500'>
            <div></div>
            <div>
              <p className='text-xl font-medium text-[#131313CC] my-4'>
                {card.category}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div> */}

      {/* cancel  */}
      {/* <div className='py-5 mx-auto bg-gray-100 text-gray-800'>
        <div className='flex flex-col mx-auto rounded'>
          <img
            src={card.image}
            alt=''
            className='sm:max-w-full h-auto sm:max-h-full bg-gray-500 object-cover'
          />

          <div className='p-6 z-10 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50'>
            <div className='space-y-2'>
              <p
                className=' flex items-center justify-center text-2xl font-semibold sm:text-3xl'>
                {card.estate_title}
              </p>
              <p className='text-xs text-gray-600'>
                By
                <span className='text-xs hover:underline'>
                  Leroy Jenkins
                </span>
              </p>
            </div>
            <div className='text-gray-800'>
              <p>Insert the actual text content here...</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CardDetails;
