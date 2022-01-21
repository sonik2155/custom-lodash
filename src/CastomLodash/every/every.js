function every(array, func) {
    let index = -1;
    let length = array == null ? 0 : array.length;

    while (++index < length) {
        if(!func(array[index], index, array)) {
            return false
        }
    }
    return true
}

module.exports = {every}
console.log(every([true, true], Boolean))

var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
];


//console.log(every(users, { 'user': 'barney', 'active': false }))