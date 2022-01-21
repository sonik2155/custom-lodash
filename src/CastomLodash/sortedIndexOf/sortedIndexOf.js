function sortedIndexOf(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while(left <= right) {
        mid = Math.round((right - left)/2) + left;

        if(target === arr[mid]) {
            return mid
        } else if(target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1
}

module.exports = { sortedIndexOf }
console.log(sortedIndexOf([4, 4, 3, 5, 5, 6, 5, 19, 21, 32, 100, 120, 200, 214, 231], 120));