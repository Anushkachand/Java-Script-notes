const score = 400
console.log(score);


// convert data type
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().lenght);


// use ecomerce website: 
//  toFixed() method, which can be used to format a number with a specific number of decimal places.
2
console.log(balance.toFixed(2));
console.log(balance.toFixed(1))


// toPrecision value is clear and accorate ( round of the no)
const otherNumber = 23.333
console.log(otherNumber.toPrecision(3)) 

const otherNumber2 = 32.47289
console.log(otherNumber2.toPrecision(4)) 

// parseInt() and parseFloat() methods to convert strings to integers and floating-point numbers, respectively.

console.log(parseInt("3"));
// Output: 3
console.log(parseFloat("3.14"));
// Output: 3.14



// Number.MAX_VALUE and Number.MIN_VALUE.

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);


// Number.POSITIVE_INFINITY and Number.NEGATIVE_INFINITY which represents the positive and negative infinity :

console.log(1 / 0);
// Output: Infinity
console.log(-1 / 0);
// Output: -Infinity

