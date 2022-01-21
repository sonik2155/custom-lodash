function union(...array) {
let num = [];

// nested array
function nestedArray(arr) {
    let counter = 0
    while(counter < arr.length) {
        const value = arr[counter]
        if(Array.isArray(value)) {
            nestedArray(value)
        } else {
            num.push(value)
        }
        counter++
    }
}
nestedArray(array)

// shell sort method
let half = Math.floor(num.length / 2)

while(half >= 1) {

    for(let i = half; i < num.length; i++) {
        const current = num[i]
        let index = i;

        while(index > 0 && num[index - half] > current) {
            num[index] = num[index - half]
            index -=half
        }
        num[index] = current;
    }
    half = Math.floor(half / 2)
}

// removed duplicates from array
for(let i = 0; i <= num.length; i++) {
    if(num[i] === num[i - 1]) {
        num.splice(i, 1)
        i--
    }
}

return num
}

module.exports = { union }

 console.log(union([4, 4, 3, 1], [3, 4, 1, 4, 5]));
