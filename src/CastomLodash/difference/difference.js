function difference(array, value = []) {
 let arr = [];
 
 for(let i = 0; i < array.length; i++) {
     if(value.indexOf(array[i]) === -1) {
         arr.push(array[i])
     }
 }
  return arr;
}

module.exports = { difference }
