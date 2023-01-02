import { useContext } from "react";

const { AuthContext } = require("../context/AuthContext");


export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("useAuthContext must be used inside an AuthContextProvider")
    }

    return context
}