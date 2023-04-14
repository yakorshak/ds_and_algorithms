"use strict";
class MyCircularQueue {
    constructor(k) {
        this.queue = [];
        this.size = k;
    }
    enQueue(value) {
        if (!this.isFull()) {
            this.queue.push(value);
            return true;
        }
        return false;
    }
    deQueue() {
        if (!this.isEmpty()) {
            this.queue.shift();
            return true;
        }
        return false;
    }
    Front() {
        if (!this.isEmpty()) {
            let element = this.queue[0];
            return element;
        }
        return -1;
    }
    Rear() {
        if (!this.isEmpty()) {
            let element = this.queue[this.queue.length - 1];
            return element;
        }
        return -1;
    }
    isEmpty() {
        if (this.queue.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    isFull() {
        if (this.queue.length === this.size) {
            return true;
        }
        else {
            return false;
        }
    }
}
