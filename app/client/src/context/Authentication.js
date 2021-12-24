import { createContext, useEffect, useState } from "react";
import { getAuthData } from "../api/services";

export const AuthContext = createContext();


const Authentication = ({children}) => {

    const [authData, setAuthData] = useState(null);

    useEffect(() => {
 
        refreshAuthData();
        
    }, []);

    const refreshAuthData = () => {
        getAuthData().then(data => {
            
            setAuthData(data);
        }).catch(error => 
            {}
        );
    }

    const data = {
        authData,
        refreshAuthData
    };


    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
}

export default Authentication;