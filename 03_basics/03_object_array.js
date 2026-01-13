function calculateCardPrice (...number1){
    return number1
}
console.log(calculateCardPrice(300,499,495))

function handleObject(myobject){
    console.log(`Username is ${ myObject.username} and price is ${myobject.price}`);
}

// handleObject(user)
handleObject ({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));