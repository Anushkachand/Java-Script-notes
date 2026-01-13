// there are are two type of data type in js:

// 1. Primitive Data type: string , number , boolean , null , undefine , symbol, Bigint


// javascript is a dynamiccally type langauage

const score = 100
const scorevValue = 100.44

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefine

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); //false because symbol is unique

const Bigint = 1233456666666n;
console.log(Bigint)

// 2. Non Primitive Data type (Reference Data type):
// Object, Array , Function


const Billonaries =[ "Elon Musk " , "Jeff Bezor", "Bill gates"]

/*
Object : object is collection of key value pair data type in js

Object is flexible in antue 
object is define by{}
obj{
key : values}
*/

let_user = {
    firstName : "Anu",
    Lastname : "Kaushik",
    age: 23,
}

console.log(let_user)

// Function: function is a block of code that can be resued any nun=mber of items


const myFunction = function(){
    console.log("HelloWorld");
}

// data typeof operator

console.log(typeof score)


console.log(typeof myFunction)
