const express=require("express");

const router=express.Router();
const userController=require("../controllers/user.controller.js")

router.get("/api/",userController.getAllUsers)
router.get("/api/profile",userController.getUserProfile)

module.exports=router;