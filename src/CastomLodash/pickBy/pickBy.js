function pickBy(obj) {
    let object = {}
    for(let el in obj) {
         if(typeof obj[el] === 'number') {
            object[el] = obj[el]
     }
    }
    return object
}
    
module.exports = { pickBy }
