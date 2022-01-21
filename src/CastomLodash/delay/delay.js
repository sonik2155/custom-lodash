function delay(func, arg = '', time) {
        setTimeout(() => {
            func(arg)
        }, time);
}

module.exports = { delay };

console.log(delay(function(text) {
    console.log('5 second is out');
}, '5 second is out', 5000));