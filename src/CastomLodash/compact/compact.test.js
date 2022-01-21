import { compact } from './compact';

test('should return array without false values', () => {
    const array = compact([1, 2, 3, false, NaN, null, '', 0]);
    const trueArr = [1, 2, 3];

    expect(trueArr).toEqual(array)
})