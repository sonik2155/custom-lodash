function without(array, ...values) {
    let arr = []
    
    for(let i = 0; i < array.length; i++) {
        if(values.indexOf(array[i]) === -1) {
            arr.push(array[i])
        }
    }
   return arr
}

module.exports = { without }

console.log(without([1, 2, 2, 2, 2, 2, 3, 4, 4], 1, 2, 25));