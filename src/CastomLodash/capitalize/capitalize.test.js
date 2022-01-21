import {capitalize} from "./capitalize";

test('should return the capitalized string', () => {
    const string = capitalize('FRED, asdc WEWE');

    expect(string).toEqual('Fred, asdc wewe')
})