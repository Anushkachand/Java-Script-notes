# Conditional Statements

In JavaScript, the main conditional structures are:

- if and else
- if...else if...else (also called if-else ladder)
- switch statement

## If else conditionals

- The "if" statement in JavaScript is used to execute a block of code if a certain condition is met. The "else" clause is used to execute a block of code if the condition is not met.
- 
Here is the basic syntax for an "if" statement:
```
if (condition) {
  // code to be executed if condition is true
}
```

### The if...else Statement
- Sometimes you want to run one block of code if the condition is true, and another block if it’s false. That’s where else comes in.

Syntax:
```
  if (condition) {
   // runs if condition is true
 } else {
   // runs if condition is false
 }
```
The if...else if...else Ladder
When you have multiple conditions to check, using just if and else becomes messy. That’s where the if-else ladder (also called a chain) helps — you can check several conditions in sequence.

Syntax:

if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition1 is false and condition2 is true
} else if (condition3) {
  // code if the above are false but this is true
} else {
    // code if none of the conditions are true
}

## The switch Statement
If you’re comparing a single value against multiple possible options, the switch statement is a cleaner alternative to multiple if...else if conditions
```
switch (expression) {
  case value1:
    // code if expression === value1
    break;
  case value2:
    // code if expression === value2
    break;
  default:
    // code if none of the above cases match
}
```

