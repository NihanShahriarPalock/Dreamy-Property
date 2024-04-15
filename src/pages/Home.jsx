import { Helmet } from "react-helmet-async";
import AllCards from "../components/body/AllCards";
import Slider from "../components/body/Slider";
import SwiperSlider from "../components/body/SwiperSlider";




const Home = () => {
    return (
        <div>
            <Helmet>
                <title>NS | Home</title>
            </Helmet>
            {/* <Slider></Slider> */}
            <SwiperSlider></SwiperSlider>
          
         <AllCards></AllCards>
        </div>
    );
};

export default Home;