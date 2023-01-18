const express = require("express")

const { signupUser  , loginUser, getUserData } = require("../controllers/userController")
const { requireAuth } = require("../middleware/requireAuth")

const router = express.Router()

router.post("/signup", signupUser )
router.post("/login" , loginUser )


//need authorization
router.use(requireAuth)
router.post("/profile", getUserData )

module.exports = router
