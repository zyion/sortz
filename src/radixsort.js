

module.exports = function RadixSort(arr, base) {
    let getMax = arr => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i]) max = arr[i];
        }
        return max;
    };
    let toBuckets = (arr, base, iteration) => {
        let buckets = [];
        for (let i = 0; i < arr.length; i++) {
            let digit = Math.floor((arr[i] / (base ** iteration)) % base);
            (buckets[digit] = buckets[digit] || []).push(arr[i]);
        }
        return buckets;
    };
    let toList = buckets => {
        let res = [];
        for (let i = 0; i < buckets.length; i++) {
            for (let j = 0; buckets[i] && j < buckets[i].length; j++) {
                res.push(buckets[i][j]);
            }
        }
        return res;
    }
    let baseVal = base = 10;
    let max = getMax(arr);
    let i = 0;
    while (baseVal ** i <= max) {
        arr = toList(toBuckets(arr, baseVal, i++));
    }
    return arr;
}
