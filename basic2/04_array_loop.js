// Loops with Arrays

// JavaScript provides several ways to iterate through an array, including the for loop, forEach method, and for...of loop.

console.log("Array");
// for loop - This is the most basic way to iterate through an array. The for loop uses a counter variable that is incremented on each iteration. For example, the following code will print out each element in the array:

var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


// forEach method - This method is a more concise way to iterate through an array. The forEach method takes a callback function as its argument, which is called on each element in the array. For example, the following code will print out each element in the array:

var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element) {
    console.log(element);
});


console.log("fornewArray");

// for...of loop - This is a more recent addition to JavaScript, and it is the most concise way to iterate through an array. It allows you to iterate through the elements of an array without having to access the index, and it works with any iterable object, not just arrays

var myArray = [1, 2, 3, 4, 5];
for (var element of myArray) {
    console.log(element);
}

