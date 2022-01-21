import { pick } from './pick';

test('should create an object composed of the picked object properties', () => {
    const obj = pick({'a':1,'b':'2','c':3, d: 5}, 'a', 'b')
    const obj1 = { ...obj };

    expect(obj1).toEqual(obj);
})