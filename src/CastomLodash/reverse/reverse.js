function reverse(array) {
    let arr = []
    for(let i = array.length - 1; i >= 0; i--) {
        //console.log(i) 5 4 3 2 1 0
        arr.push(array[i])
    }
    return arr
}

module.exports = { reverse }
// console.log(reverse([1, 5, 2, 6, 8, 's']));

Function.prototype.reverse = function() {
    let arr = this.splice(0);
    while (arr) {
        this.push(arr.pop())
    }
    return this
}

//console.log(reverse([1, 5, 2, 6, 8, 's']));

