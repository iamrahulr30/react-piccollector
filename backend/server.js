require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const picRoutes = require("./routes/pics")
const userRoutes = require("./routes/user")



const app = express()

app.use(
    cors({
        origin : "http://localhost:3000",
    })
)


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

//path
app.use("/api/user" , userRoutes )
app.use("/api/pics" ,  upload.single("image") ,  picRoutes)


//listen
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //localhost
        app.listen(process.env.PORT, (req,res) => {
            console.log("listening to port 4000 => piccollector")
        })
    })
    .catch(err => console.log(err))