"use strict";
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
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex, arr.length);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
const res = mergeSort([1, 4, 2, 19, 11, 4, 3]);
console.log(res);
