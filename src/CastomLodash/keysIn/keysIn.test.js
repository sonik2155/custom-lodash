import {keysIn} from "./keysIn";

test('should return keys of object in array', () => {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    const arr = keysIn(new Foo());

    expect(arr).toEqual(['a', 'b'])
});

test('should return keys of object in array if added new key', () => {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }
    Foo.prototype.c = 3;
    const arr = keysIn(new Foo());

    expect(arr).toEqual(['a', 'b', 'c']);
});