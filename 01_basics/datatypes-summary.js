// primitive

// 7 types : String, Number, Boolean, null, underdefined, Symbol, BigInt, 

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")                     
const anotherId = Symbol("123")

console.log(id === anotherId)   

const bigNumber = 5343367639592529n
console.log(bigNumber)



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "pari"];  // array

let myobj = {
    name: "gaurav",
    age: 21,
}

const myFunctions = function(){
    console.log("Hello World")
}
console.log(typeof myFunctions)




