import React, { useContext } from "react";
import { PicsContext } from "../context/picsContext";

export const usePicsContext = () => {
    const context = useContext(PicsContext)

    if(!context) {
        throw Error("usePicsContext must be used inside an AuthContextProvider")
    }

    return context
}