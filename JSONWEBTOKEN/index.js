// const bcrypt = require("bcrypt")
// const salt = 5;

// const password = "Vicky@1234"

// bcrypt.hash(password, salt, (error, hashData) => {
//     if (error) {
//         console.log("error occured");
//     } else {
//         console.log(hashData);
//     }
// })

// bcrypt.compare("Vicky@1234", "$2b$10$8ZhdMY8XpCn7tIzoyswksOmAiCBNDYRoim0VTdAyAXXYBQHG.RbWW", (error, result) => {
//     console.log(result);
//     if (error) {
//         console.log(error);
//     } else {
//         if (result) {
//             console.log("Password matched")
//         } else {
//             console.log("password is not matching");
//         }
//     }
// })


// //jwt

// const jwt = require("jsonwebtoken")

// const secretKey = "Jspiders"

// let student = {
//     name: "Vicky",
//     address: "bnglr",
//     age: 24,
//     marks: [{ subName: "JS", mark: "30" }]
// }

// const token = jwt.sign(student, secretKey, { expiresIn: "1h" })

// console.log(token);

// jwt.verify(token, secretKey, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })

const express = require("express");
const bcrypt = require("bcrypt")
const PORT = 4000;
const hostName = "127.0.0.1"

const app = express()

app.use(express.json())

app.post("/newstudent", async (req, res) => {
    // console.log(req.body);
    let { password } = req.body
    let salt = 10
    let hashPass = await bcrypt.hash(password, salt)
    // console.log(hashPass);
    data = { ...req.body, password: hashPass }
    res.send(data)
})

app.listen(PORT, hostName, () => {
    console.log(`server started at http://${hostName}:${PORT}`);
})