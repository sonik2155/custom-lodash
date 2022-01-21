import { mean } from './mean';

test('should computes the mean of the values in array', () => {
    const num = mean([1, 5, 8, 95]);
    const bol = mean([false, true, true, true, false]);
    const arr = mean([[1], [5], [8]]);

    expect(num).toEqual(27.25);
    expect(bol).toEqual(0.6);
    expect(arr).toEqual(52.666666666666664);
})