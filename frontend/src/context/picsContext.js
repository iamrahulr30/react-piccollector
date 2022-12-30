import { createContext, useReducer } from "react";
import React from "react"
export const PicsContext = createContext()

export const picsReducer = ( state, action ) => {
    switch (action.type) {
        case "SET_PICS" :
            return {
                pics : action.payload
            }
        case "CREATE_PICS" : 
            return {
                pics : [ action.payload.data , ...state.pics ]
            }
        case "DELETE_PICS":
            return {
                pics : state.pics.filter((p) => p._id !== action.payload._id )
            }
        default : 
            return state
    }
}

export const PicsContextProvider = ({ children }) => {
    
    const [ state , dispatch ] = useReducer( picsReducer , {
        pics : null
    })

    return ( 
        <PicsContext.Provider
            value = {{ ...state ,  dispatch }}>
                { children }
        </PicsContext.Provider>
    )
}