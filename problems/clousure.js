let arr = [1,2,3,4,5,6];

function test(arr) {
for(let i = 0; i < arr.length; ++i) {
    (function(i){
       let j = i;
       setTimeout(()=>{
          console.log(arr[j])
       }, i*1000)
    })(i)
}
}

test(arr);

const obj = {
    '1' : 'zhw',
    '2' : 'kxl',
    '3' : 'hjy'
}

Object.keys(obj).forEach(ele => {
    console.log(ele, obj[ele]);
});


function add(a) {
    let sum = a
     function add2(b){
       sum += b;
       return add2;
     };
     add2.toString = function(){
         return sum;
     }
     return add2;
 }
 console.log(add(1)(2)(3)(4));

 let obj1 = {
     name: 'Hongwei Zhang',
     sex: 'female',
     age: 28
 }

 Object.keys(obj).forEach((ele) => {
     console.log(ele, obj[ele]);
 })