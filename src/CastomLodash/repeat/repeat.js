function repeat(str, num) {
    let string = '';
    for (let i = 1; i <= num; i++) {
           string += str
    }

    if(num === 0) {
        return ''
    }
    return string
}

module.exports = {repeat}

console.log(repeat('abc', 5))