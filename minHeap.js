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
        this.#heap = [];
        this.#size = [];
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
}