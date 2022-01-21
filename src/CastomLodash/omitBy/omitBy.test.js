import { omitBy } from './omitBy';

test('should return object with key and value which is not a number', () => {
    const obj = omitBy({'a':1,'b':'2','c':3, d: 5})
    const obj1 = { ...obj };
    expect(obj).toEqual(obj1)
})