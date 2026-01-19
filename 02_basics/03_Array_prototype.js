const marvel_heroes = [ "ironman", "Black Panther","Black pool"]
const dc_heroes = ["Superman", "flash" , "Batman"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// concat = join
marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes)

const allHero = marvel_heroes.concat(dc_heroes)
console.log(allHero);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const another_array = [ 1,2,3,4,[5,6] , 9,[.7,8]]

const real_another_array = another_array.flat(Infinity)
console.log(another_array);

console.log(Array.isArray("Anushka"))
console.log(Array.from("Anu"))
console.log(Array.from({name: "anushka"})) // interseting
// console.log(Array.)


let score1 = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1, score2 , score3))