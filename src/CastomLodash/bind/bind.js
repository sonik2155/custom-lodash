function mybind(func, thisArg, ...argument) {
    return function() {
        return func.call(thisArg, ...argument)
    }
}

var object = { user: 'fred' };

function greet(greeting) {
    return greeting + ' ' + this.user
  }

var bound = mybind(greet, object, 'hi');

console.log(bound());

module.exports = { mybind }