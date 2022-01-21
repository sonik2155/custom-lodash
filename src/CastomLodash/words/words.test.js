import {words} from "./words";

test('should returns the words of string', () => {
    const word = words('fred, barney, & # $ pebbles');

    expect(word).toEqual([ 'fred', 'barney', 'pebbles' ]);
});