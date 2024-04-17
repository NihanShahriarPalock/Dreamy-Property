import { Helmet } from "react-helmet-async";
import AllCards from "../components/body/AllCards";
import SwiperSlider from "../components/body/SwiperSlider";





const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Dreamy | Home</title>
            </Helmet>
            
            <SwiperSlider></SwiperSlider>
           
          
         <AllCards></AllCards>
        </div>
    );
};

export default Home;