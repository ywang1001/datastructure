var FastPriorityQueue = require("fastpriorityqueue");
let s = 'abcdefg';

console.log(s.split('').reverse().join(''));

let x = new FastPriorityQueue();
x.add(1);
x.add(4);
x.add(3);
while(!x.isEmpty()) {
    console.log(x.poll());
}