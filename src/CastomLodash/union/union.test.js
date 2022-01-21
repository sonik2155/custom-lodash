import { union } from './union';

test('should create an array of unique values, in order, from all given arrays', () => {
    const arr = union([4, 4, 3, 1], [3, 4, 1, 4, 5]);
    const newArr = [ 1, 3, 4, 5 ];

    expect(newArr).toEqual(arr);
});

test('should return new array length', () => {
    const arr = union([4, 4, 3, 1], [3, 4, 1, 4, 5]);

    expect(4).toEqual(arr.length);
})
