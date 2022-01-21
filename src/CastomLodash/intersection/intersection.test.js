import { intersection } from './intersection';

test('should create an array of unique values that are included in all given arrays', () => {
    const arr = intersection([1, 3, 3], [1, 2, 3]);
    const newArr = [1, 3];

    expect(newArr).toEqual(arr);
});

test('should return new array length', () => {
    const arr = intersection([1, 3, 3], [1, 2, 3]);

    expect(2).toEqual(arr.length);
})