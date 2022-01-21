function nth(array, n = 0) {
    let res = [];
    let abs = Math.abs(n);

    if(n === 0 || n > array.length) {
        return array[0]
        } else if (n > 0) {
        for (let i = 0; i <= array.length; i++) {
            if (i === n) {
                res.push(array[i - 1])
            } 
        } 
            } else if (n < 0) {
        for (let j = array.length; j >= 0; j--) {
            if (j === abs) {
                res.push(array[array.length - j])
            } else if(abs > array.length) {
                return undefined
            }
        }
    }

    for(let i = 0; i <= res.length; i++) {
        if (typeof res[i] === 'object') {
            return res[i]
        }
    }
    return String(res)
}

module.exports = { nth }

//console.log(nth(['a', 2, 'c', {}, 'v', 's', false], 10));

