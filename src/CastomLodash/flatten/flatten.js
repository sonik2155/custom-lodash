function flatten(arr) {
let array = [];

    for (let i = 0; i < arr.length; i++) {
        const arrayElement = arr[i];
         if(arrayElement instanceof Array) {
             for (let j = 0; j < arrayElement.length; j++) {
                 array.push(arr[i][j])
             }
         } else {
             array.push(arr[i])
         }
    }
    return array
}

module.exports = { flatten }
//console.log(flatten([1, [2, [3, [4]], 5]]));

