import {trim} from "./trim";

test('should return the trimmed string', () => {
    const str = trim('    ===-- we abc  awe=sdf sdfsdf =   ', '===-')
    const str1 = trim('    ===-- we abc  awe=sdf sdfsdf =   ')

    expect(str).toEqual('we,abc,awe=sdf,sdfsdf,=');
    expect(str1).toEqual('===--,we,abc,awe=sdf,sdfsdf,=');
});