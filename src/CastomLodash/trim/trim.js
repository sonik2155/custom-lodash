function trim(str, chars) {
    const alp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const arr = str.split(' ');
    const res = [];
    for (let i = 0; i < arr.length; i++) {
            if(arr[i] !== '' && arr[i] !== alp[i] && arr[i].indexOf(chars)) {
                res.push(arr[i])
            }
    }
return res.toString();
}

module.exports = {trim}
console.log(trim(' ===-- we abc  awe=sdf sdfsdf =   ', '===-'));
