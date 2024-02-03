//express
const express = require("express")
//cors
const cors = require("cors")

//mongoose
const mongoose = require("mongoose")

//model
const userModel = require("./userSchema")

//port and hostname
const PORT = 8000
const hostName = "127.0.0.8"

//server variable
const app = express()

//middleware
app.use(express.json())
app.use(cors())


//get api
app.get("/student", (req, res) => {
    let data = {
        name: "spiderman",
        age: 24,
        address: "newyork"
    }
    res.send(data)
})

//post api
app.post("/newuser", async (req, res) => {
    console.log(req.body);
    let data = new userModel(req.body)
    await data.save()
    res.send("data recieved")
})



//database connection
mongoose.connect("mongodb://127.0.0.1:27017/reactServer")
    .then(() => console.log("db connected"))
    .catch(err => console.log(err))

//server listen
app.listen(PORT, hostName, () => {
    console.log(`server listening at http://${hostName}:${PORT}`);
})