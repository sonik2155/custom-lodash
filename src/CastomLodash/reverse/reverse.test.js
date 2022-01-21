import { reverse } from './reverse';

test('should reverse array', () => {
    const arr = reverse([1, 5, 2, 6, 8, 's']);
    const reversedArr = ['s', 8, 6, 2, 5, 1];

    expect(reversedArr).toEqual(arr);
});