function camelCase(string) {
    const str = string.toLowerCase().replace(/[^a-zа-яё0-9]/gi, ' ');
    const arr = str.split(' ');
    const array = [];
    let result = '';

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== '') {
            array.push(arr[i])
        }
    }

    for (let i = 0; i < array.length; i++) {
        let current = array[i];

        if(i != 0) {
            current = current.substr(0, 1).toUpperCase() + current.substr(1)
        }
        result += current
    }

    return result
}

module.exports = { camelCase }
//console.log(camelCase('--fOo-bAr-asd-asyud23'));
