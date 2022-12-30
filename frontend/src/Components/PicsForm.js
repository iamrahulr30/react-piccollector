import React , { useState } from "react"
import  axios from "axios"
import uuid from 'react-uuid'
import { usePicsContext } from "../Hooks/usePicContext"

// const axios = require('axios');

export const PicsForm = () => {

    const { dispatch } = usePicsContext()


    const [ title , setTitle ] = useState("")
    const [ picUp , setPicUp ] = useState("")
    const [ des ,  setDes ] = useState("")



    // function setForm(form) {
    //     console.log(picUp.target.files)
    // }
    const handleSubmit = async (e) => {
        e.preventDefault()

        // const formData = new FormData()

        // formData.append("image" , picUp )
        // formData.append("title" , title )
        // formData.append("description" , des )


        // console.log(formData)


        // const response = await fetch("/api/pics", {
        //     method : "POST",
        //     body : JSON.stringify(formData),
        //     headers : {
        //         "Content-Type" : "multipart/form-data",
        //         'Authorization' : `Bearer ${user.token}`
        //     }
        // })
        // const jsonInp = JSON.stringify(picpick)

        const Path = uuid()
        console.log(Path)
        const response = await axios.post("/api/pics", {
            title , Path , body : des
            } , 
            {
                "Content-Type" : "multipart/form-data",
                // 'Authorization' : `Bearer ${user.token}`
            })

        
        if(response){
            const json =  await response
            dispatch({ type : "CREATE_PICS" , payload : json })
            console.log(json.data)
        }


        setDes("")
        setTitle("")
        setPicUp("")

    }


    return ( 
        <div className="form-a">
        <form  className="PicUp form1" onSubmit={handleSubmit} encType="multipart/form-data">
            <h3>New pic</h3>

            <label>Pic title : </label>
            <input 
                type="text" 
                onChange={(e) => setTitle(e.target.value)} 
                value={title}
                name="title"
                // className={emptyFields.includes("title") ? "error" : ""}
            />
            <br />
            <label>Pic : </label>
            <input 
                type="file" 
                onChange={(e) => setPicUp(e.target.files[0])} 
                name="image"
                // setPicUp(e.target.files[0])
                // value={picUp}
                // className={emptyFields.includes("title") ? "error" : ""}
            />
            <br />
            <label>body : </label>
            <input 
                type="text" 
                onChange={(e) => setDes(e.target.value)} 
                value={des} 
                name="description"
                // className={emptyFields.includes("reps") ? "error" : ""}
            />
            <br /><br />
            <button type="submit" className="Subbuttons">Upload Pic</button>
        </form>
        </div>
    )
}