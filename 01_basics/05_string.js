

const name = "gaurav"
const repoCount = 16
//console.log(name + repoCount+ " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("gaurav-baby-golu")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('v'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "    gaurav    "
console.log(newStringOne)
console.log(newStringOne.trim("-")) 

const url = "https://gaurav.com/gaurv%20golu"
console.log(url.replace('%20', '-'))

console.log(url.includes('baby'))

console.log(gameName.split('-'))