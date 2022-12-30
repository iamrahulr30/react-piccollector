const mongoose = require("mongoose")

const Schema = mongoose.Schema

const picSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    Path : {
        type : String,
        required : true,
        unique  : true
    },
    body : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now()
    },
    meta : {
        hearts : {
        type : Number,
        default : 0
        },
        downloads : {
        type : Number,
        default : 0
        }
    }
},{ timestamps : true })

module.exports = mongoose.model("Pic", picSchema)