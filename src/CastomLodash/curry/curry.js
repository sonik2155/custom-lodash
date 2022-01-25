function curry(func, ...args) {
    let numOfArgs = func.length;
    let nextPos = 0;

    //check if there is enough valid arguments
    if (args.length === numOfArgs) {
        return func.apply(null, args);
    } else {
        //return the 'helper' function
        return function (...added) {
            //loop through and put added arguments to the args arguments
            while(added.length > 0) {
                let a = added.shift();
                //get next placeholder position
                while (nextPos < args.length) {
                    nextPos++
                }
                //update the args
                args[nextPos] = a;
                nextPos++;
            }
            //bind with the updated args
            return curry.call(null, func, ...args);
        }
    }
}

module.exports = { curry }

var abc = function(a, b, c) {
    return [a, b, c];
  };
   
  var curried = curry(abc);
   


console.log(curried(1)(2)(3));