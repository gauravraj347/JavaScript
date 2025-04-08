// Function to generate a random hex color
const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID;

// Function to start changing the background color every second
const startChangingColor = function() {
    if (!intervalID) {
        intervalID = setInterval(changeBgcolor, 1000);
    }

    function changeBgcolor() {
        document.body.style.backgroundColor = randomColor();
    }
};

// Function to stop the background color change
const stopChangingColor = function() {
    clearInterval(intervalID);
    intervalID = null;
};

// Fix: Correct query selectors with `#start` and `#stop` to select elements by ID
// Also fixed typo: `startChangingCOlor` → `startChangingColor`
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
