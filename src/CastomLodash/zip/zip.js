function zip(...arr) {
    let array = [];
    for(let i = 0; i < arr[0].length; i++) {
        if(!Array.isArray(array[i])) {
            array[i] = []
        }
        for (let el of arr) {
            array[i].push(el[i])
        }
    }
    return array
}

module.exports = { zip }

console.log(zip(['a', 'b', 3], [1, 2, 34], [true, false, false]));