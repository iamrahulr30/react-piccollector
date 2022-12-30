const express = require("express")

const { getPics, 
        getPic,
        uploadPic, 
        updatePic, 
        deletePic } = require("../controllers/picsController")





const router = express.Router()

// upload.single("image")

//path
router.get("/", getPics )
router.get("/:id", getPic )
router.post("/", uploadPic ) 
router.patch("/:id" , updatePic )
router.delete("/:id", deletePic )

module.exports = router