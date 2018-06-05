

function swap (a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = function SelectionSort (arr, compareFunction) {
    let comparator = compareFunction || ((a, b) => a > b);
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[index], arr[j])) index = j;
        }
        swap(index, i, arr);
    }
    return arr;
}
