const mongoose = require("mongoose")

//connection to db
async function dbConnect() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mongoose")
        console.log("Database Connected");
    } catch (err) {
        console.log("something went wrong", err);
    }
}

module.exports = dbConnect