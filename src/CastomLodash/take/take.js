function take(array, n = 1) {
    let arr = []
    if(n === 0) {
        return []
    } 
    if(n > array.length) {
        return array
    }

    for(let i = 0; i < n; i++) {
        arr.push(array[i])
    }   
    return arr
}

module.exports = { take }

 console.log(take([1, 2, 3, 4, 25, 85, 6, 10, 52, 41], -2));