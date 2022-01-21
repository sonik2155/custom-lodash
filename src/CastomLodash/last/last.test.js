import {last} from "./last";

test('should return last array element', () => {
    const elem = last([1, 5, 8, 30, 56])
    const num = 56;

    expect(num).toEqual(elem);
})