// singleton

// object create

// object literals

let person = {
    name: "John",
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(person.name); // "John"
console.log(person["age"]); // 30

// You can also add, update, and delete properties to an object by using the dot notation or the bracket notation.

person.address = "New York";
person["phone"] = "123-456-7890";
delete person.age;


