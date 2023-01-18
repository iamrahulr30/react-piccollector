import React , { useState } from "react"
import  axios from "axios"
import uuid from 'react-uuid'
import { usePicsContext } from "../Hooks/usePicContext"
import { useAuthContext } from "../Hooks/useAuthContext"

// const axios = require('axios');

export const PicsForm = () => {

    const { dispatch } = usePicsContext()
    const { user } = useAuthContext()


    const [ title , setTitle ] = useState("")
    const [ picUp , setPicUp ] = useState("")
    const [ des ,  setDes ] = useState("")



    // function setForm(form) {
    //     console.log(picUp.target.files)
    // }
    const handleSubmit = async (e) => {
        e.preventDefault()

        
        // console.log(formData)

        // console.log(formData)

        // const data = { title , Path : "none"  , body : des }
        // const response = await fetch("/api/pics", {
        //     method : "POST",
        //     body : JSON.stringify(data),
        //     headers : {
        //         "Content-Type" : "multipart/form-data",
        //         'Authorization' : `Bearer ${user.token}`
        //     }
        // })
        // const jsonInp = JSON.stringify(picpick)
        // {
        //     "Content-Type" : "multipart/form-data",
        //     'Authorization' : `Bearer ${user.token}`
        // }
        // const Path = uuid()
        // console.log(Path)

        // aws
        const formData = new FormData()

        formData.append("image" , picUp )
        formData.append("title" , title )
        formData.append("body" , des )

        const headers = {
            'Content-Type': "multipart/form-data",
            'Authorization' : `Bearer ${user.token}`
        }
        
        const response = await axios.post("/api/pics", formData  ,{ 
            headers : headers })

        
        if(response){
            const json =  await response
            console.log(json)
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
                // value=""
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

