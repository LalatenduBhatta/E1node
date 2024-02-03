const express = require("express")
const hbs = require("hbs")
const { join } = require("path")
const PORT = 4000
const hostName = "127.0.0.6"

const app = express();

//middleware
app.use(express.static(join(__dirname, "public")))
app.use(express.json())

//hbs engine
app.set("view engine", "hbs")
hbs.registerPartials(join(__dirname, "views", "partials"))

app.get("/", (req, res) => {
    // res.send("hello")
    res.render("home", { name: "Virat", msg: "Scoring his 50th 100 today" })
})
app.get("/about", (req, res) => {
    res.render("about", { msg: "INDIA IS GOING TO WIN TODAY" })
})

app.listen(PORT, hostName, () => {
    console.log(`server startde at http://${hostName}:${PORT}`);
})

