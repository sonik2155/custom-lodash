function words(str) {
    const string = str.replace(/[^a-zа-яё0-9.]/gi, ' ');
    const arr = string.split(' ');
    const array = [];

    for (let i = 0; i < arr.length; i++) {
       if (arr[i] !== '') {
        array.push(arr[i])
       }
    }

    return array
}

module.exports = { words }
console.log(words('fred, barney, & # $ pebbles'));