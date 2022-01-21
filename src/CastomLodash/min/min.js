function min(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let c = 0; c < arr.length - 1 - i; c++) {
            if(arr[c] > arr[c + 1]) {
                let current = arr[c];
                arr[c] = arr[c + 1];
                arr[c + 1] = current
            }
        }
    }
    return arr[0]
}

module.exports = { min }

console.log(min([9, 1, 0, 4, -1, 5, -25]));