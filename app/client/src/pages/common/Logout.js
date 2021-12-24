import { useContext, useEffect, useState } from "react";
import { useNavigate, Link, Navigate} from "react-router-dom";
import { logout} from "../../api/services";
import { AuthContext } from "../../context/Authentication";


const Logout = props => {

    const {refreshAuthData} = useContext(AuthContext);
    const navigate = useNavigate();
    const SUCCESS_STATUS = "Bạn đã đăng xuất";
    const PENDING_STATUS = "Đang đăng xuất";
    const [statusText, changeStatus] = useState(PENDING_STATUS);

    useEffect(() => {

        logout().then(result => {
            
            changeStatus(SUCCESS_STATUS);
            refreshAuthData();
        })

    }, []);


    return  statusText === SUCCESS_STATUS ? <Navigate to='/login'/> : null;

}

export default Logout;