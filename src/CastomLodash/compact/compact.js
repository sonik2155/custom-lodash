function compact(arr) {
    let num = []
    for(let i = 0; i <= arr.length; i++) {
        if (arr[i] !== 0 && arr[i] !== false && arr[i] !== null && arr[i] !== '' && arr[i] !== undefined && !(arr[i] !== arr[i])) {
            num.push(arr[i])
        } 
    }
    return num
}

module.exports = { compact }
// console.log(compact([false, NaN, '', NaN, NaN, null, 0]));