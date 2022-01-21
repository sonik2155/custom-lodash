import { zip } from './zip';

test('should create an array regrouping the elements to their pre-zip configuration', () => {
    const arr = zip(['a', 'b', 3], [1, 2, 34], [true, false, false]);
    const newArr = [ [ 'a', 1, true ], [ 'b', 2, false ], [ 3, 34, false ] ];

    expect(newArr).toEqual(arr);
})