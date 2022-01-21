function memoize(func, resolver) {
const cache = {};
return function () {
    if(cache[resolver]) {
        return cache[resolver]
    } else {
        const res = func(resolver);
        cache[resolver] = res;
        return res
        }
    }
}
var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };

var values = memoize(object);


console.log(values())

