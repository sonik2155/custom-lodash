import {camelCase} from "./camelCase";

test('should converts string to camel case', () => {
    const str = camelCase('--fOo-bAr-asd-asyud23');
    const str1 = camelCase('Foo Bar');
    const str2 = camelCase('__FOO_BAR__');

    expect(str).toEqual('fooBarAsdAsyud23');
    expect(str1).toEqual('fooBar');
    expect(str2).toEqual('fooBar');
});