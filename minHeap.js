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

    removeMin() {
        if(this.size === 0) throw new Error("Empty Heap");

        let min = this.heap[0]; // element at 0 is always min
        this.heap[0] = this.heap[this.size - 1]; // rightmost is our new root
        this.size -= 1;
        this.heapifyDown();
        return min;
    }

    // start at root, get min of either left or right child, compare that min to current parent: 
    // if min < parent -> swap them and heapifyDown()
    heapifyDown() {
        let index = 0; // always start at root
        while(this.hasLeftChild(index)) { // fulfill complete tree property of being filled last level left->right
            let smallerChildIndex = this.getLeftChildIndex(index);
            if(this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
                smallerChildIndex == this.getRightChildIndex(index);
            }
            if(this.heap[index] < this.heap[smallerChildIndex]) {
                break; // element placed properly
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex; // continue moving down heap
        }
    }
}

const minHeap = new MinHeap();

minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(1);
minHeap.insert(2);
console.log(minHeap.removeMin()); // 1
console.log(minHeap.removeMin()); // 2
console.log(minHeap.removeMin()); // 3
console.log(minHeap.removeMin()); // 5
console.log(minHeap.removeMin()); // should throw error
// minHeap.printHeap();