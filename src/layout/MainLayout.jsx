import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../Footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
