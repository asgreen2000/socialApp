import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import pathname from '../../pathname';
import { getAuthData } from "../../api/services";
import { AuthContext } from "../../context/Authentication";

const ProtectedRoute = props => {

    const {authData} = useContext(AuthContext);
    
    const {element} = props;
    const location = useLocation();
    console.log(authData);

    return !authData ? null: authData.isLogged ?  element: <Navigate state = {location.pathname} to={pathname.LOGIN}/>

}

export default ProtectedRoute;