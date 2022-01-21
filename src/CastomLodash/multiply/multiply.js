function multiply(a, b) {
    if(typeof a === "object" || typeof b === "object") {
        return +a * +b
    }
    return a * b
};

module.exports = { multiply }

console.log(multiply(55, true))