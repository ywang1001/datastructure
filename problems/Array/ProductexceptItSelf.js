function productExceptItSelf(arr) {
    let mult = 1;
    for(let i = 0; i < arr.length; ++i) {
        mult *= arr[i];
    }
    let res = [];
    for(let i = 0; i < arr.length; ++i) {
        res.push(mult/arr[i]);
    }
    return res;
}
let input = [1,2,3,4];
let res = productExceptItSelf(input);
res.forEach((ele) => console.log(ele));