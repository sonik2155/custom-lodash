function flip(func) {
    return function cd(...arg) {
        return func.apply(this, arg.reverse())
    }
};

module.exports = {flip}
const flipped = flip((...args) => args)

console.log(flipped === typeof flipped)