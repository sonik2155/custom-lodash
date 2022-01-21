import {every} from "./every";

test('should return true if all element pass the predicate check', () => {
const elements = every([true, 1, null, 'yes'], Boolean);
const truthy = every([true, true], Boolean)

expect(elements).toEqual(false);
expect(truthy).toEqual(true);
});