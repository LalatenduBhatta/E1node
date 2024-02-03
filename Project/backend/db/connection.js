const mongoose = require("mongoose")

let url = "mongodb://127.0.0.1:27017/myproject"

const dbConnect = async () => {
    try {
        mongoose.connect(url)
    } catch (error) {
        console.log("something went wrong while connecting the db");
    }
}

module.exports = dbConnect