import { Helmet } from "react-helmet-async";

const SellProperty = () => {
  return (
    <>
      <Helmet>
        <title>Dreamy | Sell Property</title>
      </Helmet>

      <div className='w-full lg:w-3/5 mx-auto mt-2 lg:mt-10'>
        <div>
          <div className='w-full rounded shadow overflow-hidden text-white'>
            <div className='p-2 md:p-4 h-full bg-gray-800 col-span-2'>
              <form>
                <div className='flex flex-col md:flex-row justify-around items-start md:items-center pt-8 p-4'>
                  <h2 className='text-2xl md:text-3xl font-semibold'>
                    Fill up the information
                  </h2>

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

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-6 px-4 md:py-12 md:px-8 text-sm'>
                  {/* name input */}
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold'>
                      Name <span className='text-red-500'>&#42;</span>
                    </label>
                    <input
                      className='border border-white bg-gray-800 p-2 rounded-md'
                      placeholder='Enter Your Name'
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
                      className='border border-white bg-gray-800 p-2 rounded-md'
                      placeholder='Enter Your Email'
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
                      className='border border-white bg-gray-800 p-2 rounded-md'
                      placeholder='Enter Your Phone Number'
                      name='phone'
                      type='tel'
                    />
                  </div>
                  {/* Rent or Sell */}

                  <div className='flex flex-row gap-5 items-center'>
                    {" "}
                    <span className='font-semibold'>
                      Select Type <span className='text-red-500'>&#42;</span>
                    </span>
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

                  {/* Select Dropdown */}
                  <div className='flex flex-col gap-1'>
                    <label className='font-semibold'>
                      Select Segment <span className='text-red-500'>&#42;</span>
                    </label>
                    <select className='border-2 border-gray-200 text-white select select-bordered join-item bg-transparent'>
                      <option disabled selected>
                        Select Segment
                      </option>
                      <option className='bg-gray-800 text-white'>
                        Penthouse
                      </option>
                      <option className='bg-gray-800 text-white'>
                        Resorts
                      </option>
                      <option className='bg-gray-800 text-white'>Villas</option>
                      <option className='bg-gray-800 text-white'>
                        Mansions
                      </option>
                    </select>
                  </div>

                  {/* message input */}
                  <div className='flex flex-col gap-1 md:col-span-2'>
                    <label className='font-semibold'>
                      Description <span className='text-red-500'>&#42;</span>
                    </label>
                    <textarea
                      className='border border-white bg-gray-800 p-2 rounded-md'
                      placeholder='Write Full Description'
                      name='message'
                      type='text'
                    />
                  </div>

                  <div className='flex flex-col gap-1 md:col-span-2'>
                    <label className='font-semibold'>
                      Upload All Files{" "}
                      <span className='text-red-500'>&#42;</span>
                    </label>
                    <input
                      className='block w-full text-lg text-gray-700 border-2 border-gray-300 rounded-lg cursor-pointer bg-transparent'
                      id='multiple_files'
                      type='file'
                      multiple
                    />
                  </div>
                </div>
              </form>

              <div className='flex items-center justify-center md:justify-end py-4 px-8'>
                {/* submit button */}
                <button
                  className='py-2 px-4 md:py-4 md:px-6 bg-gray-800 rounded-md border-2 border-white flex items-center gap-2 hover:scale-95 transition-all'
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }>
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
                <dialog
                  id='my_modal_5'
                  className='modal modal-bottom sm:modal-middle text-black text-center'>
                  <div className='modal-box'>
                    <h3 className='font-bold text-lg'>
                      Thank You for Submitting Form{" "}
                    </h3>
                    <p className='py-4 font-bold text-lg'>
                      One of our agent will call you soon
                    </p>
                    <div className='modal-action'>
                      <form method='dialog'>
                        <button className='p-4 rounded-xl bg-blue-500'>
                          Close
                        </button>
                      </form>
                    </div>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellProperty;
