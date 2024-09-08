const express = require("express");
const router= express.Router();
const { 
    registerUser, 
    loginUSer,
    logout,
} = require("../controllers/authController");

router.get("/", function(req,res){
    res.send("hey it's working");
});

router.post("/register", registerUser);

router.post("/login", loginUSer);
router.post("/logout", logout);

module.exports = router;