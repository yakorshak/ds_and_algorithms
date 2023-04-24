class MyCircularQueue {
  queue: number[];
  size: number;
  head: number;
  tail: number;

  constructor(k: number) {
    this.queue = [];
    this.size = k;
    this.tail = -1;
    this.head = -1;
  }

  // Inserts an element into the circular queue. Return true if the operation is successful.
  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    if (this.isEmpty()) this.head = 0;
    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;
    return true;
  }

  // Deletes an element from the circular queue. Return true if the operation is successful.
  deQueue(): boolean {
    if (this.isEmpty()) return false;
    if (this.head == this.tail) {
      this.head = -1;
      this.tail = -1;
      return true;
    }
    this.head = (this.head + 1) % this.size;
    return true;
  }

  // Gets the front item from the queue. If the queue is empty, return -1.
  Front(): number {
    return this.isEmpty() ? -1 : this.queue[this.head];
  }

  // Gets the last item from the queue. If the queue is empty, return -1.
  Rear(): number {
    return this.isEmpty() ? -1 : this.queue[this.tail];
  }

  isEmpty(): boolean {
    return this.head == -1;
  }

  isFull(): boolean {
    return (this.tail + 1) % this.size == this.head;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
