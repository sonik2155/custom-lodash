import { min } from './min';

test('should return first array element', () => {
    const firstElem = min([9, 1, 0, 4, -1, 5, -25])
    const num = -25;

    expect(num).toEqual(firstElem);
})
