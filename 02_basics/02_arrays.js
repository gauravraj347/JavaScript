

const marvel_heros = ["thor", "Ironman", "spoderman"]
const dc = ["SuperMan", "flash", "batman"]
// marvel_heros.push(dc)

// console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc)
console.log(all_heros)

const all_new_heroes = [...marvel_heros, ...dc]
console.log(all_new_heroes)

const another_arays = [1,2,4,5,[4,5,3,5],6,[4,6,73,2,[5,3,7]]]
console.log(another_arays.flat(Infinity))


Array.isArray("gaurav")
console.log(Array.isArray("gaurav"))
console.log(Array.from("gaurav"))
console.log(Array.from({name:"gaurav"}))  //Interesting case

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))