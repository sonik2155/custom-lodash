function valuesIn(obj) {
let arr = [];

    for (const key in obj) {
        arr.push(obj[key])
    }
    return arr;
}

module.exports = {valuesIn};

function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

console.log(valuesIn(new Foo()))