function canSplit(arr) {
  if(!arr || arr.length <= 1) {
       return false;
  }
   let n = arr.length;
   let preS = [];
   for(let i = 0; i < n; ++i) {
       let value = i === 0 ? arr[0] : preS[i-1] + arr[i];
       preS.push(value);
   }
   if(preS[preS.length - 1] % 2 !== 0) {
       return false;
   }
   return preS.includes(preS[preS.length-1]/2);
}

let ina = [1,4,2,3];
console.log(canSplit(ina));

function ListNode(val){
    this.val = val;
    this.next = null;
}
function mergeK(arr){
   if(!arr || arr.length === 0) {
       return null;
   }else if(arr.length === 1) {
       return arr[0];
   }
   return mergeK(arr, 0, arr.length - 1);
}

function mergeK(arr, left, right) {
   if(left > right) {
       return null;
   }else if(left === right) {
       return arr[left];
   }else if(left+1 === right) {
       return mergeT(arr[left], arr[right]);
   }
   let mid = left + Math.floor((right-left)/2);
   let leftP = mergeK(arr, left, mid);
   let rightP = mergeK(arr, mid+1, right);
   return mergeT(leftP, rightP);
}

function mergeT(l1, l2) {
    if(!l1 && !l2) {
        return null;
    }else if(!l1 || !l2) {
        return !l1 ? l2 : l1;
    }

    let dummy = new ListNode(0);
    let cur = dummy;
    while(l1 && l2) {
        if(l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if(l1) {
        cur.next = l1;
    }
    if(l2) {
        cur.next = l2;
    }
    return dummy.next;
}


var fres;
function kLargest(arr, k) {
   if(!arr || arr.length === 0) {
       return undefined;
   }
   quickPartition(arr, 0, arr.length - 1, k - 1);
   return arr[fres];
}

function quickPartition(arr, left, right, k) { 
    let pivot = partition(arr, left, right);
    if(pivot === k) {
        fres = pivot;
        return;
    }else if(pivot < k) {
        return quickPartition(arr, pivot+1, right, k);
    }else {
        return quickPartition(arr, left, pivot-1, k);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let lB = left, rB = right - 1;
    while(lB <= rB) {
        if(arr[lB] >= pivot) {
            ++lB;
        }else if(arr[rB] < pivot) {
            --rB;
        }else {
            swap(arr, lB++, rB--);
        }
    }
    swap(arr, lB, right);
    return lB;
}

function swap(arr, l, r) {
    let tp =arr[l];
    arr[l] = arr[r];
    arr[r] = tp;
}

let arrt = [1,2,3,4,5];
console.log(kLargest(arrt, 2));