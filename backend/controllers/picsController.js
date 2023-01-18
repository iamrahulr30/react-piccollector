const { mongoose } = require("mongoose")
const Pic = require("../models/picsModel")
const { uploadFile , getPicUrl } = require("../s3")
const crypto = require("crypto")

let counter = 0
//get all pics
const getPics = async (req, res) => {
    
    const pics = await Pic.find().sort({ createdAt : -1 }).lean()

    for (let pic of pics){
        counter = counter + 1
        const imageUrl = await getPicUrl(pic.Path)
        pic.imageUrl = imageUrl
    }
    console.log("get count : " , counter)
    return res.status(200).json(pics)
}



//get single pic
const getPic = async (req, res) => {
    
    const { id } = req.params
    console.log(id)

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error : "invalid id "})
    }

    // try{
    const pic = await Pic.findById(id).sort( createdAt , -1 )
    
    if(!pic){
        return res.status(404).json({ error : "No such pic"})
    }

    return res.status(200).json(pic)
}



//upload
const uploadPic = async (req, res) => {

    const path = crypto.randomUUID()

    try{
        const result = await uploadFile({ ...req.file , path })
        const imageurl = await getPicUrl(path)
        const upload_pic = await Pic.create({...req.body , Path : path})
        const pic = {...upload_pic }
        pic.imageUrl = imageurl
        console.log("pic " , pic)
        return res.status(200).json(pic)
    } catch (error) {
        console.log('error' , error )
        return res.status(400).json({ error })
    }
}



//update
const updatePic= async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error : "invalid id "})
    }

    // const { title , path  } = req.body

    // if (!title || !path) {
    //     return res.status(404).json("title and path field is necessary")
    // }
    console.log({ ...req.body })
    const pic = await Pic.findOneAndUpdate( { _id : id} ,{
        ...req.body
    })

    if (!pic){
        return res.status(400).json({ error : "No such Pic" })
    }

    res.status(200).json(pic)
}



//delete Pic
const deletePic = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error : "invalid pic id"})
    }


    const pic = await Pic.findByIdAndDelete(id)

    if (!pic){
        return res.status(400).json({ error : "No such Pic" })
    }

    res.status(200).json(pic)
}


module.exports = {
    getPic,
    getPics,
    uploadPic,
    updatePic,
    deletePic
}