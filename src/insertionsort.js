

function swap (a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = function InsertionSort (arr, compareFunction) {
    let comparator = compareFunction || ((a, b) => a > b);
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (comparator(arr[j], key)) swap(j + 1, j, arr);
        }
    }
    return arr;
}
