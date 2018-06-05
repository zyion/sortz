

function swap (a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

module.exports = function HeapSort (arr, compareFunction) {
    let comparator = compareFunction || ((a, b) => a > b);
    let parent = index => Math.floor((index - 1) / 2);
    let left = index => 2 * index + 1;
    let right = index => 2 * index + 2;

    let shiftDown = (arr, root, max) => {
        let index = root;
        let leftChild = left(root);
        let rightChild = right(root);
        if (leftChild < max && comparator(arr[leftChild], arr[index])) index = leftChild;
        if (rightChild < max && comparator(arr[rightChild], arr[index])) index = rightChild;
        if (index !== root) {
            swap(index, root, arr);
            shiftDown(arr, index, max);
        }
    };

    for (let i = parent(arr.length - 1); i >= 0; i--) {
        shiftDown(arr, i, arr.length);
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        swap(0, i, arr);
        shiftDown(arr, 0, i);
    }

    return arr;
}
