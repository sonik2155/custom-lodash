import {groupBy} from "./groupBy";

test('should return the composed aggregate object', () => {
    const group = groupBy(['one', 'two', 'three'], 'length');
    const groupEl = groupBy([6.1, 4.2, 6.3], Math.floor);

    expect(group).toEqual({ '3': [ 'one', 'two' ], '5': [ 'three' ] });
    expect(groupEl).toEqual({ '4': [ 4.2 ], '6': [ 6.1, 6.3 ] });
});