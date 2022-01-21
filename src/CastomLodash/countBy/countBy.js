function countBy(collection, func) {
    return collection.map(typeof func === 'function' ? func : value => value[func]).reduce((acc, val, i) => {
        acc[val] = collection[i];
        return acc;
    }, {})
};

module.exports = {countBy}

// console.log(countBy([6.1, 4.2, 6.3], Math.floor))
// console.log(countBy(['one', 'two', 'three'], 'length'));


