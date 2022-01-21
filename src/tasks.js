

//Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] < 10 && arr[i] > 3) {
//     console.log(arr[i])
//   }
// };

//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let acc = 0
// for(let i = 0; i < arr.length; i++) {
// if(arr[i] > 0) {
//     acc +=arr[i]
//     }
// }
// console.log(acc)


//Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

// let num = 0
// for(let i = 0; i <arr.length; i++) {
// num +=arr[i]/arr.length
// }
// console.log(num)

//Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
// let arr = [0, 1, 2, 3, 4, 5]
// function n(arr) {
// let num = []
// for(let i = 0; i < arr.length; i++) {
// if(arr[i] === i) {
//     num.push(arr[i])
// }
// return num
// }
// }


function findUniq(arr) {
    let obj = {};
    let arr1 = [];
    for(let i = 0; i < arr.length; i++) {
        let el = arr[i]
        if(obj[el]) {
            obj[el] += 1
        } else {
            obj[el] = 1
        }
    }

    for (const key in obj) {
        if(obj[key] === 1) {
            arr1.push(key)
        }
    }
    return +arr1
}

//console.log(findUniq([ 1, 1, 1, 2, 1, 1, 5, 5, 4, 4]))

const object1 = {
    a: 'somestring',
    b: 42,
    c: 48
};
let arr = []

for (let key in object1) {
    arr.push([key, object1[key]]);
    // while (key) {
    //     [key, object1[key]] = [];
    //     arr.push([key, object1[key]]);
    // }
}
console.log(arr)

//
// function findOdd(A) {
//     let obj = {}
//     for(let el of A) {
//         if(obj[el]) {
//             obj[el] += 1
//         } else {
//             obj[el] =1
//         }
//     }
//     let num = 0
//     for(let key in obj) {
//         if(obj[key]%2 !== 0) {
//             num += key
//         }
//     }
//     return num
// }
//
// console.log(findOdd([1, 5, 2, 2, 6, 8, 's']));