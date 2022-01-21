function devide(a, b) {
    if(typeof a === "object" || typeof b === "object") {
        return +a / +b
    }
    return a / b
}

module.exports = { devide }
console.log(devide(false, false))