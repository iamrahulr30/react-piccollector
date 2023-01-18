const express = require("express")

const { getPics, 
        getPic,
        uploadPic, 
        updatePic, 
        deletePic } = require("../controllers/picsController")
const { requireAuth } = require("../middleware/requireAuth")





const router = express.Router()

// upload.single("image")

//path
router.get("/", getPics )
router.get("/:id", getPic )


//need authorization
router.use(requireAuth)
router.post("/", uploadPic ) 
router.patch("/:id" , updatePic )
router.delete("/:id", deletePic )

module.exports = router