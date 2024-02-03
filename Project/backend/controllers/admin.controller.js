const bcrypt = require("bcrypt")
const studentModel = require("../model/admin.model")
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const jwt = require("jsonwebtoken")

//nodemailer confige
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

//token generation for StudentID
const generateToken = (id) => {
    // console.log(id.toString());
    let studentId = id.toString()
    let token = jwt.sign(studentId, "Vicky")
    // console.log(token);
    return token
}

const studentSignup = async (req, res, next) => {
    try {
        let { password, name, email, mobile, sId } = req.body
        if (!password || !name || !email || !mobile || !sId) {
            throw ("please provide all the required field")
        } else {
            let isUserExisted = await studentModel.findOne({ email, mobile })
            if (!isUserExisted) {
                let hashedPassword = await bcrypt.hash(password, 10)
                let student = { name, email, mobile, sId, password: hashedPassword }
                let newStudent = new studentModel(student)
                await newStudent.save()
                res.status(201).json({
                    token: generateToken(newStudent._id)
                })
            } else {
                throw ("user already registerd")
            }
        }
    } catch (error) {
        // console.log(error)
        res.status(401).send(error)
    }
}


const studentLogin = async (req, res, next) => {
    try {
        let { password, email } = req.body
        if (!password || !email) {
            throw ("please provide all the required field")
        } else {
            let student = await studentModel.findOne({ email })
            if (student) {
                let passwordMatched = await bcrypt.compare(password, student.password)
                if (passwordMatched) {
                    res.status(201).send({ msg: "Login succesfully", student })
                } else {
                    throw (" password is not matching")
                }
            } else {
                throw ("user is not exists")
            }
        }
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}


const studentForgotPassword = async (req, res, next) => {
    try {
        let { email } = req.body
        if (!email) {
            throw ("please provide your email")
        } else {
            let student = await studentModel.findOne({ email })
            if (student) {
                const otp = randomstring.generate({ length: 6, charset: 'numeric' });
                const mailOptions = {
                    from: 'lalatendubhatta@gmail.com',
                    to: email,
                    subject: 'Your OTP',
                    text: `Your OTP is: ${otp}`
                }
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return res.status(500).send(error.toString());
                    }
                    res.status(200).send('OTP sent successfully!');
                })
            } else {
                throw ("user is not exists")
            }
        }
    } catch (error) {
        console.log(error)
        res.status(401).send(error)
    }
}




module.exports = { studentSignup, studentLogin, studentForgotPassword }