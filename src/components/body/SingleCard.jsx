import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const {
    image,
    estate_title,
    id,
    segment_name,
    price,
    status,
    location,
    bedroom,
    area
  } = card;
  return (
    <>
      <div className='relative mx-auto w-full'>
        <div className='shadow-md p-4 rounded-lg bg-white'>
          <div className='flex justify-center relative rounded-lg overflow-hidden h-52'>
            <div className='absolute  flex justify-center bottom-0 mb-3'>
              <div className='flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow'>
                <p className='flex items-center font-medium text-blue-500'>
                  <svg
                    className='w-5 h-5 fill-current mr-2'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'>
                    <path d='M480,226.15V80a48,48,0,0,0-48-48H80A48,48,0,0,0,32,80V226.15C13.74,231,0,246.89,0,266.67V472a8,8,0,0,0,8,8H24a8,8,0,0,0,8-8V416H480v56a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V266.67C512,246.89,498.26,231,480,226.15ZM64,192a32,32,0,0,1,32-32H208a32,32,0,0,1,32,32v32H64Zm384,32H272V192a32,32,0,0,1,32-32H416a32,32,0,0,1,32,32ZM80,64H432a16,16,0,0,1,16,16v56.9a63.27,63.27,0,0,0-32-8.9H304a63.9,63.9,0,0,0-48,21.71A63.9,63.9,0,0,0,208,128H96a63.27,63.27,0,0,0-32,8.9V80A16,16,0,0,1,80,64ZM32,384V266.67A10.69,10.69,0,0,1,42.67,256H469.33A10.69,10.69,0,0,1,480,266.67V384Z'></path>
                  </svg>
                  {bedroom}
                </p>

                <p className='flex items-center font-medium text-blue-500'>
                       <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5 mr-2" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M10.38 13.08A1 1 0 0 0 10 13H6a1 1 0 0 0 0 2h1.59l-5.3 5.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 16.41V18a1 1 0 0 0 2 0v-4a1 1 0 0 0-.08-.38a1 1 0 0 0-.54-.54ZM10 5a1 1 0 0 0-1 1v1.59l-5.29-5.3a1 1 0 0 0-1.42 1.42L7.59 9H6a1 1 0 0 0 0 2h4a1 1 0 0 0 .38-.08a1 1 0 0 0 .54-.54A1 1 0 0 0 11 10V6a1 1 0 0 0-1-1Zm3.62 5.92A1 1 0 0 0 14 11h4a1 1 0 0 0 0-2h-1.59l5.3-5.29a1 1 0 1 0-1.42-1.42L15 7.59V6a1 1 0 0 0-2 0v4a1 1 0 0 0 .08.38a1 1 0 0 0 .54.54ZM16.41 15H18a1 1 0 0 0 0-2h-4a1 1 0 0 0-.38.08a1 1 0 0 0-.54.54A1 1 0 0 0 13 14v4a1 1 0 0 0 2 0v-1.59l5.29 5.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z" /></svg>
          
                  {area}
                </p>
              </div>
            </div>
            <div className='absolute  flex justify-center top-[18px] transform -rotate-45 left-0 bg-red-600 text-white p-2 rounded-lg'>
              {status}
            </div>

            <div className='w-full'>
              <img src={image} alt='' className='object-cover w-full h-52' />
            </div>
          </div>

          <div className='py-5'>
            <h3 className='text-xl font-semibold'>{estate_title}</h3>
            <p className='text-gray-500'>{segment_name}</p>
            <p className='text-lg font-semibold mt-3'>{price}</p>

            <p className='mt-2 text-gray-600'>{location}</p>
          </div>
          <div>
            
            <button className=' hover:before:bg-red border-blue-500 relative h-[50px] w-full  border bg-white px-3 text-blue-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-1000 hover:text-white  hover:before:left-0 hover:before:w-full'>
              <Link className="z-50 relative" to={`/${id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
SingleCard.propTypes = {
  card: PropTypes.object.isRequired,
};
export default SingleCard;
