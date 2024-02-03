const fs = require("fs")
// Read file

//sync

// console.log("program starts");
// let data = fs.readFileSync("./demo.txt")
// console.log(data.toString());
// console.log("program ends");


//asyn

// console.log("starts");
// fs.readFile("./demo.tx", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// })
// console.log("ends");


//Create File

// fs.writeFileSync("./demo2.txt", "FILE CREATED", "utf-8")

// fs.writeFile("./demo2.txt", "THIS IS THE UPDATED TEXT", (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("File created successfully");
//     }
// })


//AppendFile

// fs.appendFile("./demo2.txt", "This is added by append method", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         console.log("file updated");
//     }
// })


//delete file

// fs.unlink("./demo2.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file deleted");
//     }
// })


//copy file
//deep copy
// fs.copyFile("./demo3.txt", "./demo4.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file copied");
//     }
// })

//shallow copy
// fs.link("./demo3.txt", "./demo6.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file copied");
//     }
// })

//rename file
// fs.rename("./demo3.txt", "./virat.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file renamed");
//     }
// })

// folder
//creating folder

// fs.mkdir("./MyFolder", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("folder created");
//     }
// })

//deleting folder
fs.rmdir("./MyFolder", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("folder deleted");
    }
})