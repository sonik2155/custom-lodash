function add(a, b) {
    if(typeof a === "object" || typeof b === "object") {
        return +a + +b
    }
    return a + b
}

module.exports = { add }

console.log(add(true, true))