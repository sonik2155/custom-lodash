function omitBy(obj) {
    let object = {}
    for(let el in obj) {
         if(typeof obj[el] !== 'number') {
            object[el] = obj[el]
     }
    }
    return object
}
    
module.exports = { omitBy }
console.log(omitBy({'a':1,'b':'2','c':3, d: 5, f: '24'}));