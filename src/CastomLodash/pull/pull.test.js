import { pull } from './pull';

test('should return new array without given elements', () => {
    const arr = pull([1, 2, 1, 1, 2, 2, 3, 5, 3, 3, 5, 5], 1, 5, 3)
    const newArr = [2, 2, 2];

    expect(newArr).toEqual(arr);
});

test('should return initial array if no given values', () => {
    const arr = pull([1, 2, 5, 54, 878])
    const initialArr = [1, 2, 5, 54, 878];

    expect(initialArr).toEqual(arr)
});

test('should return new array length', () => {
    const arr = pull([1, 2, 1, 1, 2, 2, 3, 5, 3, 3, 5, 5], 1, 5, 3);

    expect(3).toEqual(arr.length)
})