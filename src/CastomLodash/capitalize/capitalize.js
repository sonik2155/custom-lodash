function capitalize(...string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const stringElement = string[i];
        let newStr = stringElement.toLowerCase();
        if (string[i] === '') {
            return 'empty string'
        }

            newStr = newStr[0].toUpperCase() + newStr.substr(1);
            result += newStr
    }
    return  result
}

module.exports = { capitalize }

console.log(capitalize('Fred, asdc wewe'))