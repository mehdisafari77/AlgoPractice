// Swap two variables

// 1
var a = 1,
    b = 2,
    tmp;
tmp = a;
a = b;
b = tmp;

// 2
let a = 1, b = 2;
a = a ^ b;
b = a ^ b;
a = a ^ b;
    
console.log('a is now:', a);
console.log('b is now:', b);