// Assuming you're using the 'color' library
const Color = require("color");

// Color variables
const greenColor = Color("#82bd3e");
const blueColor = Color("#1271b8");

// Mix the colors
const mixedColor = greenColor.mix(blueColor, 0.5); // Adjust the weight as needed

// Create the gradient
const newGradient = `linear-gradient(180deg, ${mixedColor.hex()}, #FFF)`;

// Assign the gradient to backgroundImage
element.style.backgroundImage = newGradient; // Replace 'element' with the actual element
