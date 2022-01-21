function initial(arr) {
    for(let i = 0; i < arr.length; i++) {
        return arr.slice(0, arr.length - 1)
    }
}

module.exports = { initial }
console.log(initial([1, 2, 3, 5, 8]));