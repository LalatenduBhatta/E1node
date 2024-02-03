const express = require("express")

const app = express()

const PORT = 7000
const hostName = "127.0.0.1"


//middlewares
app.use(express.json())

//get method
app.get("/", (req, res) => {
    res.send("<h1>WELCOME TO EXPRESS</h1>")
})
app.get("/about", (req, res) => {
    res.send("<h1>ABOUT PAGE</h1>")
})

//post
app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("HEY")
})


app.listen(PORT, hostName, () => {
    console.log(`server started at http://${hostName}:${PORT}`);
})