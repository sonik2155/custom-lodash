function omit(obj, ...string) {
    for(let el in obj) {
     for(let i = 0; i <= string.length; i++) {
         if(el === string[i]) {
            delete obj[el]
         }
      }
    }
    return obj
}

module.exports = { omit }

console.log(omit({'a':1,'b':'2','c':3, d: 5}, 'c'));