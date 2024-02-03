const mongoose = require("mongoose")


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    sId: {
        type: String,
        required: true
    }
})


const studentModel = mongoose.model("student", studentSchema)


module.exports = studentModel