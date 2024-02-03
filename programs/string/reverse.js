// function revStr(str) {
//     let lastIndex = str.length - 1;
//     let revStr = "";
//     // for (let i = 0; i <= lastIndex; i++) {
//     //     revStr = str[i] + revStr
//     // }
//     for (let i = lastIndex; i >= 0; i--) {
//         revStr = revStr + str[i]
//     }
//     return revStr
// }

// console.log(revStr("Javascript is the best language"))

//using methods
const RevStr = (str) => str.split("").reverse().join("")


// console.log(RevStr("Hello World"));



function RevWords(str) {
    str = str + " "
    let words = ""
    let RevStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            words += str[i]
        }
        else {
            for (let j = words.length - 1; j >= 0; j--) {
                RevStr += words[j]
            }
            words = ""
            RevStr += " "
        }
    }
    return RevStr
}
console.log(RevWords("Hello World"));