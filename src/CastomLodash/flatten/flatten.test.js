import { flatten } from "./flatten";

test('should return flatten array in one depth', () => {
    const arr = flatten([[1, [2, [3, [4]], 5]]]);
    const flatArr = [1, [2, [3, [4]], 5]];

    expect(flatArr).toEqual(arr)
})