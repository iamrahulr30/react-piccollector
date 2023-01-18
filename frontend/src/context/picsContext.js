import { createContext, useReducer, useState } from "react";
import React from "react"
export const PicsContext = createContext()

export const picsReducer = ( state, action ) => {


    // pagination setup in here
    function Paginator(arr) {
        if (!arr){
            return null
        }
        else {
            const  lenOfPics  = arr[0].length
            const picsPerPage = 2
            const totalPages = Math.ceil(lenOfPics/picsPerPage)
            
            const main_arr = []
            for (let i = 0;i <= totalPages;i++){
                const temp = arr[0].slice((i*picsPerPage)-picsPerPage ,i*picsPerPage )
                main_arr.push(temp)
            }
            
            return {
                pics : main_arr , 
                totalPages : main_arr.length
            } 
        } }
    switch (action.type) {
        case "SET_PICS" :
            console.log(action)
            // 
            // const { pics , totalPages } = Paginator([action.payload])
            return Paginator([action.payload])
        case "CREATE_PICS" : 
            console.log("payload : ",[action.payload.data] )
            const pushIn = [[action.payload.data][0]]
            state.pics.forEach(pic => {
                pushIn.push(...pic)
            })
            console.log("push In : " , pushIn )
            return Paginator([pushIn])
        case "DELETE_PICS":
            const delFrom = state.pics.filter((p) => p._id !== action.payload._id )
            return Paginator(delFrom)
        default : 
            return state
    }
}

export const PicsContextProvider = ({ children }) => {
    
    const [ state , dispatch ] = useReducer( picsReducer , {
        pics : null , totalPages : 0
    })

    return ( 
        <PicsContext.Provider
            value = {{ ...state ,  dispatch }}>
                { children }
        </PicsContext.Provider>
    )
}