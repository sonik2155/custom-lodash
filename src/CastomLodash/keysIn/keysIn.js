function keysIn(obj) {
    let arr = []
    for (const key in obj) {
        arr.push(key)
    }
    return arr
}
function Foo() {
    this.a = 1;
    this.b = 2;
}
module.exports = {keysIn}

//console.log(keysIn(new Foo));

