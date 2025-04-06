// Two ways to create an empty object
// const tinderUser = new Object()    // Method 1: Using Object constructor
const tinderUser = {}                 // Method 2: Using object literal (shorter and more common)

// Adding properties to our tinderUser object
tinderUser.id = "123abc"             // Unique identifier for the user
tinderUser.name = "Sammy"           // User's name
tinderUser.isLoggedIn = false       // Login status (true/false)

// console.log(tinderUser); 
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Creating an object with nested properties
const regularUser = {
    email: "some@gmail.com",         // User's email
    fullname: {                     // Nested object for full name
        userfullname: {            // Another nested level
            firstname: "hitesh",   // First name
            lastname: "choudhary"  // Last name
        }
    }
}

// Accessing nested properties using dot notation
// console.log(regularUser.fullname.userfullname.firstname);
// Output: "hitesh"

// Creating three simple objects with key-value pairs
const obj1 = {1: "a", 2: "b"}      // Object 1 with numbers as keys
const obj2 = {3: "a", 4: "b"}      // Object 2 with different keys
const obj4 = {5: "a", 6: "b"}      // Object 3 with different keys

// Merging objects in different ways:
// const obj3 = { obj1, obj2 }      // This creates a nested object (not merging)
// Output: { obj1: {1: "a", 2: "b"}, obj2: {3: "a", 4: "b"} }

// const obj3 = Object.assign({}, obj1, obj2, obj4)  // Merges all objects into a new empty object
// Output: {1: "a", 2: "b", 3: "a", 4: "b", 5: "a", 6: "b"}

const obj3 = {...obj1, ...obj2}    // Spread operator to merge objects (modern way)
// console.log(obj3);
// Output: {1: "a", 2: "b", 3: "a", 4: "b"}

// Array of objects (like a list of users)
const users = [
    {                              // First user object
        id: 1,
        email: "h@gmail.com"
    },
    {                              // Second user object
        id: 1,
        email: "h@gmail.com"
    },
    {                              // Third user object
        id: 1,
        email: "h@gmail.com"
    },
]

// Accessing array elements (arrays start at index 0)
users[1].email                    // Gets email from second object (index 1)
// Output: "h@gmail.com"

// console.log(tinderUser);
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// Useful Object methods:
// console.log(Object.keys(tinderUser));     // Gets all property names
// Output: ['id', 'name', 'isLoggedIn'] 

// console.log(Object.values(tinderUser));   // Gets all property values
// Output: ['123abc', 'Sammy', false]

// console.log(Object.entries(tinderUser));  // Gets array of key-value pairs
// Output: [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // Checks if property exists
// Output: true

// Another object example
const course = {
    coursename: "js in hindi",     // Course name
    price: "999",                 // Price as string
    courseInstructor: "hitesh"    // Instructor's name
}

// Destructuring: Extracting values with a shorter name
const {courseInstructor: instructor} = course  // Renames courseInstructor to instructor

// console.log(courseInstructor);    // This would give error (courseInstructor not defined)
// console.log(instructor);          // Works because of destructuring
// Output: "hitesh"

// JSON-like structure (data format)
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Array of empty objects
[
    {},    // Empty object 1
    {},    // Empty object 2
    {}     // Empty object 3
]