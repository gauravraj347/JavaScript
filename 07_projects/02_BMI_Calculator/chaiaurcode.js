// Get the form element from the DOM
const form = document.querySelector("form");

// Add an event listener for the form submission
form.addEventListener('submit', function(e) {
    // Prevent the default form submission behavior (which would reload the page)
    e.preventDefault();

    // Get the height and weight values entered by the user and convert them to integers
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    // Get the element where the result will be displayed
    result = document.querySelector('#results');

    // Validate height input: check if it's not empty, not negative, and is a number
    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`;
    } 
    // Validate weight input: check if it's not empty, not negative, and is a number
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`;
    } 
    // If both inputs are valid, calculate the BMI
    else {
        // Calculate BMI using the formula: weight (kg) / height (m)^2
        // Height is converted from cm to meters in the formula
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Display the calculated BMI inside the results element
        result.innerHTML = `<span>${bmi}</span>`;
    }
});
