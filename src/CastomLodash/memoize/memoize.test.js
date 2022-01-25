import {memoize} from "./memoize";

test('should memoize results based on the first argument given', () => {
    let memoized = memoize(function(a, b, c) {
        return a + b + c;
    });

    expect(13).toEqual(memoized(8, 2, 3));
    expect(13).toEqual(memoized(8, 2, 12));
})