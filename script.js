// JavaScript file for the calculator app

// Global variables
let display = document.getElementById("result");
let expression = "";

// Function to append the clicked button value to the display
function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

// Function to clear the display
function clearDisplay() {
  expression = "";
  display.value = "";
}

// Function to calculate the result and update the display
function calculate() {
  try {
    expression = eval(expression);
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}
