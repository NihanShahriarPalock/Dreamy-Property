import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaCheckCircle } from "react-icons/fa";
const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const IdInt = parseInt(id);
  const card = cards.find((card) => card.id == IdInt);

  return (
    <div>
      <Helmet>
        <title>Dreamy | Product - {id}</title>
      </Helmet>

      <div data-aos="zoom-in"
        data-aos-duration="1000"
        className='mt-10 w-full h-[calc(100vh-200px)] bg-center opacity-90 rounded-xl bg-no-repeat bg-cover'
        style={{ backgroundImage: `url(${card.image})` }}></div>

      <div className='flex  justify-center h-[70vh] md:h-[55vh] mt-10'>
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
              className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-blue-500 '
              htmlFor='yes'>
              Description
            </label>

            <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[98vw] mx-auto min-h-fit lg:h-[43vh]  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible '>
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
              className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-blue-500 '
              htmlFor='no'>
              Details
            </label>

            <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[98vw] min-h-fit lg:h-[44vh] opacity-0 invisible peer-checked:opacity-100 peer-checked:visible  text-black '>
              <div className='flex items-center flex-col'>
                <div className='flex flex-col space-y-2'>
                  <p className='text-xl font-medium'>
                    {" "}
                    Property Id :{" "}
                    <span className='text-gray-600'>{card.id}</span>{" "}
                  </p>
                  <p className='text-xl font-medium'>
                    {" "}
                    Estate Title :{" "}
                    <span className='text-gray-600'>
                      {card.estate_title}
                    </span>{" "}
                  </p>
                  <p className='text-xl font-medium'>
                    {" "}
                    Segment :{" "}
                    <span className='text-gray-600'>
                      {card.segment_name}
                    </span>{" "}
                  </p>
                  <p className='text-xl font-medium'>
                    {" "}
                    Price : <span className='text-gray-600'>
                      {card.price}
                    </span>{" "}
                  </p>
                  <p className='text-xl font-medium'>
                    {" "}
                    Area : <span className='text-gray-600'>
                      {card.area}
                    </span>{" "}
                  </p>
                  <p className='text-xl font-medium'>
                    {" "}
                    Bedroom :{" "}
                    <span className='text-gray-600'>{card.bedroom}</span>{" "}
                  </p>

                  <p className='text-xl font-medium'>
                    {" "}
                    Status :{" "}
                    <span className='text-gray-600'>{card.status}</span>{" "}
                  </p>
                  <p className='text-xl font-medium'>
                    {" "}
                    Location :{" "}
                    <span className='text-gray-600'>{card.location}</span>{" "}
                  </p>
                </div>
              </div>
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
              className='flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-blue-500'
              htmlFor='yesno'>
              Facility
            </label>

            <div className='absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[98vw] h-[43vh] mx-auto  opacity-0 invisible peer-checked:opacity-100 peer-checked:visible'>
              <div className='flex  items-center  flex-col'>
                <div className='flex flex-col text-xl space-y-2'>
                  <p className='flex items-center'>
                    <FaCheckCircle />{" "}
                    <span className='ml-2'>{card.facilities[0]}</span>
                  </p>
                  <p className='flex items-center'>
                    <FaCheckCircle />{" "}
                    <span className='ml-2'>{card.facilities[1]}</span>
                  </p>
                  <p className='flex items-center'>
                    <FaCheckCircle />{" "}
                    <span className='ml-2'>{card.facilities[2]}</span>
                  </p>
                  <p className='flex items-center'>
                    <FaCheckCircle />{" "}
                    <span className='ml-2'>{card.facilities[3]}</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardDetails;
