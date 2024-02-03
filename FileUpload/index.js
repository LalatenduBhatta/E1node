const express = require("express")
const path = require("path")

const PORT = 2000;
const hostName = "127.0.0.2"

const app = express()

app.use(express.json())

const multer = require("multer")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "image")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/upload", upload.single("image"), (req, res) => {
    console.log(req.body);
    res.send("image uploaded")
})

app.listen(PORT, hostName, () => {
    console.log("server listening in http://" + hostName + ":" + PORT);
})