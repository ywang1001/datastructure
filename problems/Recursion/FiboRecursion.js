var a = 0,b = 1;
var c;
function fibo(n) {
   if(n <= 1) {
       return;
   }

   fibo(n-1);
   c = a + b;
   a = b;
   b = c;
}

fibo(6);
console.log(c);