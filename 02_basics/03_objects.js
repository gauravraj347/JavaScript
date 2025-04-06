// Creating a unique Symbol - Symbols are unique identifiers, can't be duplicated
const mySym = Symbol("key 1")  // "key 1" is just a description, not the value

// Creating an object using object literal notation (curly braces {})
const jsuser = {
    name: "gaurav",             // Simple key-value pair
    "Full name": "Gaurav golu", // Key with space needs quotes
    [mySym]: "mykey1",         // Using Symbol as a key with computed property syntax []
    age: 21,                   // Number value
    location: "Up",           // String value
    email: "gaurav@google.com", // Email as string
    isLoggedIn: false,         // Boolean value
    lastLoginDays: ["Monday", "Saturday"] // Array value
}

// Different ways to access object properties
console.log(jsuser.email)          // Dot notation - Output: "gaurav@google.com"
console.log(jsuser["email"])       // Bracket notation - Output: "gaurav@google.com"
console.log(jsuser["Full name"])   // Bracket notation for spaces - Output: "Gaurav golu"
console.log(jsuser.mySym)          // Wrong way for Symbol - Output: undefined
console.log(typeof jsuser.mySym)   // Type check - Output: "undefined"
console.log(jsuser[mySym])         // Correct Symbol access - Output: "mykey1"

// Modifying object properties
jsuser.email = "gaurav@chatgpt.com"  // Changing email value

// Object.freeze(jsuser)  // Uncomment to lock object - prevents changes
jsuser.email = "gaurav@google.com"   // Won't work if frozen, otherwise updates email
console.log(jsuser)                  // Display object - Output: {
//   name: "gaurav",
//   "Full name": "Gaurav golu",
//   [Symbol(key 1)]: "mykey1",
//   age: 21,
//   location: "Up",
//   email: "gaurav@chatgpt.com", // Changed value (if not frozen)
//   isLoggedIn: false,
//   lastLoginDays: ["Monday", "Saturday"]
// }

// Adding a method (function) to the object
jsuser.greeting = function() {
    console.log("Hello Js user")     // Prints message - Output: "Hello Js user"
}

// Adding another method that uses 'this' to access object properties
jsuser.greetingTwo = function() {
    console.log(`Hello Js user ${this.name}`)  // Uses name - Output: "Hello Js user gaurav"
}

// Calling the methods
console.log(jsuser.greeting())      // Runs function - Output: "Hello Js user" then undefined
console.log(jsuser.greetingTwo())   // Runs function - Output: "Hello Js user gaurav" then undefined