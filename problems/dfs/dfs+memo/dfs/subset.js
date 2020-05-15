//All subset:

var subsets = function(nums) {
    if(!nums) {
        return [];
    }
    nums.sort((a,b) => a - b);
    let res = [];
    dfs(nums, res, [], 0);
    return res;
};

function dfs(nums, res, cur, level) {
    if(level === nums.length) {
        res.push([...cur]);
        return;
    }
    dfs(nums, res, cur, level+1);
    cur.push(nums[level]);
    dfs(nums, res, cur, level+1);
    cur.pop();
}

let nums = [1,2,3];
let res = subsets(nums);
res.forEach((ele) => {
    ele.forEach((e) => {
        console.log(e);
    })
    console.log('|||||')
})