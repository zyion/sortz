

function swap (a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = function QuickSort (arr, compareFunction) {
    let comparator = compareFunction || ((a, b) => a > b);
    let quickSort = (low, high, arr) => {
        let i = low, j = high, pivot = arr[Math.floor((low + high) /2)];
        while (i < j) {
            while (comparator(pivot, arr[i])) i++;
            while (comparator(arr[j], pivot)) j--;
            if (i <= j) swap(i++, j--, arr);
        }
        if (j > low) quickSort(low, j, arr);
        if (i < high) quickSort(i, high, arr);
        return arr;
    };
    return quickSort(0, arr.length -1, arr);
}
