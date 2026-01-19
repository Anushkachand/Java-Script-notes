// Array Method

const myArr = [ 1,2,3,4,5];
// / Add th value at end
myArr.push(11)
console.log(myArr)

// pop - remove the value at the end
myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log(myArr)

var myArray = [1, "Hello", 8, 6, [2, 3]];
console.log(myArray.length);

// check value t/false

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

console.log(typeof myArr);

var myArray = [1, "Hello", [2, 3]];
console.log(myArray.slice(1, 2)); // ["Hello"]

var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);
console.log(myArray); // [1, "Hello World", [4, 5], [2, 3]]