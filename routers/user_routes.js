const express = require("express");
const router = express.Router();
const { SignUp, UserLogin } = require("../controllers/user_controllers");

router.post("/sign-up", SignUp );
router.post("/login", UserLogin );

module.exports = router;