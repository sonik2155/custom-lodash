import { take } from './take';

test('should return first N values of array', () => {
    const array = take([1, 2, 3, 4, 25, 85, 6, 10, 52, 41], 7);
    const newArr = [1, 2, 3, 4, 25, 85, 6];

    expect(newArr).toEqual(array);
})

test('should return new array length', () => {
    const arr = take([1, 2, 3, 4, 25, 85, 6, 10, 52, 41], 7);

    expect(7).toEqual(arr.length);
})

test('should return all array if given value more than array length', () => {
    const arr = take([1, 2, 3, 4, 25, 85, 6, 10, 52, 41, 54, 787, 5454], 1000)
    const newArr = [1, 2, 3, 4, 25, 85, 6, 10, 52, 41, 54, 787, 5454];

    expect(newArr).toEqual(arr);
})