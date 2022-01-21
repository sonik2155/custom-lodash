import { add } from './add';

test('should return sum of two numbers', () => {
    const sum = add(5, 25)

    expect(30).toEqual(sum);
});

test('should return 0 if given two false values', () => {
    const sum = add(false, false);

    expect(0).toEqual(sum);
});

test('should return sum if given two arrays', () => {
    const sum = add([52], [2]);

    expect(54).toEqual(sum);
});

test('should return 2 if given two truthy values', () => {
    const sum = add(true, true);

    expect(2).toEqual(sum);
});

test('should return right sum of values', () => {
    const sum = add(4, [8]);

    expect(12).toEqual(sum);
});