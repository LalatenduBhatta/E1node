const express = require("express")
const { readFileSync, writeFileSync } = require("fs")
const { join } = require("path")
const PORT = 1111
const hostName = "127.0.0.5"

const app = express()

//middlewares
app.use(express.json())
app.use(express.static(join(__dirname, "public")))

app.get("/", (req, res) => {
    // res.sendFile(`${__dirname}/public/index.html`)
    res.sendFile(join(__dirname, "public", "index.html"))
})

app.post("/student", (req, res) => {
    console.log(req.body);
    let { review } = req.body
    let characters = review.length
    let words = review.split(" ").length
    let studentReviews = JSON.parse(readFileSync("./Db.json", "utf-8"))
    studentReviews.push(req.body)
    writeFileSync("./Db.json", JSON.stringify(studentReviews))
    res.send({ characters, words })
})

app.listen(PORT, hostName, () => {
    console.log(`server started at http://${hostName}:${PORT}`);
})