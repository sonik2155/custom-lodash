import {valuesIn} from "./valuesIn";

test('should return array of property values', () => {
    function Foo() {
        this.a = 1;
        this.b = 2;
    };
    Foo.prototype.c = 3;

    const values = valuesIn(new Foo());

    expect(values).toEqual([ 1, 2, 3 ]);
});

test('should return correct array length', () => {
    function Foo() {
        this.a = 1;
        this.b = 2;
        this.s = 4
    };
    Foo.prototype.c = 3;
    Foo.prototype.r = 6;

    const values = valuesIn(new Foo());

    expect(values.length).toEqual(5);
});