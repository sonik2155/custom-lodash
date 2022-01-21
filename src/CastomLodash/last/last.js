function last(arr) {
    if (!arr) {
        return []
    } else {
        return arr[arr.length - 1]
    }
}

module.exports = { last }
console.log(last([0, 9, 8]));