function groupBy(arr, func) {
    return arr.map(typeof func === 'function' ? func : val => val[func]).reduce((acc, val, i) => {
            acc[val] = (acc[val] || []).concat(arr[i]);
            return acc;
        }, {})
}

module.exports = {groupBy}
 console.log(groupBy(['one', 'two', 'three'], 'length'))
// console.log(groupBy([6.1, 4.2, 6.3], Math.floor));


