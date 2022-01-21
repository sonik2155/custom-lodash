function toPairs(obj) {
    let arr = [];
    for (const key in obj) {
        arr.push([key, obj[key]])
    }
    return arr
};

module.exports = {toPairs}
const object1 = {
    a: 'somestring',
    b: 42,
    c: 48,
    d: {
        e: 8787
    }
};

console.log(toPairs(object1))