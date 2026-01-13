// Postfix 

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

let x = 3;
const y = x++;
console.log(x,y);
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
console.log(x2,y2);

// x2 is 4n; y2 is 3n

// Prefix

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let l = 3;
const m = ++l;
console.log(l,m);
// x is 4; y is 4

let a2 = 3n;
const b2 = ++a2;
console.log(a2,b2);
// x2 is 4n; y2 is 4n