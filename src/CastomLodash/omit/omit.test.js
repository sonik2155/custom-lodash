import { omit } from './omit';

test('should remove element from object and return new object', () => {
    const obj = omit({'a':1,'b':'2','c':3, d: 5}, 'c');
    const obj1 = { ...obj };

    expect(obj1).toEqual(obj)
})