
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../Footer/Footer";
const MainLayout = () => {
    return (
      <div>
        <div className="lg: w-[1480px] mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;