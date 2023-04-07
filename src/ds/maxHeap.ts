export class MaxHeap {
  private items: number[] = [];

  constructor() {}

  private getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }
  private getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }
  private getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  private hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) < this.items.length;
  }
  private hasRightChild(index: number) {
    return this.getRightChildIndex(index) < this.items.length;
  }
  private hasParent(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  private leftChild(index: number) {
    return this.items[this.getLeftChildIndex(index)];
  }
  private rightChild(index: number) {
    return this.items[this.getRightChildIndex(index)];
  }
  private parent(index: number) {
    return this.items[this.getParentIndex(index)];
  }

  private swap(indexOne: number, indexTwo: number) {
    let temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  public peek() {
    if (this.items.length === 0) throw new Error("The heap is empty");
    return this.items[0];
  }

  public extract() {
    if (this.items.length === 0) throw new Error("The heap is empty");
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.heapifyDown();
    return item;
  }

  public add(item: number) {
    this.items.push(item);
    this.heapifyUp();
  }

  public heapifyUp() {
    let index = this.items.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.items[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  public heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let higherChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        higherChildIndex = this.getRightChildIndex(index);
      }

      if (this.items[index] > this.items[higherChildIndex]) {
        break;
      } else {
        this.swap(index, higherChildIndex);
      }
      index = higherChildIndex;
    }
  }
}
