// string are denote "" or ''

const name = "github"
const no = 55

console.log( `Hello my repo is$(name)and my repocount is is$ {no}`);


const gameName = new String ('Unique')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt());   
console.log(gameName.indexOf('t'))

// Indexof:  find the index of a specific character or substring in a string

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

// Trim :

const newOneString = "   harry     "
console.log(newOneString)
console.log(newOneString.trim())

const url = "https://iamanushka%20kaushik.com"

console.log(url.replace('%20', '-'))

// inclide true or false ( tell me in string hai ki nhi)
console.log(url.includes('google'))



// split:
const gameNames = "harry Potter"
console.log(gameNames.split(""));

 const text = "Hello world, how are you?";
const words = text.split(" ");
console.log(words)



