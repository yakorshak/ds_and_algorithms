"use strict";
function quickSort(arr) {
    if (arr.length < 2)
        return arr;
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log("res", quickSort([2, 5, 1, 7, 35, 3, 0, -5, -7]));
