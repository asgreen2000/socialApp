import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import pathname from '../../pathname';
import { getAuthData } from "../../api/services";

const ProtectedRoute = props => {

    const [isAuth, setIsAuth] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const {element} = props;
    const location = useLocation();
    
    useState(() => {

        console.log("12312");
        getAuthData();

    }, [isAuth]);

    return !isLoaded ? null :
    isAuth ? element: <Navigate state = {location.pathname} to={pathname.LOGIN}/>

}

export default ProtectedRoute;