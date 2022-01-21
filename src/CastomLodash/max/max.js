 function max(arr) {
    let half = Math.floor(arr.length / 2);

    while(half >= 1) {
        for(let i = half; i < arr.length; i++) {
            let current = arr[i];
            let index = i;

            while(index > 0 && arr[index - half] > current) {
                arr[index] = arr[index - half];
                index -= half
            }
            arr[index] = current
        }
        half = Math.floor(half / 2)
    }
    return arr[arr.length - 1]
}

module.exports = { max }
console.log(max([-1, -3, -4, -5, -1, 0]));