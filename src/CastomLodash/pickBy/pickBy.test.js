import { pickBy } from './pickBy';

test('should check if value is number and return number values', () => {
    const obj = pickBy({'a':1,'b':'2','c':3, d: 5,})
    const obj1 = { ...obj };

    expect(obj1).toEqual(obj);
})