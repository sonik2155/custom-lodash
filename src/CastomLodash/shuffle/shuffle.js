function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[rand]] = [arr[rand], arr[i]]
    }
    return arr
}

module.exports = {shuffle}
console.log(shuffle([ -214, -64,  -6, -3, 0, 1, 4, 4, 5, 6, 29, 54, 542]))