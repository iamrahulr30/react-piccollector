const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const { default: mongoose } = require("mongoose")

const createToken = (_id) => {
    console.log("token creation")
    console.log(process.env.SECRET )
    return jwt.sign({_id} , process.env.SECRET ,
        { expiresIn : "3d" })
}

//login
const loginUser = async (req, res) => {

    console.log("iudsivubis")

    // return res.status(200).json({ "msg" : "hiya"})

    const { email , password  } = req.body

    try { 
        const user = await User.login(email , password )

        // const us = { _id : user._id , email : user.email ,
        //     meta : user.meta }

        // console.log("ouibdsuic :: " , us)
        
        const token = createToken(user._id)


        return res.status(200).json({ email , token }) 

    }catch(err){
        
        return res.status(400).json({ error : err.message  })
    }

}

const signupUser = async(req, res) => {

    // return res.status(200).json({ "msg" : "hiya"})

    console.log(req.body)

    const { email ,password } = req.body
    
    try { 
        const user = await User.signup(email , password)

        const token = createToken(user._id)

        return res.status(200).json({_id : user._id , email , token }) 
 
    }catch(err){
        
        console.log("signup error")
        return res.status(400).json({ err : err.message  })
    }

}

const getUserData = async (req, res) => {


    try { 
        const { user } = req.body

        console.log("user id : ", user.id)

        const ud = await  User.findById(user.id)

        console.log("ud :: ", ud)

        return res.status(200).json(ud)
    } catch (e) {
        console.log(e)
        return res.status(404).json({ error : e })
    }



}
module.exports = { signupUser , 
            loginUser ,
            getUserData
        }