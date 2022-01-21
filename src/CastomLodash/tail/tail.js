function tail(arr) {
for(let i = 0; i < arr.length; i++) {
      return arr.slice(1, arr.length)   
    }
}

module.exports = { tail }
console.table(tail([1, 1, false, false, false]));