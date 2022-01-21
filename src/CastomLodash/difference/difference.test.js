import { difference } from './difference';

test('should return array without given value', () => {
    const arr = difference([1, 2, 1, 5, 2], [5])
    const array = [1, 2, 1, 2];

    expect(array).toEqual(arr)
})