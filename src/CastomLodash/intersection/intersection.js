function intersection(...arr) {
let num = [];
let array = [];

function nestedArray(nums) {
    let counter = 0
    while(counter < nums.length) {
        const value = nums[counter]
        if(Array.isArray(value)) {
            nestedArray(value)
        } else {
            num.push(value)
        }
        counter++
    }
}
nestedArray(arr);

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

for(let i = 0; i <= num.length - 1; i++) {
    if(num[i] === num[i + 1]) {
      array.push(num[i])  
    // } else {
    //     for(let c = 0; c < num.length; c++) {
    //         if(num[c] === num[c + 1]) {
    //             num.splice(c, 1);
    //             c--
    //         }
    //     }
        //return array
    }
}

for(let c = 0; c <= array.length; c++) {
    if (array[c] === array[c - 1]) {
        array.splice(c, 1);
        c--
    }
}
return array
}

module.exports = { intersection }
console.log(intersection([1, 3, 3, false], [1, 2, 3]));