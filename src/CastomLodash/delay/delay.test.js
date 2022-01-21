import { delay } from './delay';

test('should invokes func after wait milliseconds', () => {
const func = delay(function(text) {
    console.log('5 second is out');
}, '5 second is out', 5000);

})