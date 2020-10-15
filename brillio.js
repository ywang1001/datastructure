/*function longestCommonSubsequence(text1, text2) {
    let arr1 = text1.split('');
    let arr2 = text2.split('');
    let dp = [];
    for(let i = 0; i < arr2.length; ++i) {
        dp.push([]);
        for(let j = 0; j < arr1.length; ++j) {
            dp[i].push(0);
        }
    }
    console.log(dp);
    for(let i = 0; i < arr2.length; ++i) {
        if(arr1[0] === arr2[i]) {
            dp[0][i] = 1;
        }else {
            dp[0][i] = i === 0 ? 0 : dp[0][i-1];
        }
    }
    for(let j = 0; j < arr1.length; ++j) {
        if(arr2[0] === arr1[j]) {
            dp[j][0] = 1;
        }else {
            dp[j][0] = j === 0 ? 0 : dp[j-1][0];
        }
    }
}

let t1 = 'abcde';
let t2 = 'ace';
let tparr = longestCommonSubsequence(t1, t2);
for(let i = 0; i < tparr.length; ++i) {
    for(let j = 0; j < tparr[i].length; ++j) {
        console.log(tparr[i][j]);
    }
    console.log(' ');
}
*/
/*console.log(a);
function notC(){
    var a = 5;
}*/

/*console.log(b);
if(true) {
    let b = 5;
}*/

var longestCommonSubsequence = function(text1, text2) {
    let dp = [];
    let m = text1.length, n = text2.length;
    for(let i = 0; i <= m; ++i) {
        dp[i] = new Array(n+1).fill(0);
    }
    for(let i = 1; i <= m; ++i) {
        for(let j = 1; j <= n; ++j) {
            if(text1.charAt(i-1) === text2.charAt(j-1)) {
                dp[i][j] = Math.max(dp[i-1][j-1] + 1, Math.max(dp[i-1][j], dp[i][j-1]));
            }else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[m][n];
}

let text1 = 'abcde', text2 = 'ace';
console.log(longestCommonSubsequence(text1, text2));

function removeRepeat(arr) {
    if(!arr || arr.length === 0) {
        return [];
    }
    let res = [];
    let m = new Map();
    for(let i = 0; i < arr.length; ++i) {
        if(!m.has(arr[i])) {
            res.push(arr[i]);
            m.set(arr[i], 1);
        }else {
            res.push(' ');
            m.set(arr[i], m.get(arr[i]) + 1);
        }
    }
    return res;
}

let iin = ['apple', 'banana', 'apple', 'orange', 'banana'];
console.log(removeRepeat(iin));

