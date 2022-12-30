require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const picRoutes = require("./routes/pics")


const app = express()


//multer
const multer = require("multer")
const storage = multer.memoryStorage()
const upload = multer({ storage : storage})

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path ,req.method)
    next()
})

app.use("/api/pics" ,  upload.single("image") ,  picRoutes)

//lisen
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //localhost
        app.listen(process.env.PORT, (req,res) => {
            console.log("listening to port 4000 => piccollector")
        })
    })
    .catch(err => console.log(err))