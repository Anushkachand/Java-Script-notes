// Date

myDate = new Date()

console.log(myDate.toString()); 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
// interview question type of date 
console.log(typeof myDate)


// toDataString = 
let myCreateDate =  new Date (2005 , 0, 8)
console.log(myCreateDate.toDateString())


let myCreateDates = new Date ( "2002-10-30")
console.log(myCreateDates.toLocaleString())

let myCreatesDates = new Date ( "10-30-2006")
console.log(myCreatesDates.toLocaleString())

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatesDates.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate)
console.log(newDate.getDay())


newDate.toLocaleString('default', {weekday: "long",
    // timeZone: 
})