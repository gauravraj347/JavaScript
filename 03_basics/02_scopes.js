// let a =10
// const b=20
// var c =30



// console.log(a)
// console.log(b)
// console.log(c)


if(true){
    let a = 10;     // 'a' is block-scoped (only accessible inside this 'if' block)
    const b = 20;   // 'b' is also block-scoped
    var c = 30;     // 'c' is function-scoped (or globally scoped if not in a function)
    console.log("INNER: ", a);  // Output: INNER: 10
}

// console.log(a); // ❌ ReferenceError: a is not defined (because 'a' is block-scoped)
// console.log(b); // ❌ ReferenceError: b is not defined (same reason as above)
// console.log(c); // ✅ Output: 30 (because 'var' ignores block scope)



function one(){
    const username = "gaurav"

    function two(){
        const website = "youtuve"
        console.log(username) // ✅ 'username' is accessible from the outer function
    }
    // console.log(website) ❌ Error: 'website' is not defined (it's scoped to function 'two')
    two()
}
// one() // 🚫 This line is commented out, so nothing from `one()` runs

if(true){
    const username = "gaurav"
    if(username == "gaurav"){
        const website = "youtuve"
        console.log(username + website) // ✅ Output: gauravyoutuve
    }
    // console.log(website) ❌ Error: 'website' is block scoped, not accessible here
}
// console.log(username) ❌ Error: 'username' is also block scoped to the first if block



console.log(addone(5)) 
// ✅ Works fine due to function hoisting
// Output: 6
function addone(num){
    return num + 1
}

console.log(addtwo(6))
// ❌ Error: Cannot access 'addtwo' before initialization
// Because function expressions using `const` are **not hoisted** like function declarations

const addtwo = function(num){
    return num + 2
}

console.log(addtwo(6)) 
// ✅ Works fine here
// Output: 8
