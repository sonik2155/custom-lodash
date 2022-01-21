import {countBy} from "./countBy";

test('should returns the composed aggregate object', () => {
    const countEl = countBy([6.1, 4.2, 6.3], Math.floor);
    const count = countBy(['one', 'two', 'three'], 'length');

    expect(countEl).toEqual({ '4': 4.2, '6': 6.3 });
    expect(count).toEqual({ '3': 'two', '5': 'three' });
});