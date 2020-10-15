/*function networkSums(cNodes, cFrom, cTo) {
    let sum = cNodes * (cNodes + 1)/2;
    const res = [];
    const graph = new Graph(cNodes);
    for(let i = 0; i < cFrom.length; ++i) {
        const f = cFrom[i] - 1;
        const t = cTo[i] - 1;
        const unionRes = graph.union(f, t);
        if(unionRes !== null) {
            sum -= unionRes + 1;
            res.push(sum);
        }else {
            res.push(sum);
        }
    }
    return res;
}

class Graph {
    constructor(size) {
        this.parent = [];
        for(let i = 0; i < size; ++i) {
            this.parent[i] = i;
        }
    }

    find(x) {
      if(this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
      return this.parent[x];
    }

    union(x, y) {
        const fx = this.find(x);
        const fy = this.find(y);
        console.log(fx, ',', fy);
        if(fx === fy) {
            return null;
        }
        if(fx > fy) {
            this.parent[fy] = fx; 
        }else {
            this.parentp[fx] = fy;
        }
        return Math.min(fx, fy);
    }
}

console.log(networkSums(5, [1,2,1,4],[2,3,3,5]));
*/

/*
let a = [1,2,3,4];
let b = []
a.forEach(ele => {
                 ele = ele*2;
                 console.log(ele);
                 b.push(ele);
                });
for(let i = 0; i < a.length; ++i) {
    console.log(b[i]);
}*/



/*function Foo(){
    getName = function(){
        console.log(1)
    }
    return this;
}
Foo.getName = function(){
    console.log(2)
}
Foo.prototype.getName = function(){
    console.log(3)
}
var getName = function(){
    console.log(4)
}
function getName(){
    console.log(5)
}
// ouput:
Foo.getName();  // 3   错成狗了
getName();           //  4
//Foo().getName();  //  1
getName();      // 1
new Foo.getName();   // 1 
new Foo().getName();  // 1
*/
/*
console.log(1)
setTimeout(function() {
  console.log(2)
}, 0);
const intervalId = setInterval(function() {
  console.log(3)
}, 0)
setTimeout(function() {
  console.log(10)
  new Promise(function(resolve) {
    console.log(11)
    resolve()
  })
  .then(function() {
    console.log(12)
  })
  .then(function() {
    console.log(13)
    clearInterval(intervalId)
  })
}, 0);

Promise.resolve()
  .then(function() {
    console.log(7)
  })
  .then(function() {
    console.log(8)
  })
console.log(9)
*/

/*
let input = [{a: 1, b: 2},{a: 2, b: 2},{a: 1, b: 2},{a: 3,b: 2},{a:3, b:2},{a: 3, b: 2}];
let obj = {};

function stringf(obj) {
  let s = '';
  Object.keys(obj).forEach((key) => {
    s += key+':'+obj[key]+',';
  })
  return s;
}

function destringf(str, num) {
   let ar = str.split(',');
   let co = {};
   for(let i = 0; i < ar.length - 1; ++i) {
    let tpa = ar[i].split(':');
    co[tpa[0]] = parseInt(tpa[1]);
   }
   co['count'] = num;
   return co;
}

let tparr = [];
for(let i = 0; i < input.length; ++i) {
  tparr.push(stringf(input[i]));
}

let map = new Map();
for(let i = 0; i < tparr.length; ++i) {
  if(!map.has(tparr[i])) {
    map.set(tparr[i], 0);
  }
  map.set(tparr[i], map.get(tparr[i]) + 1);
}
let fres = [];
for(let [key,value ] of map) {
  let newObj = destringf(key, value);
  fres.push(newObj);
}

for(let i = 0; i < fres.length; ++i) {
  console.log(fres[i]);
}

for(var i = 0; i < 5; ++i) {
      (function(){
         let j = i;
         setTimeout(() => {
          console.log(`after ${j} s`, j);
         }, 1000*i)
       }
     )(i);
} 

let arr = [3,0,2,1,0,4,5,0,0,3,0];
let l = 0, r = arr.length-1;
while(l < r) {
  if(arr[l] !== 0) {
    l++;
  }else if(arr[r] === 0) {
    r--;
  }else {
    swap(arr, l++, r--);
  }
}
function swap(arr, left, right) {
  let tp = arr[left];
  arr[left] = arr[right];
  arr[right] = tp;
}
console.log(arr);

function Add(a) {
  let sum = a;
  function add2(b){
    sum += b;
    return add2;
  }
  add2.toString = () => {
    return sum;
  }
  return add2;
}

console.log(Add(1)(2)(3)(4));*/


/*function fn1(){
       for(var i=0;i<4;i++){
          var timer=setTimeout(function(i){
            console.log(i);
            clearTimeout(timer)
          },10,i);
        }
      }
      fn1();*/
/*
     let ar = ['aa', 'ab', 'ab', 'cc', 'cba']

     function m(strs) {
      let obj = {};
      strs.forEach((ele) => {
        if(!obj[ele]) {
          obj[ele] = 1;
        }else {
          obj[ele] = obj[ele] + 1;
        }
      })
      return obj;
     }

     console.log(m(ar));*/
     let num1 = '123456789123456789'
     let num2 = '987654321987654321';
     let arr1 = num1.split('');
     console.log(arr1);
     console.log(parseInt(arr1[0]) + parseInt(arr1[1]));
     function add(ar1, ar2) {
       let offset = 0;
       let res = [];
       for(let i = 0; i < Math.max(ar1.length, ar2.length); ++i) {
         if(i < Math.min(ar1.length, ar2.length)) {
            let tp = parseInt(ar1[ar1.length-1-i]) + parseInt(ar2[ar2.length-i-i])+offset;
            if(tp >= 10) {
              offset = tp / 10;
              tp = tp%10;
            }else {
              offset = 0;
            }
            res.unshift(tp);
         }else {
           if(ar1.length > ar2.length) {
              let tp = parseInt(ar1[ar1.length - 1 - i]) + offset;
              if(tp >= 10) {
                offset = tp / 10;
                tp = tp%10;
              }else {
                offset = 0;
              }
              res.unshift(tp);
           }else {
            let tp = parseInt(ar2[ar2.length - 1 - i]) + offset;
            if(tp >= 10) {
              offset = tp / 10;
              tp = tp%10;
            }else {
              offset = 0;
            }
            res.unshift(tp);
           }
         }
       }
       return res.join('');
     }

     console.log(add(num1, num2));