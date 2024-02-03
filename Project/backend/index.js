const express = require("express")
const dbConnect = require("./db/connection")
const studentRouter = require("./routes/admin.router")

//port and host declaration
const PORT = 2000
const hostname = "127.0.0.1"

//app declaration
const app = express()

//middlewares
app.use(express.json())

//routes
app.use("/student", studentRouter)

//server listening
app.listen(PORT, hostname, async () => {
    await dbConnect()
    console.log("server started at http://" + hostname + ":" + PORT + " & connected to database");
})