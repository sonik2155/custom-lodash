function curry(func, ...preset) {
    let numOfArgs = func.length;
    let _ = '_'
    let nextPos = 0; 
    
    if (preset.filter(arg => arg !== _).length === numOfArgs) {
      return func.apply(null, preset);
    } else {
      return function (...added) {
        while(added.length > 0) {
          let a = added.shift();
         
          while (preset[nextPos] !== _ && nextPos < preset.length) {
            nextPos++
          }
          preset[nextPos] = a;
          nextPos++;
        } 
        
        return curry.call(null, func, ...preset);
      }
    }
}

module.exports = { curry }

var abc = function(a, b, c, d) {
    return [a, b, c, d];
  };
   
  var curried = curry(abc);
   


console.log(curried(1)(2)(3)(5));