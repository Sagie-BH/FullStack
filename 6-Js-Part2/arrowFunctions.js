// Summary: Arrow Functions in JavaScript

// Arrow functions are a concise way to write function expressions in JavaScript.
// They provide a shorter syntax compared to regular function expressions and have a lexical 'this' binding.

// Example 1: Basic Arrow Function
const add = (a, b) => {
    return a + b;
  };
  
  console.log(add(2, 3)); // Output: 5
  
  /*
  Explanation:
  In Example 1, we define a basic arrow function called "add" that takes two parameters (a and b).
  The arrow (=>) separates the function parameters from the function body.
  The function body, enclosed in curly braces, performs the addition of the two parameters and returns the result.
  The arrow function is then invoked with arguments (2 and 3), and the result (5) is logged to the console.
  */
  
  // Example 2: Single Expression Arrow Function
  const multiply = (a, b) => a * b;
  
  console.log(multiply(2, 3)); // Output: 6
  
  /*
  Explanation:
  In Example 2, we create an arrow function called "multiply" with a single expression.
  When using a single expression, the function implicitly returns the result of that expression without the need for the "return" keyword.
  In this case, the function takes two arguments (a and b) and directly returns their product.
  The arrow function is invoked with arguments (2 and 3), and the result (6) is logged to the console.
  */
  
  // Example 3: Arrow Function with One Parameter
  const square = x => x * x;
  
  console.log(square(4)); // Output: 16
  
  /*
  Explanation:
  In Example 3, we define an arrow function called "square" with one parameter (x).
  Since there is only one parameter, we can omit the parentheses around it.
  The arrow function takes the value of "x," squares it, and returns the result.
  The function is invoked with an argument (4), and the squared value (16) is logged to the console.
  */
  
  // Example 4: Arrow Function Lexical 'this'
  const person = {
    name: "John",
    greet: function() {
      // Regular function expression using 'this'
      setTimeout(function() {
        console.log("Hello, my name is " + this.name);
      }, 1000);
    },
    greetArrow: function() {
      // Arrow function with lexical 'this'
      setTimeout(() => {
        console.log("Hello, my name is " + this.name);
      }, 1000);
    },
  };
  
  person.greet(); // Output: Hello, my name is undefined
  person.greetArrow(); // Output: Hello, my name is John
  
  /*
  Explanation:
  In Example 4, we have an object "person" with two methods: "greet" and "greetArrow."
  In the "greet" method, a regular function expression is used inside the "setTimeout" function.
  However, regular function expressions create their own 'this' context, which results in "this.name" being undefined.
  In contrast, the "greetArrow" method uses an arrow function inside "setTimeout."
  Arrow functions do not create their own 'this' context but instead inherit the 'this' value from the surrounding code (lexical 'this').
  Thus, the "greetArrow" method correctly logs "Hello, my name is John" since it references the 'name' property of the "person" object.
  */
  
  // End of Summary
  