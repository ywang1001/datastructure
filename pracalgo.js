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
let re = /\s*(?:;|$)\s*/;
console.log(s.toLowerCase().split(re));
let b = s.split(' ').join('');
console.log(b);
let c = b.split(',').join('');
console.log(c);
let d = c.split(':').join('');
console.log(d);
let e = d.toLowerCase();
console.log(e);
console.log(e.split('').reverse().join('') === e)
