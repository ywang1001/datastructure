function reverstring(s) {
    if(!s) {
        return s;
    }

    let arr = s.split(' ');
    for(let i = 0; i < arr.length; ++i) {
        arr[i] = arr[i].split('').reverse().join('');
    }
    return arr.join(' ');
}

let input = 'abc is edf';
let res = reverstring(input);
console.log(res);