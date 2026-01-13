function sayMyName (){

console.log("A");
console.log("N");
console.log("C");
console.log("H");
console.log("A");
console.log("L");
}

// sayMyName()

function addTwoNum(number1 , number2){
    console.log(number1+number2);
}

// addTwoNum(3,null)
// addTwoNum(7,8)
// const result =addTwoNum(8,6)


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

//  ! this symbol convert t convert false and false convert true

function loginUserMessage(username = "sam"){
    if(!username){   // ! convert t - F
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`  
}

console.log(loginUserMessage("Anu"))
// console.log(loginUserMessage("Anu"))


