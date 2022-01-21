import { curry } from './curry';

test('should return the new curried function', () => {
    const abc = function(a, b, c, d) {
        return [a, b, c, d];
    };
    const curried = curry(abc);
    const arr = [2, 3, 45, 74];

    expect(arr).toEqual(curried(2, 3, 45, 74))
})