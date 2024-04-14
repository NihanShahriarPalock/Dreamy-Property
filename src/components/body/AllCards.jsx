import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";

const AllCards = () => {
  const cards = useLoaderData();
  return (
    <div>
      <h2
        data-aos='fade-down'
        data-aos-duration='2000'
        className='text-center text-4xl mt-4 mb-8 font-bold'>
        Featured Property
      </h2>
      <div
        data-aos='zoom-in'
        data-aos-duration='2000'
        // data-aos-delay="1000"
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
