const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const requireAuth = async(req , res ,next) => {

    console.log("auth palace" , req )

    
    const { authorization } = req.headers
    
    if(!authorization) {
        return res.status(401).json({error : "Authorization token required"})
    }

    const token = authorization.split(" ")[1]
    console.log("token" , token)

    try {
        const {_id} = jwt.verify(token , process.env.SECRET )

        req.user = await User.findOne({_id}).select('id meta')

        console.log(req.user)
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error : "Request is not authorized"})
    }

}

module.exports = { requireAuth }