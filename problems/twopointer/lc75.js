var sortColors = function(nums) {
    if(!nums) {
        return;
    }

    let l = 0, m = 0, r = nums.length-1;

    while(m <= r) {
        if(nums[m] === 0) {
          swap(nums, l++, m++);
        }else if(nums[m] === 1) {
            m++;
        }else {
            swap(nums, m, r--);
        }
    }

    return;
}

function swap(arr, left, right) {
    let tmp = arr[left];
    arr[left] = arr[right];
    arr[right] = tmp;
}

let input = [2,0,2,1,1,0];
sortColors(input);
console.log(input);