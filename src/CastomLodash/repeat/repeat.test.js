import {repeat} from "./repeat";

test('should return the repeating string', () => {
    const str = repeat('abc', 5);

    expect(str).toEqual('abcabcabcabcabc');
});

test('should return empty string', () => {
    const emptyStr = repeat('abc', 0);

    expect(emptyStr).toEqual('');
});