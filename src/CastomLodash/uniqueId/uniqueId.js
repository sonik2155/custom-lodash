function counter(str) {
  var count = 0;
  return function counter() {
    count +=1
    if(str) {
      return str + count
    }
     return count 
 }
}

const uniqueId = counter()

console.log(uniqueId());
console.log(uniqueId());





