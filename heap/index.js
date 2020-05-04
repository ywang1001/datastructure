class MinHeap {
    constructor(arr=[]) {
        this.heap = [];
        this.heapLength = arr.length;
        
        for (var i = arr.length - 1; i >= 0; i--) {
            this.insert(el);          
        }
    }
    
    get length() {
        return this.heapLength;
    }
    
    peek() {
       return this.heapLength > 0 ? this.heap[0] : null;
    }
    
    pop() {
        if (this.heapLength > 0) {
            const minEl = this.heap[0];
            this.heap[0] = this.heap[this.heapLength - 1];
            this.heapLength -= 1;
            this._percolateDown(0);
            return minEl;
        }
        return null;
    }
    
    insert(el) {
        if (this.heapLength < this.heap.length) {
            this.heap[this.heapLength] = el;
        } else {
            this.heap.push(el);
        }
        this.heapLength += 1;
        this._percolateUp(this.heapLength - 1);
    }
    
    _percolateUp(ind) {
        var parent = Math.floor((ind - 1) / 2);
        
        if (parent >= 0 && this.heap[parent] > this.heap[ind]) {
            var temp = this.heap[parent];
            this.heap[parent] = this.heap[ind];
            this.heap[ind] = temp;
            
            this._percolateUp(parent);
        }
    }
    
    _percolateDown(ind) {
        var leftChild = ind * 2 + 1;
        var rightChild = ind * 2 + 2;
        var minIndex = ind;
        
        if (leftChild < this.heapLength && this.heap[leftChild] < this.heap[minIndex]) {
            minIndex = leftChild;
        }
        if (rightChild < this.heapLength && this.heap[rightChild] < this.heap[minIndex]) {
            minIndex = rightChild;
        }
        
        if (minIndex != ind) {
            var temp = this.heap[ind];
            this.heap[ind] = this.heap[minIndex];
            this.heap[minIndex] = temp;
            
            this._percolateDown(minIndex);
        }
        
    }
}

let arr = [1,9,2,8,3,7,4,6,5];
var minHeap = new MinHeap();
arr.forEach(num => minHeap.insert(num));
console.log(minHeap.peek());
minHeap.pop();
console.log(minHeap.peek());
minHeap.insert(1);
console.log(minHeap.peek());
let ff = [];
while(minHeap.length > 0) {
    ff.push(minHeap.pop());
}

console.log('arr is, ', ff);

function Node(val) {
    this.val = val;
    this.next = null;
}

var mergeKLists = function(lists) {
    let mH = new MinHeap();
    for(let i = 0; i < lists.length; ++i) {
        mH.insert(lists[i]);
    }
    let dummy = new Node(0);
    let cur = dummy;
    while(mH.length > 0) {
        let curN = mH.pop();
        cur.next = curN;
        cur = cur.next;
        if(curN.next) {
            mH.insert(curN.next);
        } 
    }
    return dummy.next;
}