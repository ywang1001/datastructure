/*class MinHeap {
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
let mHeap = new MinHeap(arr);
console.log('sb initialization, ', mHeap.peek());*/
/*var minHeap = new MinHeap();
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

console.log('arr is, ', ff);*/

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

/*
class MaxHeap{
    constructor(arr){
      this.arr = arr;
      this.length = arr.length;
    }

   pop(){
     if(!arr || arr.length === 0) {
       return 'sb no ele';
     }
     let res = this.arr[0];
     this.swap(0, arr.length - 1);
     this.length--;
     this.percolateDown(0);
     return res;
   }

   peek(){
    if(this.arr && this.arr.length > 0 ) {
        return arr[0];
    }
    return 'sb no ele';
   }

   insert(ele){
      this.arr.push(ele);
      this.length = arr.length;
      this.percolateUp(this.length - 1);
   }

   percolateUp(index){
     let parent = Math.floor((index-1)/2);
     while(this.arr[parent] < this.arr[index]) {
         this.swap(parent, index);
         this.percolateUp(parent);
     }
   }

   percolateDown(index){
    while(index <= this.size/2-1) {
     let leftChild = index*2+1;
     let rightChild = index*2+2;
     let swapCandidate = this.arr[leftChild] <= this.arr[rightChild] ? rightChild : leftChild;
     if(this.arr[swapCandidate] > this.arr[index]) {
         this.swap(index, swapCandidate);
         index = swapCandidate
     }else {
         break;
     }
    }
   }

   swap(left, right){
      let tp = this.arr[left];
      this.arr[left] = this.arr[right];
      this.arr[right] = tp
   }

}

let pq2 = new MaxHeap([]);
pq2.insert(1);
pq2.insert(2);
pq2.insert(3);
pq2.insert(4);
pq2.insert(5);
pq2.insert(6);
pq2.insert(7);
console.log(pq2.peek());
console.log(pq2.pop());
console.log(pq2.peek());



*/











class MinHeap{
    constructor(arr = []) {
      this.arr = arr;
      this.length = arr.length;
    }

    peek(){
      if(this.length === 0) {
          return 'sb';
      }
      return this.arr[0];
    }

    pop(){
      let tp = this.arr[0];
      this.arr[0] = this.arr[this.arr.length - 1];
      this.arr.pop();
      this.length--;
      this.percolateDown(0);
      return tp;
    }

    push(ele) {
      this.arr.push(ele);
      this.length++;
      this.percolateUp(this.length - 1);
    }

    percolateDown(index) {
        let leftChild = index*2 + 1;
        let rightChild = index*2 + 2;
        let swapCandidate = index;
        if(leftChild < this.length && this.arr[leftChild] < this.arr[swapCandidate]) {
           swapCandidate = leftChild;
        }
        if(rightChild < this.length && this.arr[rightChild] < this.arr[swapCandidate]) {
            swapCandidate = rightChild;
        }
        if(this.arr[swapCandidate] < this.arr[index]) {
            this.swap(index, swapCandidate);
            this.percolateDown(swapCandidate);
        }

    }

    percolateUp(index){
        if(index === 0) {
            return;
        }
        let swapIndex = index;
       // console.log(swapIndex);
        let fatherIndex = Math.floor((swapIndex-1)/2);
      //  console.log('nmb',fatherIndex);
        while(fatherIndex >= 0 && this.arr[swapIndex] < this.arr[fatherIndex]) {
            this.swap(swapIndex, fatherIndex);
            this.percolateUp(fatherIndex);
        }
    }

    swap(left, right) {
        let tp = this.arr[left];
        this.arr[left] = this.arr[right];
        this.arr[right] = tp;
    }
}

console.log('sb');
let min = new MinHeap();
for(let i = 0; i <= 9; ++i) {
    min.push(10-i);
}
console.log(min.peek());
console.log(min.pop());
console.log(min.peek());
console.log(min.pop());
console.log(min.peek());


class MaxHeap{
    constructor(arr = []) {
        this.arr = arr;
        this.length = arr.length;
    }

    isEmpty(){
        return this.length === 0 && this.arr.length === 0;
    }

    peek(){
        return this.arr[0];
    }

    offer(ele){
      this.arr.push(ele);
      this.length++;
      this.percolateUp(this.length-1);
    }

    pop(){
      if(this.length === 0) {
          return;
      }
      this.swap(0, this.arr.length - 1);
      let res = this.arr.pop();
      this.length--;
      this.percolateDown(0);
      return res;
    }

    percolateUp(index){
      if(index === 0) {
          return;
      }
      let swapCandidate = index;
      let fatherIndex = Math.floor((index-1)/2);
      while(fatherIndex >= 0 && this.arr[fatherIndex] < this.arr[swapCandidate]) {
          this.swap(fatherIndex, swapCandidate);
          this.percolateUp(fatherIndex);
      }
    }

    percolateDown(index){
      let leftChild = index*2+1;
      let rightChild = index*2+2;
      let swapCandidate = this.arr[leftChild] > this.arr[rightChild] ? leftChild: rightChild;
      if(swapCandidate < this.length && this.arr[index] < this.arr[swapCandidate]) {
          this.swap(index, swapCandidate);
          this.percolateDown(swapCandidate);
      }
    }

    swap(left, right) {
        let tp = this.arr[left];
        this.arr[left] = this.arr[right];
        this.arr[right] = tp;
    }

}

let max = new MaxHeap();
for(let i = 0; i < 10; ++i) {
    max.offer(i);
}
/*console.log(max.peek());
console.log(max.pop());
console.log(max.peek());
console.log(max.isEmpty());*/

while(max.isEmpty() === false){
    let tp = max.pop();
    console.log(tp);
}