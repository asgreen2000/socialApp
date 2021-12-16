import { createContext, useState } from "react";

const AuthContext = createContext();


const Authentication = ({children}) => {

    useState

    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}