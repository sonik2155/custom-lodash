import { multiply } from './multiply';

test('should multiply two values', () => {
    const multi = multiply(5, 10);

    expect(multi).toEqual(50)
});

test('should return zero if given falsy value', () => {
    const multi = multiply(false, 10);

    expect(multi).toEqual(0);
});

test('should return 1 if both arguments give like a true value', () => {
    const multi = multiply(true, true);

    expect(multi).toEqual(1);
});

test('should multiply two values if given arrays', () => {
    const multi = multiply([5], [4]);

    expect(multi).toEqual(20);
});