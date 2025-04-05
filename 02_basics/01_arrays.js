// Declare an array of numbers
const myArr = [0, 1, 2, 3, 4, 5];

// Declare an array of strings (superheroes)
const myHeors = ["shaktiman", "naagraj"];

// Another way to create an array using the Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// Accessing array elements using index
// console.log(myArr[1]); // Outputs: 1

// ============================
// Array Methods (Uncomment to test)
// ============================

// Add element at the end
// myArr.push(6); 
// myArr.push(7); 

// Remove element from the end
// myArr.pop(); 

// Add element at the beginning
// myArr.unshift(9); 

// Remove element from the beginning
// myArr.shift(); 

// Check if array includes a value
// console.log(myArr.includes(9)); // true or false

// Get the index of a value
// console.log(myArr.indexOf(3)); // Outputs: index of 3

// Join array elements into a string (comma-separated by default)
// const newArr = myArr.join(); 
// console.log(myArr);     // Original array
// console.log(newArr);    // Joined string

// ============================
// slice vs splice
// ============================

// Show original array
console.log("A ", myArr); // A  [0, 1, 2, 3, 4, 5]

// slice(start, end) - Returns a **copy** of a portion of the array from start to end (excluding end)
// It DOES NOT modify the original array
const myn1 = myArr.slice(1, 3); // Gets elements at index 1 and 2 (not 3)
console.log(myn1);              // Outputs: [1, 2]
console.log("B ", myArr);       // Original array is unchanged: [0, 1, 2, 3, 4, 5]

// splice(start, deleteCount) - Removes elements from the array starting from index `start`
// It **modifies** the original array
const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1: [1, 2, 3]
console.log("C ", myArr);        // Modified array: [0, 4, 5]
console.log(myn2);               // Removed elements: [1, 2, 3]
