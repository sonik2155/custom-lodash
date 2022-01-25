function memoize(func, ...resolver) {
    const memoized = function(...args) {
        const key = resolver[0];
        const cache = memoized.cache

        if (cache.has(key)) {
            return cache.get(key)
        }
        const result = func.apply(this, args)
        memoized.cache = cache.set(key, result) || cache
        return result
    }
    memoized.cache = new (memoize.Cache || Map)
    return memoized
}

let memoized = memoize(function(a, b, c) {
    return a + b + c;
});


module.exports = {memoize}
console.log(memoized(1, 2, 3))
console.log(memoized(1, 2, 35));

