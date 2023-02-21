"use strict";
// Time complexity O(n)
function merge(leftArr, rightArr) {
    const resultArr = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0;
    while (leftArrIndex < leftArr.length && rightArrIndex < rightArr.length) {
        if (leftArr[leftArrIndex] < rightArr[rightArrIndex]) {
            resultArr.push(leftArr[leftArrIndex]);
            leftArrIndex += 1;
        }
        else {
            resultArr.push(rightArr[rightArrIndex]);
            rightArrIndex += 1;
        }
    }
    return resultArr.concat(leftArr.slice(leftArrIndex, leftArr.length), rightArr.slice(rightArrIndex, rightArr.length));
}
// Time complexity of the whole algorithms is O(n log n)
function mergeSort(arr) {
    // Time complexity of the recursion part O(log n)
    if (arr.length < 2) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex, arr.length);
    // Time complexity O(n)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
