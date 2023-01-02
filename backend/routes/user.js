const express = require("express")

const { signupUser  , loginUser, getUserData } = require("../controllers/userController")

const router = express.Router()

router.post("/signup", signupUser )
router.post("/login" , loginUser )
router.post("/profile", getUserData )

module.exports = router
