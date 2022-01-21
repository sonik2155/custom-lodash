import {flip} from "./flip";

test('should return new flipped function', () => {
    const flipped = flip((...args) => args);

    expect(flipped('a', 'b', 'c', 'd')).toEqual([ 'd', 'c', 'b', 'a' ])
});
