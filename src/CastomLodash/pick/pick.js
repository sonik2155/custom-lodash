function pick(obj, ...string) {
    let object = {}
    for(let el in obj) {
     for(let i = 0; i <= string.length; i++) {
         if(string[i] === el) {
            object[el] = obj[el]
         }
     }
    }
    return object
}

module.exports = { pick }

console.log(pick({'a':1,'b':'2','c':3, d: 5}, 'a', 'b'));