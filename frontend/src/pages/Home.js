import React , { useEffect } from "react"
import { PicDetials } from "../Components/PicDetials"
import { PicsForm } from "../Components/PicsForm"
import { usePicsContext } from "../Hooks/usePicContext"


export const Home = () => {

    const { pics , dispatch } = usePicsContext()


    useEffect(() => {

        const fetchPics = async () => {
            const response = await fetch("/api/pics")

            const json = await response.json()

            if(response.ok) {
                dispatch({ type : "SET_PICS" , payload : json })
            }

            if (!response.ok) {
                console.log("fetch problem try again")
            }

        }

        fetchPics()
    }, [ dispatch ] )

    


    return ( 
        <div className="home">
            <div className="pics">
                { pics && pics.map(pic => (
                    <PicDetials pic={ pic } key={pic._id} />
                ))}
            </div>
            <PicsForm/>
        </div>
    )
}