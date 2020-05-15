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
