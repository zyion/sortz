

function swap (a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = function BubbleSort (arr, compareFunction) {
    let comparator = compareFunction || ((a, b) => a > b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (comparator(arr[j], arr[i])) swap(i, j, arr);
        }
    }
    return arr;
}
