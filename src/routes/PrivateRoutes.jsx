import useAuth from "../hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} =useAuth();
    const location = useLocation();

    if (loading) {
        return <h2>Loading Spinner </h2>
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