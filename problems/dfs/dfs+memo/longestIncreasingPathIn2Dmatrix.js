

function longestIncreasingPath(matrix) {
   if(!matrix) {
       return 0;
   }
   let res = 0;
   let dp = [];
   for(let i = 0; i < matrix.length; ++i) {
       let tp = [];
       for(let j = 0; j < matrix[i].length; ++j) {
           tp.push(0);
       }
       dp.push(tp);
   }
  
   for(let i = 0; i < matrix.length; ++i) {
       for(let j = 0; j < matrix[i].length; ++j) {
         res = Math.max(res, dfs(matrix, i, j, dp))
       }
   }
   return res;
}
var dirs = [[-1, 0],[1, 0],[0, -1],[0, 1]];
function dfs(matrix, x, y, dp) {
    if(dp[x][y] !== 0) {
        return dp[x][y];
    }
    let res = 1;
    for(let i = 0; i < dirs.length; ++i) {
      for(let j = 0; j < 2; ++j) {
        let newX = x + dirs[i][0];
        let newY = y + dirs[i][1];
        if(newX >= 0 && newX < matrix.length && newY >= 0 && newY < matrix[x].length && matrix[newX][newY] > matrix[x][y]){
        res = Math.max(res, 1 + dfs(matrix, newX, newY, dp))
        }
       }
    }
    dp[x][y] = res;
    return res;
}

let matrix = [[3,4,5,],[3,2,6],[2,2,1]];
let m2 = [[9,9,4],[6,6,8],[2,1,1]];
console.log(longestIncreasingPath(m2));

function flattenArray(input) {
    return input.reduce(
        (a, b) => a.concat(Array.isArray(b) ? flattenArray(b): b),
        []
    )
}

let inp = [1,[2,3],4,5];
console.log(flattenArray(inp));

function nintynineCent(nums, cents){
    let res = [];
    if(!nums || nums.length === 0) {
        return res;
    }
    //nums.sort();
    let tp = [];
    dfs2(res, tp, 0, nums, cents);
    return res;
}

const dfs2 = function(result, cur, index, nums, remain){
       if(remain <= 0 || index === nums.length) {
            if(remain === 0) {
                result.push([...cur]);
            }
            return;
       }

       let count = remain/nums[index];
       for(let i = 0; i <= count; ++i) {
           cur.push(i);
           remain = remain - i*nums[index];
           dfs2(result, cur, index+1, nums, remain);
           remain = remain + i*nums[index];
           cur.pop();
       }
}

let ar = [1,5,10];
console.log('sb');
let finalresult = nintynineCent(ar, 19);
console.log(finalresult.length);
for(let i = 0; i < finalresult.length; ++i) {
    console.log(finalresult[i]);
}
