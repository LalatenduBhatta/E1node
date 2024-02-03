const express = require("express")
const dbConnect = require("./db")
const userModel = require("./userModel")

const PORT = 4000;
const hostName = "127.0.0.4"


const app = express();
//middleware
app.use(express.json())



app.get("/users", async (req, res) => {
    let data = await userModel.find()
    res.send(data)
})

app.post("/newuser", async (req, res) => {
    console.log(req.body);
    let data = new userModel(req.body)
    await data.save()
    res.send("data recieved")
})

app.delete("/delete", async (req, res) => {
    console.log(req.body);
    let result = await userModel.deleteOne(req.body)
    console.log(result);
    res.send("user deleted")
})

app.put("/update", async (req, res) => {
    console.log(req.body);
    let { name, age } = req.body
    let result = await userModel.updateOne({ name: name }, { $set: { age: age } })
    console.log(result);
    res.send("user updated")
})

app.get("/search", async (req, res) => {
    // console.log(req.query);
    let data = await userModel.find({
        $or: [
            { name: { $regex: req.query.name } }
        ]
    })
    res.send(data)
})
app.get("/search/:name", async (req, res) => {
    console.log(req.params);
    let data = await userModel.find({
        $or: [
            { name: { $regex: req.params.name } }
        ]
    })
    res.send(data)
})

app.listen(PORT, hostName, () => {
    dbConnect();
    console.log(`server created at http://${hostName}:${PORT}`);
})