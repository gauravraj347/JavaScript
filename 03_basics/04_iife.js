// IIFE (Immediately Invoked Function Expression)
(function chai() {
    console.log(`DB connected`);
})();
// Output: DB connected

// Another IIFE with the same function name (allowed because each is scoped)
(function chai() {
    console.log(`DB connected two`);
})();
// Output: DB connected two

// Arrow function as an IIFE with a parameter
((name) => {
    console.log(`DB connneted ${name}`);
})("gaurav");
// Output: DB connneted gaurav
