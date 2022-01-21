function takeRight(array, n = 1) {
    let arr = [];
    let arr1 = [];
    
    if(n === 0) {
        return []
    } else if(n > array.length) {
        return array
    }
    for(let i = array.length - 1; i >= 0; i--) {
        arr.push(array[i])
    }   
    for(let i = 0; i < n; i++) {
        arr1.push(arr[i])
    }
    return arr1.reverse()
}

module.exports = { takeRight }

console.log(takeRight([1, 2, 3, 4, 25, 85, 6, 10, 52, 41], -5));