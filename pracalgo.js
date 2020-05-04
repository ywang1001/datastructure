let str = 'I love yahoo';
console.log(str.length);

console.log(str.split(' ').reverse().join(' '));

function reverseWordInString(s) {
    if(!s) {
        return s;
    }

   for(let i = 0; i < s.length; ++i) {
       
   }
}

var direcs = [[1, 0],[-1, 0],[0, 1],[0, -1]];
var numIslands = function(grid) {
    if(!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    console.log(grid);
    var res = 0;
    for(let i = 0 ; i < grid.length ; ++i) {
        for(let j = 0; j < grid[i].length ; ++j) {
            if(grid[i][j] === 1) {
                ++res;
                console.log(grid, grid[i][j], i, j)
                dfs(grid, i, j);
            }
        }
    }
    return res;
};

/*function dfs(grid, x, y) {
    console.log('in dfs, ',grid);
    if(x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] !== 1) {
        return;
    }
    
    grid[x][y] = 0;
    for(let arr in direcs) {
        let newX = x + arr[0];
        let newY = y + arr[1];
        dfs(grid, newX, newY);
    }
}

let input = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]];
console.log(numIslands(input));*/

let s = 'A man, a plan, a canal: Panama';

/*let arr = [1,2,3,4,5,6];
for(var i = 0; i < arr.length; ++i) {
    (function(){
        let j = i;
        setTimeout(()=> {
           console.log(j, arr[j]);
        }, i*1000)
    })(i)
}

function primeNumber(range) {
    
}*/

for(let i = 0; i < 3; i++) {
    setTimeout(()=>{console.log(i)}, 1000)
}