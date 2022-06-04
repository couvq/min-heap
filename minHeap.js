/* 
    A class implementation of a min heap in javascript
    1. helper methods for: hasParent(index), hasLeftChild(index), hasRightChild(index)
    2. helper methods for: getParentIndex(index), getLeftChildIndex(index), getRightChildIndex(index)
    3. helper methods for: getParent(index), getLeftChild(index), getRightChild(index)
    4. helper method for swap(index1, index2)

    5. main methods for: getMin -> returns 0th index
                         insert -> add element to rightmost index and heapifyUp, size++
                         removeMin -> return 0th element (the min) and return it, then rightmost element becomes min, size-- and heapifyDown
*/

class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    getParentIndex(index) {
        return Math.floor((index - 1)/ 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    getParent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    getLeftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    getRightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    hasParent(index) {
        return this.getParentIndex(index) >= 0; // can't be less than zero bc 0 is the root
    }

    hasLeftChild(index) {
        return this.getLeftChildIndex(index) < this.size;
    }

    hasRightChild(index) {
        return this.getRightChildIndex(index) < this.size;
    }

    getMin() {
        return this.heap[0]; // 0 index is always the root
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    printHeap() {
        console.log(this.heap);
    }

    // Add a new element to the heap, adds to rightmost index, increments size, then calls heapifyUp()
    insert(data) {
        this.heap[this.size] = data;
        this.size += 1;
        this.heapifyUp();
    }

    // start at rightmost index, while it has a parent, check if child < parent: if it is swap, if not index = getParentIndex(index);
    heapifyUp() {
        let index = this.size - 1; // index we just inserted
        while(this.hasParent(index) &&  this.getParent(index) > this.heap[index]) {
            this.swap(index, this.getParentIndex(index));
            index = this.getParentIndex(index); // move up to parent through while loop
        }
    }
}

const minHeap = new MinHeap();

minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(1);
minHeap.insert(2);
minHeap.printHeap();