let str = "Hello World"
//1
let res = str.split("").reverse().join("")
console.log(res);

//2
let res1 = str.split(" ").reduce((a, e) => {
    return a += e.split("").reverse().join("") + " "
}, "")
console.log(res1);

//3
let res2 = str.split(" ").reverse().join(" ")
console.log(res2);


//occurance of each char
let obj = {}
str.split("").forEach(e => obj[e] = obj[e] ? obj[e] + 1 : 1)

console.log(obj);


//non repeated
let occoranceOfChar = {}
str.split("").forEach(e => occoranceOfChar[e] = occoranceOfChar[e] ? occoranceOfChar[e] + 1 : 1)

for (let key in occoranceOfChar) {
    if (occoranceOfChar[key] == 1) {
        console.log(key);
    }
}

//repeated
let occoranceOfChar1 = {}
str.split("").forEach(e => occoranceOfChar1[e] = occoranceOfChar1[e] ? occoranceOfChar1[e] + 1 : 1)

for (let key in occoranceOfChar1) {
    if (occoranceOfChar1[key] == 1) {
        console.log(key);
    }
}
