var res;
function kthSmallestNumber(arr, k) {
    if(!arr || arr.length < k) {
        return -1;
    }
    quickSelect(arr, 0, arr.length - 1, k-1);
    return arr[res];
}

function quickSelect(arr, left, right, target) {
    let mid = partition(arr, left, right);
    if(mid === target) {
       res = mid;
       return;
    }else if(target < mid) {
        quickSelect(arr, left, mid-1, target);
    }else {
        quickSelect(arr, mid+1, right, target);
    }
    
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let start = left;
    let end = right - 1;
    while(start <= end) {         //一定是<=不然会漏掉
        if(arr[start] <= pivot) {
            start++;
        }else if(arr[end] > pivot) {
            end--;
        }else {
            swap(arr, start++, end--);
        }
    }
    swap(arr, start, right);
    return start;
}

function swap(arr, l, r) {
    let tp = arr[l];
    arr[l] = arr[r];
    arr[r] = tp;
}

let input = [1,9,2,8,3,7,4,6,5,133,-3,27];
console.log(kthSmallestNumber(input, 9));
let inp = [5,2,4,1,3,6,0];
console.log(kthSmallestNumber(inp, 4));

var res2;
function kLargestNumber(nums, k) {
   if(!nums || nums.length < k) {
       return -1;
   }
   quick2(nums, 0, nums.length - 1, k-1);
   return nums[res2];
}

function quick2(nums, l, r, target) {
    let m = partition(nums, l, r);
    if(m === target) {
        res2 = m;
        return;
    }else if(m < target) {
        quick2(nums, m+1, r, target);
    }else {
        quick2(nums, l, m-1, target);
    }
}

function partition(nums, l, r) {
    let start = l, end = r-1;
    while(start <= end) {
        if(nums[start] >= nums[r]) {
            start++;
        }else if(nums[end] < nums[r]) {
            end--;
        }else {
            swap(nums, start++, end--);
        }
    }
    swap(nums, start, r);
    return start;
}

let inp1 = [5,2,4,1,3,6,0];
console.log('new, ',kLargestNumber(inp1, 4));
console.log(inp1);