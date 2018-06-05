# sortz
A collection of sorting algorithms


## Install
### Node.js
```bash
npm install sortz
```
### Browser
You can also use it within the browser; install via npm and use the sortz.js file found within the dist folder.  
Example:
```html
<script src="./node_modules/sortz/dist/sortz.js"></script>
```


## Usage

Add node module
```js
const Sortz = require('sortz');
```

Basic usage
```js
var animals = ['pig', 'cow', 'dog', 'zebra', 'cat'];

Sortz.QuickSort(animals);

console.log(animals);
// outputs: [ 'cat', 'cow', 'dog', 'pig', 'zebra' ]
```
Compare functions
```js
var numbers = [10, 2, 5, 1, 7];
// sort array ascending function
Sortz.QuickSort(numbers, function (a, b) {
    return a > b;
})
console.log(numbers);
// outputs: [ 1, 2, 5, 7, 10 ]

// sort array descending function
Sortz.QuickSort(numbers, function (a, b) {
    return a < b;
});
console.log(numbers);
// outputs: [ 10, 7, 5, 2, 1 ]
```
Sort array of objects
```js
var objects = [
    { value: 55 },
    { value: 102 },
    { value: 7 },
    { value: 255 },
    { value: 27 }
];

Sortz.QuickSort(objects, function(a, b) {
    return a.value > b.value;
});
console.log(objects);
/*
outputs:
[ { value: 7 },
  { value: 27 },
  { value: 55 },
  { value: 102 },
  { value: 255 } ]
 */
```


## API

#### BubbleSort (array, compareFunction)
Sorts the input array into ascending order using a  bubble sort algorithm
 - **array** array to sort
 - **compareFunction** (optional) a compare function that returns true or false
 returns the sorted array

#### SelectionSort (array, compareFunction)
Sorts the input array into ascending order using a  selection sort algorithm
 - **array** array to sort
 - **compareFunction** (optional) a compare function that returns true or false
 returns the sorted array

#### InsertionSort (array, compareFunction)
Sorts the input array into ascending order using a  insertion sort algorithm
 - **array** array to sort
 - **compareFunction** (optional) a compare function that returns true or false
 returns the sorted array

#### MergeSort (array, compareFunction)
Sorts the input array into ascending order using a  merge sort algorithm
 - **array** array to sort
 - **compareFunction** (optional) a compare function that returns true or false
 returns the sorted array

#### HeapSort (array, compareFunction)
Sorts the input array into ascending order using a  heap sort algorithm
 - **array** array to sort
 - **compareFunction** (optional) a compare function that returns true or false
 returns the sorted array

#### QuickSort (array, compareFunction)
Sorts the input array into ascending order using a  quick sort algorithm
 - **array** array to sort
 - **compareFunction** (optional) a compare function that returns true or false
 returns the sorted array
