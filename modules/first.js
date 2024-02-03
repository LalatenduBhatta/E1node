let findMax = (arr) => {
    let res = arr.reduce((acc, ele) => {
        if (acc < ele) {
            acc = ele;
        }
        return acc;
    })
    return res;
}
let findMin = (arr) => {
    let res = arr.reduce((acc, ele) => {
        if (acc > ele) {
            acc = ele;
        }
        return acc;
    })
    return res;
}
// module.exports = findMax
// module.exports = findMin
// module.exports = { findMax, findMin }
// module.exports = { max: findMax, min: findMin }

module.exports.max = findMax
module.exports.min = findMin