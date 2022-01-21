import { initial } from './initial';

test('should return array without last element', () => {
    const arr = [1, 2, 3, 5, 8];
    const initialArr = initial([1, 2, 3, 5, 8, 26])

    expect(arr).toEqual(initialArr);
})

test('should return arr length equal to initial array', () => {
    const initialArr = initial([1, 2, 3, 5, 8, 26]);
    const arr = [1, 2, 3, 5, 8];

    expect(arr.length).toEqual(initialArr.length)
})