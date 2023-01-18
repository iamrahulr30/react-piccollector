import React , { useEffect, useState } from "react"
import { PicDetials } from "../Components/PicDetials"
import { PicsForm } from "../Components/PicsForm"
import { usePicsContext } from "../Hooks/usePicContext"
import Pagination from '../Components/Pagination'
import { useAuthContext } from "../Hooks/useAuthContext"

export const Home = () => {

    const { user } = useAuthContext()
    const { pics : picsBundle , dispatch , totalPages} = usePicsContext()

    //pagination 
    // // let totalPages =  3
    // const [ tp ,setTp ] = useState(0)
    // console.log(totalPages)
    const [ currentPage , setCurrentPage ] = useState(1)
    // // const [ indexOfLastPost , setIndexOfLastPost ] = useState(picsPerPage * currentPage)
    // // const [ indexOfFirstPost , setIndexOfFirstPost ] = useState(indexOfLastPost - picsPerPage)
    // const [ pagepics , setPagePics ] = useState(picsBundle[currentPage])

    useEffect(() => {

        const fetchPics = async () => {
            const response = await fetch("/api/pics")

            const json = await response.json()


            if(response.ok) {
                dispatch({ type : "SET_PICS" , payload : json })
                // setPagePics(json.slice( indexOfFirstPost , indexOfLastPost ))
            }

            if (!response.ok) {
                console.log("fetch problem try again")
            }

        }

        fetchPics()

        // console.log("yada : " ,picsBundle.length)
        
    }, [ dispatch ] )

    // console.log(indexOfFirstPost , indexOfLastPost, pagepics)
    

    // const paginate = number => {

    //     console.log("number : ", number)
    //     setCurrentPage(number) 
    //     setIndexOfLastPost(picsPerPage * currentPage)
    //     setIndexOfFirstPost(indexOfLastPost - picsPerPage)
    //     console.log(currentPage , indexOfFirstPost , indexOfLastPost)

    //     // setPagePics(pics.slice( indexOfFirstPost , indexOfLastPost ))
    // }
    const paginate = number => { 
        console.log("number : ",number)
        setCurrentPage(number) 
    }
    return ( 
        <div>
            { currentPage }
            <div className="home">
                <div className="pics" >
                    { picsBundle && picsBundle[currentPage].map(pic => (
                        <PicDetials pic={ pic } key={pic._id} />
                    ))}
                    {/* { picsBundle && picsBundle.map(pic => (
                        <PicDetials pic={ pic } key={pic._id} />
                    ))} */}
                </div>
                {user && <PicsForm/>}
            </div>
            <Pagination
                // postsPerPage={picsPerPage}
                totalPosts={totalPages}
                paginate={paginate}
            />
        </div>
    )
}