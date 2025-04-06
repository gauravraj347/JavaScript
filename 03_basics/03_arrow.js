const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // 'this' refers to the 'user' object
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// If uncommented, the output would be:
// hitesh , welcome to website
// { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }
// sam , welcome to website
// { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }

// console.log(this);
// In Node.js, 'this' in the global scope refers to an empty object: {}
// In browser, it refers to the window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// In regular functions, 'this' refers to global object (in browser: `window`)
// So `this.username` is `undefined` because `username` is not a global variable

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

// Same behavior as above – still logs `undefined`

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

// chai()
// In arrow functions, 'this' is **lexically scoped**, so it inherits from its parent scope
// If called in global scope, `this` refers to the global object (Node: `{}`)


// Different ways of writing arrow functions:

// Explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return (without braces)
// const addTwo = (num1, num2) =>  num1 + num2

// Using parentheses
// const addTwo = (num1, num2) => ( num1 + num2 )

// Returning an object with implicit return needs parentheses
const addTwo = (num1, num2) => ({ username: "hitesh" })

console.log(addTwo(3, 4))
// ✅ Output: { username: 'hitesh' }
// This shows you're returning an object literal

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// ❌ This line is incomplete — `forEach` requires a callback function
// Example:
// myArray.forEach((num) => console.log(num));
// Output:
// 2
// 5
// 3
// 7
// 8
