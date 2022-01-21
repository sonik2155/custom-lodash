import { sortedIndexOf } from './sortedIndexOf';

test('should return index of given value', () => {
    const arr = sortedIndexOf([4, 4, 3, 5, 5, 6, 5, 19, 21, 32, 100, 120, 200, 214, 231], 120);

    expect(11).toEqual(arr)
});

test('should return -1 if no given value in array', () => {
    const arr = sortedIndexOf([4, 4, 3, 5, 5, 6, 5, 19, 21, 32, 100, 120, 200, 214, 231], 1200);

    expect(-1).toEqual(arr);
})