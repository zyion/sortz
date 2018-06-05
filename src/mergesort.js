

module.exports = function MergeSort(arr, compareFunction) {
    let comparator = compareFunction || ((a, b) => a > b);
    let merge = (left, right) => {
        let res = [];
        while (left.length && right.length) {
            if (comparator(right[0], left[0])) res.push(left.shift());
            else res.push(right.shift());
        }
        while (left.length) res.push(left.shift());
        while (right.length) res.push(right.shift());
        return res;
    };
    let mergeSort = (arr) => {
        if (arr.length <= 1) return arr;
        else {
            let mid = Math.floor(arr.length / 2);
            return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
        }
    };
    return mergeSort(arr);
}
