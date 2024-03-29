"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinHeap = void 0;
class MinHeap {
    constructor() {
        this.items = [];
    }
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }
    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }
    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.items.length;
    }
    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.items.length;
    }
    hasParent(index) {
        return this.getParentIndex(index) >= 0;
    }
    leftChild(index) {
        return this.items[this.getLeftChildIndex(index)];
    }
    rightChild(index) {
        return this.items[this.getRightChildIndex(index)];
    }
    parent(index) {
        return this.items[this.getParentIndex(index)];
    }
    swap(indexOne, indexTwo) {
        let temp = this.items[indexOne];
        this.items[indexOne] = this.items[indexTwo];
        this.items[indexTwo] = temp;
    }
    peek() {
        if (this.items.length === 0)
            throw new Error("The heap is empty");
        return this.items[0];
    }
    extract() {
        if (this.items.length === 0)
            throw new Error("The heap is empty");
        let item = this.items[0];
        this.items[0] = this.items[this.items.length - 1];
        this.items.pop();
        this.heapifyDown();
        return item;
    }
    add(item) {
        this.items.push(item);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.items.length - 1;
        while (this.hasParent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) &&
                this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }
            if (this.items[index] < this.items[smallerChildIndex]) {
                break;
            }
            else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}
exports.MinHeap = MinHeap;
