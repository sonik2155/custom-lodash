function pull(array, ...values) {
let arr = [];

for(let i = 0; i < array.length; i++) {
    if(values.indexOf(array[i]) === -1) {
        arr.push(array[i])
    }
}

return arr
}

module.exports = { pull }
console.table(pull([1, 2, 1, 1, 2, 2, 3, 5, 3, 3, 5, 5], 1, 5, 3));

