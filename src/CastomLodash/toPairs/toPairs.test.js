import {toPairs} from "./toPairs";

test('should return the key-value pairs', () => {
    const object1 = {
        a: 'somestring',
        b: 42,
        c: 48,
        d: {
            e: 8787
        }
    };

    const pairs = toPairs(object1);

    expect(pairs).toEqual([
            [ 'a', 'somestring' ],
            [ 'b', 42 ],
            [ 'c', 48 ],
            [ 'd', { e: 8787 } ]
        ]
    )
});