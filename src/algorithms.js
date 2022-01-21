// let arr = [1, 2, 5, 19, 21, 32, 100, 120, 200, 214, 231]

// function binarySearch(arr, target) {
// let left = 0;
// let right = arr.length - 1;
// let mid;

// while(left <= right) {
//     mid = Math.round((right - left)/2) + left

//     if(target === arr[mid]) {
//         return mid
//     } else if(target < arr[mid]) {
//         right = mid - 1
//     } else {
//         left = mid + 1
//     }
//  }
// return -1
// }

//  console.log(binarySearch(arr, 2));


//  let num = ['a', 'b', 'c', 'd', 'v', 's']
//  console.log(binarySearch(num, 2));


// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let c = 0; c < arr.length - 1 - i; c++) {
//             if(arr[c] > arr[c + 1]) {
//                 const num = arr[c]
//                 arr[c] = arr[c + 1]
//                 arr[c + 1] = num
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([1, 2, 5, 19, 21, 32, 100, 120, 200, 214, 231]));


// let num = [1, 2, 5, 19, 21, 32, 100, 120, 200, 214, 231]
//   console.log(binarySearch(num, -55));


// function shellSort(arr) {
//     const lengthA = arr.length;
//     let half = Math.floor(lengthA / 2)

//     while(half >= 1) {

//         for(let i = half; i < lengthA; i++) {
//             const current = arr[i]
//             let index = i;

//             while(index > 0 && arr[index - half] > current) {
//                 arr[index] = arr[index - half]
//                 index -=half
//             }
//             arr[index] = current;
//         }
//         half = Math.floor(half / 2)
//     }
//     return arr
// }

//console.log(shellSort([1, 4, 4, 5, 29, 0, -214, 542, -64, 54, -3, 6, -6]));

//console.log(shellSort([1, 4, 4, 5, 29, 0, -214, 542, -64, 54, -3, 6, -6]));


// var flatten = function (array){
//     var res = [];
//     for(var i=0; i<array.length; i++) {
//         var el = array[i];
//         if(el instanceof Array) {
//             for(var j=0; j<el.length; j++) {
//                 res.push(el[j]);
//             }
//         } else {
//             res.push(el);
//         }
//     }
//     return res;
// }

function fisherYets(array) {
    for (let i = array.length - 1; i > 0; i--) {
       const random = Math.floor(Math.random() * (i + 1));
       [array[i], array[random]] = [array[random], array[i]]
    }
    return array
}

//console.table(fisherYets([ -214, -64,  -6, -3, 0, 1, 4, 4, 5, 6, 29, 54, 542]));

function eratosphen(number) {
    const primes = [];
    const arr = [];

    for (let i = 2; i <= number; i++) {
      if (!arr[i]) {
          primes.push(i);

          for (let j = i * i; j <= number; j +=i) {
             arr[j] = true
          }
      }

    }
    return primes
}

//console.log(eratosphen(11));
