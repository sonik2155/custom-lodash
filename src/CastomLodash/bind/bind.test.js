import { mybind } from './bind';

test('should return the new bound function', () => {
    let object = { user: 'fred' };

    function greet(greeting) {
        return greeting + ' ' + this.user
    };

    const bound = mybind(greet, object, 'hi');

    expect(bound()).toEqual('hi fred');
});