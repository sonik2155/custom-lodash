import {filter} from "./filter";


test('should return the new filtered array', () => {
    const users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred',   'age': 40, 'active': false }
    ];

    const nums = [1, 54, 2, 12, 5, 8];

    const newArr = nums.filter(function(l) {return l > 5})
    const arr = users.filter(function(o) { return !o.active; });

    expect(arr).toEqual([ { user: 'fred', age: 40, active: false } ]);
    expect(newArr).toEqual([54, 12, 8]);
});