// Function 1: Prints the name "Gaurav" letter by letter
function sayMyName() {
    console.log("G") // Prints the letter G
    console.log("a") // Prints the letter a
    console.log("u") // Prints the letter u
    console.log("r") // Prints the letter r
    console.log("a") // Prints the letter a
    console.log("v") // Prints the letter v
}
sayMyName() // Calls the function to run it

// Function 2: Adds two numbers and returns the result
function addTwoNumber(number1, number2) {
    // The line below is commented out, so it won’t run
    // console.log(number1 + number2) // Would print the sum directly
    // let result = number1 + number2 // Could store the sum in a variable
    // return result // Could return the variable
    
    return number1 + number2 // Directly returns the sum of the two numbers
}
// This line is commented out, so it won’t run
// addTwoNumber(5, null) // If uncommented, would return 5 (null acts as 0 in addition)

const result = addTwoNumber(3, 8) // Calls the function with 3 and 8, stores 11 in 'result'
console.log("Result: " + result) // Prints "Result: " followed by 11

// Function 3: Returns a login message with a default username
function loginUserMessage(username = "sam") { // Default value "sam" if no argument is passed
    if (!username) { // Checks if username is falsy (undefined, null, "", etc.)
        console.log("Please enter a username") // Runs if username is falsy
        return // Exits the function early if no username
    }
    return `${username} just logged in` // Returns a string with the username
}
console.log(loginUserMessage()) // Calls the function with no argument, uses default "sam"

// Note: Earlier versions of loginUserMessage are overwritten by the last one above
// This is an example of an earlier version (not active):
/*
function loginUserMessage(username) {
    if (username === undefined) { // Checks if username is exactly undefined
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
*/





// Function using rest parameter to collect all arguments into an array
function calculateCartPrice(...num1) {
    return num1; // Returns the array of all prices passed
}

console.log(calculateCartPrice(200, 203, 400));
// Output: [200, 203, 400]

// Object representing a user
const user = {
    username: "gaurav",
    price: 199
};

// Function to handle any object with username and price properties
function handleobject(anyobject) {
    console.log(`username ${anyobject.username} and price ${anyobject.price}`);
}

// Uncommented version passes the user object directly
// handleobject(user);

// Call the function by passing an object literal directly
handleobject({
    username: "sam",
    price: 399
});
// Output: username sam and price 399

// Array of numbers
const myNewArray = [500.399, 345, 566];

// Function to return the second element of the array (index 1)
function returnSecondValue(getarray) {
    return getarray[1];
}

console.log(returnSecondValue(myNewArray));
// Output: 345

console.log(returnSecondValue([500, 444, 333]));
// Output: 444
