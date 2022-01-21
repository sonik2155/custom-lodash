import { max } from './max.js';

test('should return max value', () => {
    const maxValue = max([10, 100, 5, 1235])

expect(1235).toEqual(maxValue)
})