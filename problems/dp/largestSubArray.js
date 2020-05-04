function largestSubArray(arr) {
    let res = Number.MIN_VALUE;
    if(!arr || arr.length === 0) {
        return 
    }
    let dp = [], n = arr.length;
    for(let i = 0; i < arr.length; ++i) {
        if(i === 0) {
            dp.push(arr[i]);
        }else {
            let top = dp[i-1] >= 0 ? dp[i-1] + arr[i] : arr[i];
            dp.push(top);
        }
        res = Math.max(res, dp[i]);
    }
    return res;
}

let input = [-2,1,-3,4,-1,2,1,-5,4];
console.log(largestSubArray(input));