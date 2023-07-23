// Summary: Callback Functions in JavaScript

// A callback function is a function that is passed as a parameter to another function and is called back after a specific event or task completion.
// Callbacks are essential for handling asynchronous code in JavaScript.

// Example 1: Using setTimeout to create a callback function
const message = function() {
    console.log("This message is shown after 3 seconds");
  }
  
  setTimeout(message, 3000);
  
  // Example 2: Using an anonymous function as a callback
  setTimeout(function() {
    console.log("This message is shown after 3 seconds (using an anonymous function)");
  }, 3000);
  
  // Example 3: Using an arrow function as a callback
  setTimeout(() => {
    console.log("This message is shown after 3 seconds (using an arrow function)");
  }, 3000);
  
  // Example 4: Using a callback for event handling
  const button = document.querySelector("#callback-btn");
  button.addEventListener("click", function() {
    console.log("User has clicked on the button!");
  });
  
  // The callback function is executed when the button is clicked.
  
  // In this example, we select the button with its id and add a click event listener to it. When the button is clicked, the callback function logs a message to the console.
  
  // End of Summary
  