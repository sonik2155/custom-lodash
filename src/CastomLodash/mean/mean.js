function mean(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num +=arr[i]
    }
    return num / arr.length
}

module.exports = { mean }
console.log(mean([[5], [2]]))