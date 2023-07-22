// Function that creates a closure using var
function createClosureWithVar() {
    var message = "Hello";
  
    // Outer function
    function outerFunction() {
      var outerVariable = "Outer";
  
      // Inner function
      function innerFunction() {
        console.log(message, outerVariable);
      }
  
      // setTimeout callback modifying the outerVariable
      setTimeout(function () {
        outerVariable = "Modified Outer";
        console.log("Inside setTimeout (var):", message, outerVariable);
      }, 1000);
  
      return innerFunction;
    }
  
    return outerFunction;
  }
  
  // Function that creates a closure using let
  function createClosureWithLet() {
    let message = "Hello";
  
    // Outer function
    function outerFunction() {
      let outerVariable = "Outer";
  
      // Inner function
      function innerFunction() {
        console.log(message, outerVariable);
      }
  
      // setTimeout callback modifying the outerVariable
      setTimeout(function () {
        outerVariable = "Modified Outer";
        console.log("Inside setTimeout (let):", message, outerVariable);
      }, 1000);
  
      return innerFunction;
    }
  
    return outerFunction;
  }
  
  // Example using var
  const varClosure = createClosureWithVar();
  const varInnerFunction = varClosure();
  varInnerFunction(); // Output: Hello Outer
  // After 1 second, it logs: Inside setTimeout (var): Hello Modified Outer
  
  // Example using let
  const letClosure = createClosureWithLet();
  const letInnerFunction = letClosure();
  letInnerFunction(); // Output: Hello Outer
  // After 1 second, it logs: Inside setTimeout (let): Hello Modified Outer
  
  // Comparison of output
  console.log(varInnerFunction === letInnerFunction); // Output: false
  