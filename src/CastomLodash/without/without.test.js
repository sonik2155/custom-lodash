import { without } from './without';

test('should return new array without given values', () => {
    const arr = without([1, 2, 2, 2, 2, 2, 3, 4, 4], 1, 2, 25);
    const newArr = [3, 4, 4];

    expect(newArr).toEqual(arr);
})

test('should return new array length', () => {
    const arr = without([1, 2, 2, 2, 2, 2, 3, 4, 4], 1, 2, 25);

    expect(3).toEqual(arr.length);
})