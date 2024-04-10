import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
  const {
    image,
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = card;
  return (
    <div>
      <div className='flex flex-col p-6 border-2  border-[#13131326] space-y-6 overflow-hidden shadow-md bg-white rounded-2xl   '>
        <div className='mb-6'>
          <img
            src={image}
            alt=''
            className='w-full  max-h-[435px]   rounded-2xl bg-[#13131326]'
          />
        </div>
        {/* <div className='bg-white flex gap-3'>
            <p className='text-[#23BE0A] w-max rounded-3xl font-medium text-base px-4 py-2 bg-[#23BE0A0D]'>
              {tags[0]}
            </p>
            <p className='text-[#23BE0A] w-max rounded-3xl font-medium text-base px-4 py-2 bg-[#23BE0A0D]'>
              {tags[1]}
            </p>
          </div> */}
        <div>
          <h2 className='font-bold text-2xl my-4 text-[#131313]'>
            {estate_title}
          </h2>
          <p className='font-medium text-[#131313CC]'>By : {price}</p>
        </div>
        <div className='divide-y-2 divide-dashed divide-gray-500'>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <p className=''>{location}</p>

        <Link to={`/${id}`}>
          {" "}
          <button className='btn font-semibold text-white bg-green-600 rounded-2xl'>
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
SingleCard.propTypes = {
  card: PropTypes.object.isRequired,
};
export default SingleCard;
