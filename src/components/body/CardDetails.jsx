import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const IdInt = parseInt(id);
  const card = cards.find((card) => card.id == IdInt);
  
  return (
    <div>
      <div className='flex flex-col lg:flex-row gap-3 lg:gap-12 '>
        <div className='w-full lg:w-1/2 bg-[#23BE0A0D] rounded-2xl items-center p-16 flex   justify-center'>
          <img className='w-4/5 ' src={card.image} alt='' />
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
          {/* <div className='divide-y-2 divide-dashed divide-gray-500'>
            <div></div>
            <div>
              <p className='text-xl font-medium text-[#131313CC] my-4'>
                {card.category}
              </p>
            </div>
            <div></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
