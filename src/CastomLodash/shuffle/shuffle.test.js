import {shuffle} from "./shuffle";

test('should return new shuffle array', () => {
    const shuff = shuffle([ -214, -64,  -6, -3, 0, 1, 4, 4, 5, 6, 29, 54, 542]);

    const newArr = shuff;

    expect(shuff).toEqual(newArr);
});
