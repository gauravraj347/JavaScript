// Create a new Date object with the current date and time
let myDate = new Date();

// Uncomment the below lines to see different representations of the current date
// console.log(myDate);                     // Full date object
// console.log(myDate.toString());         // Converts to human-readable string
// console.log(myDate.toDateString());     // Converts to just the date part (no time)
// console.log(myDate.toLocaleString());   // Converts to local date and time string

// Create a custom date
// Syntax: new Date("MM-DD-YYYY")
let myCreateDate = new Date("01-14-2023"); // Creating date: 14th Jan 2023

// Alternative ways to create a date:
// let myCreateDate = new Date(2024, 0, 23); // January 23, 2024 (months are 0-indexed)
// let myCreateDate = new Date(2024, 0, 23, 5, 3); // Jan 23, 2024 at 5:03 AM

// Display the created date in local string format
console.log(myCreateDate.toLocaleString()); // Example output: 1/14/2023, 12:00:00 AM

// Get the current timestamp in milliseconds (since Jan 1, 1970)
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Example: 1712400923456

// Get the timestamp of the created date (in milliseconds)
console.log(myCreateDate.getTime()); // Example: 1673654400000

// Convert current timestamp to seconds (Unix timestamp)
console.log(Math.floor(Date.now() / 1000)); // Example: 1712400923

// Create a new date object representing the current date/time
let newDate = new Date();
console.log(newDate); // Full current date

// Get the current month (0 for January, 11 for December)
console.log(newDate.getMonth()); // Example: 3 (for April)

// Get the day of the week (0 for Sunday, 6 for Saturday)
console.log(newDate.getDay()); // Example: 0 (if today is Sunday)

// Format the date to show the full name of the weekday
// `default` is undefined here, should be a valid locale like 'en-US'
console.log(newDate.toLocaleString("en-US", {
    weekday: "long"
})); // Example output: "Sunday"
