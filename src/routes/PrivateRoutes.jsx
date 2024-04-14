import useAuth from "../hook/useAuth";
import { Link, Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({children}) => {
    const {user,loading} =useAuth();
    const location = useLocation();

    if (loading) {
        return (
          <div className='w-full h-[calc(100vh-130px)] flex flex-col justify-center items-center'>
            <div className='w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600'></div>
            <div className="mt-4 text-red-500 italic font-semibold text-3xl">
              {" "}
              <Link to='/login'>Please Login To See Details</Link>
            </div>
          </div>
        );
    }
    if(!user) {
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }
     
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;
PrivateRoutes.propTypes = {
    children:PropTypes.node
}