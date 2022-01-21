import { tail } from './tail';

test('should remove first array element ad return array', () => {
    const arr = tail([1, 1, false, false, false]);
    const newArr = [1, false, false, false];

    expect(newArr).toEqual(arr);
});

test('should return new array length', () => {
    const arr = tail([1, 1, false, false, false]);

    expect(4).toEqual(arr.length);
})