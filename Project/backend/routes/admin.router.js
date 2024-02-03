const express = require("express")
const { studentSignup, studentLogin, studentForgotPassword } = require("../controllers/admin.controller")
const studentRouter = express.Router()

studentRouter.post("/signup", studentSignup)

studentRouter.post("/login", studentLogin)

studentRouter.post("/forgotpass", studentForgotPassword)



module.exports = studentRouter