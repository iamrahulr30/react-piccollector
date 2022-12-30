const { mongoose } = require("mongoose")
const Pic = require("../models/picsModel")




//get all pics
const getPics = async (req, res) => {
    
    const pics = await Pic.find().sort({ createdAt : -1 })

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

    // const { title , path  } = req.body

    // if (!title || !path) {
    //     return res.status(404).json({ error : "title and path field is necessary"})
    // }
    // try{
    //     console.log("new upload")
    //     const file = req.file
    //     console.log(" file : " , file )
    // } catch (e) { 
    //     console.log("error")
    //     console.log(e)}

    // // console.log({ ...req.body.form })
    // return res.status(200).json({ body : "this is fun"})

    try{
        const pic = await Pic.create({...req.body})
        return res.status(200).json(pic)
    } catch (error) {
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