// testing Hello there / world
console.log('Hello There TEST!');
    
window.onload = function()
{
    alert("Welcome to My Website!");

    // Prompt the user for their name
var name = prompt("What is your name?");

// Display a personalized greeting
var greeting = "Hello, " + name + "! Welcome to the JavaScript application.";
alert(greeting);

// Prompt the user for weight in kilograms
var weight = prompt("Enter your weight in kilograms:");

// Prompt the user for height in centimeters
var height = prompt("Enter your height in centimeters:");

// Convert height to meters
var heightInMeters = height / 100;

// Calculate BMI
var bmi = weight / (heightInMeters * heightInMeters);

// Display the calculated BMI
alert("Your BMI is: " + bmi.toFixed(2));

}



