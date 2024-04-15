import { Helmet } from "react-helmet-async";
import React, { useState } from "react";

const SellProperty = () => {
  const [selectedOption, setSelectedOption] = useState("For Sale");
    return (
      <>
        <Helmet>
          <title>NS | Sell Property</title>
        </Helmet>
        {/* <div className="h-[calc(100vh-150px)]">
          <h2 className='text-center font-bold text-3xl my-6'>
            Sell Your Property
          </h2>
          <p className='text-center font-medium text-2xl text-gray-500'>
            We NS Property, also help people to sell their property at good
            market price
          </p>
          <p>Give </p>
        </div> */}
        <div className=''>
          <div className='relative'>
            <section className='w-full h-[30vh]  bg-black'></section>

            {/* tagline division */}
            <div className='absolute top-20 left-[10%] md:left-[10%] -translate-y-1/2 text-white'>
              <h1 className='text-3xl md:text-5xl font-bold'>
                Sell Your Property
              </h1>
              <p className='text-sm md:text-lg'>
                The Ultimate Guide To Ace SDE Interviews.
              </p>
            </div>
          </div>

          {/* bottom relative container */}
          <div className='w-full h-[1200px] md:h-[60vh] lg:h-[80vh] bg-blue-300 relative'>
            {/* division with floating form */}
            <div className='absolute -top-[3%] md:-top-[10%] left-1/2 -translate-x-1/2 grid grid-cols-1 md:grid-cols-3 h-fit w-4/5 md:w-[90%] lg:w-4/5 rounded shadow overflow-hidden text-white'>
              {/* form / left div */}
              <div className='p-2 md:p-4 h-full bg-gray-800 col-span-2'>
                <form>
                  {/* form top part containing mail icon and heading */}
                  <div className='flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4'>
                    {/* heading */}
                    <h2 className='text-2xl md:text-3xl font-semibold'>
                      Send Us A Message
                    </h2>
                    {/* mail svg icon */}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-mail-forward'
                      width='33'
                      height='33'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#fff'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5' />
                      <path d='M3 6l9 6l9 -6' />
                      <path d='M15 18h6' />
                      <path d='M18 15l3 3l-3 3' />
                    </svg>
                  </div>

                  {/* bottom form with input fields */}
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-6 px-4 md:py-12 md:px-8 text-sm'>
                    {/* name input */}
                    <div className='flex flex-col gap-1'>
                      <label className='font-semibold'>
                        Name <span className='text-red-500'>&#42;</span>
                      </label>
                      <input
                        className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                        placeholder='Enter Your Name'
                        required
                        name='name'
                        type='text'
                      />
                    </div>

                    {/* email input */}
                    <div className='flex flex-col gap-1'>
                      <label className='font-semibold'>
                        Email <span className='text-red-500'>&#42;</span>
                      </label>
                      <input
                        className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                        placeholder='Enter Your Email'
                        required
                        name='email'
                        type='email'
                      />
                    </div>
                    {/* phone number input */}
                    <div className='flex flex-col gap-1'>
                      <label className='font-semibold'>
                        Phone <span className='text-red-500'>&#42;</span>
                      </label>
                      <input
                        className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                        placeholder='Enter Your Phone Number'
                        required
                        name='phone'
                        type='tel'
                      />
                    </div>
                    {/* Rent or Sell */}

                    <div className='flex flex-row items-center'>
                      {" "}
                      <span className="">Select Type</span>
                      <div className='grid grid-cols-2  gap-2 p-4'>
                        <label>
                          <input
                            type='radio'
                            value='1'
                            className='peer hidden'
                            name='framework'
                          />

                          <div className=' flex items-center justify-between px-2 py-1 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500'>
                            <h2 className='font-medium text-white'>Sale</h2>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='#fff'
                              className='w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                          </div>
                        </label>
                        <label>
                          <input
                            type='radio'
                            value='1'
                            className='peer hidden'
                            name='framework'
                          />

                          <div className=' flex items-center justify-between p-1 px-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-blue-500'>
                            <h2 className='font-medium text-white'>Rent</h2>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth='1.5'
                              stroke='white'
                              className='w-9 h-9 text-blue-600 invisible group-[.peer:checked+&]:visible'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                              />
                            </svg>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* subject input */}
                    <div className='flex flex-col gap-1'>
                      <label className='font-semibold'>
                        Subject <span className='text-red-500'>&#42;</span>
                      </label>
                      <input
                        className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                        placeholder='Enter Your Subject'
                        required
                        name='subject'
                        type='text'
                      />
                    </div>
                    {/* message input */}
                    <div className='flex flex-col gap-1 md:col-span-2'>
                      <label className='font-semibold'>
                        Message <span className='text-red-500'>&#42;</span>
                      </label>
                      <input
                        className='border-[1px] border-white bg-gray-800 p-2 rounded-md'
                        placeholder='Enter Your Message'
                        required
                        name='message'
                        type='text'
                      />
                    </div>
                  </div>
                </form>
                {/* submit button div */}
                <div className='flex items-center justify-center md:justify-end py-4 px-8'>
                  {/* submit button */}
                  <button className='py-2 px-4 md:py-4 md:px-6 bg-gray-800 rounded-md border-2 border-white flex items-center gap-2 hover:scale-95 transition-all'>
                    <span className='text-xl'>Submit</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='icon icon-tabler icon-tabler-brand-telegram'
                      width='30'
                      height='30'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='#fff'
                      fill='none'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                      <path d='M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4' />
                    </svg>
                  </button>
                </div>
              </div>
              {/* right div */}
              {/* <div className='py-6 px-4 h-[500px] md:h-full bg-blue-800 grid grid-cols-1 grid-rows-5'>
                heading tag
                <h2 className='text-xl lg:text-2xl text-center md:text-start font-semibold'>
                  Contact Information
                </h2>
                email and icon
                <div className='row-span-4 flex flex-col items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-mail-share'
                    width='35'
                    height='35'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='#fff'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path d='M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7' />
                    <path d='M3 7l9 6l9 -6' />
                    <path d='M16 22l5 -5' />
                    <path d='M21 21.5v-4.5h-4.5' />
                  </svg>
                  <span>yourmail@support.com</span>
                </div>
                social icons div
                <div className='flex justify-center md:justify-start items-center gap-4'>
                  <a title='youtube' href='#'>
                    <img
                      className='h-8 w-8 invert'
                      src='https://www.svgrepo.com/show/521936/youtube.svg'
                      alt='youtube'
                    />
                  </a>
                  <a title='linkedin' href='#'>
                    <img
                      className='h-12 w-12 invert'
                      src='https://www.svgrepo.com/show/520815/linkedin.svg'
                      alt='linkedin'
                    />
                  </a>
                  <a title='instagram' href='#'>
                    <img
                      className='h-8 w-8 invert'
                      src='https://www.svgrepo.com/show/521711/instagram.svg'
                      alt='instagram'
                    />
                  </a>
                  <a title='github' href='#'>
                    <img
                      className='h-8 w-8 invert'
                      src='https://www.svgrepo.com/show/512317/github-142.svg'
                      alt='github'
                    />
                  </a>
                </div>
                <h1 className='text-center'>
                  {" "}
                  Follow me on github{" "}
                  <a href='https://github.com/Darkstar69'>Darkstar69</a>{" "}
                </h1>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
};

export default SellProperty;