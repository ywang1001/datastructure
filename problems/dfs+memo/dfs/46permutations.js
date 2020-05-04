function permutations(arr) {
    if(!arr) {
        return [];
    }

    let res = [];
    dfs(res, arr, 0);
    return res;
}

function dfs(res, arr, index) {
    if(index === arr.length) {
        res.push([...arr]);
        return;
    }

    for(let i = index ; i < arr.length; ++i) {
        swap(arr, index, i);
        dfs(res, arr, index+1);
        swap(arr, index, i);
    }
}

function swap(arr, left, right) {
    let tp = arr[left];
    arr[left] = arr[right];
    arr[right] = tp;
}

let input = [1,2,3];
let res = permutations(input);
for(let a in res) {
    console.log(res[a][0], res[a][1], res[a][2]);
}