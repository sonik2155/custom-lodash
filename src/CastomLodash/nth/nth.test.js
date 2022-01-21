import { nth } from './nth';

test('should return array element which was give', () => {
    const arr = nth(['a', 2, 'c', {}, 'v', 's', false], 2);
    const el = '2';

    expect(el).toEqual(arr)
})

test('should return first element if given argument more, then array length', () => {
    const arr = nth(['a', 2, 'c', {}, 'v', 's', false], 10)
    const el = 'a';

    expect(el).toEqual(arr);
})