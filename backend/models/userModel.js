const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const userSchema =  new Schema ({
    email : {
        type : String,
        required : true,
        unique : true 
    },
    password : {
        type : String,
        required : true,
    }
})

userSchema.statics.signup = async function( email ,password ) {

    if ( !email || !password ) { 
        throw Error("All fields must be filled")
    }
    if(!validator.isEmail(email)){
        throw Error("Email is not valid")
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not Strong💪🏾 enough")
    }


    const exists = await this.findOne({ email })

    if (exists){
        throw Error("Email already in use");
    }

    console.log("overcome validation")
    
    const salt = await bcrypt.genSalt( 16 )
    console.log(salt)
    const hash = await bcrypt.hash(password , salt )
    console.log(hash)
    console.log("overcome hashing")

    

    const user = await this.create({ email , password : hash })


    return user
}



userSchema.statics.login = async function( email ,password ) {

    if ( !email || !password ) { 
        throw Error("All fields must be filled")
    }

    const user = await this.findOne({ email })

    if (!user) {
        throw Error("No such User")
    }

    const match = await bcrypt.compare( password , user.password )

    if (!match){
        throw Error("Invalid Username")
    }

    return user
}



module.exports = mongoose.model("User" , userSchema )
