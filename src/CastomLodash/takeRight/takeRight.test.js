import { takeRight} from './takeRight';

test('should return array with N numbers', () => {
    const array = takeRight([1, 2, 3, 4, 25, 85, 6, 10, 52, 41], 2)
    const nums = [52, 41];

    expect(nums).toEqual(array);
});

test('should return new array length', () => {
    const array = takeRight([1, 2, 3, 4, 25, 85, 6, 10, 52, 41], 2);

    expect(2).toEqual(array.length);
});

