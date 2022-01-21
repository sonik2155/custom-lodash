const filter = (arr, func) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            result.push(arr[i])
        }
    }
    return result;
  };

module.exports = { filter }

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'barneye', 'age': 34, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
];
//console.log(filter(users, function(o) { return !o.active; }))






