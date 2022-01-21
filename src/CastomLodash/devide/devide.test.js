import { devide } from "./devide";

test('should devide one value by two', () => {
    const num = devide(8, 2);

    expect(num).toEqual(4);
});

test('should devide two array', () => {
    const num = devide([49], [7]);

    expect(num).toEqual(7)
});

test('should devide falsy values', () => {
    const num = devide(false, false);

    expect(num).toEqual(NaN);
});