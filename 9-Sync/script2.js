// Example 1: Synchronous Code
console.log('Console log');

// Example 2: Microtask Queue (Promise)
Promise.resolve().then(() => console.log('From promise'));

// Example 3: Task Queue (setTimeout)
setTimeout(() => console.log('From timeout'), 0);

// Example 4: Additional Microtask (using Promise.resolve().then())
Promise.resolve().then(() => console.log('From additional microtask'));

// Example 5: Additional Task (setInterval)
// setInterval(() => console.log('From setInterval'), 1000);
let count = 0; 
const intervalId = setInterval(() => {
    count++; // Increment the counter on each interval execution
    console.log('Interval executed', count, 'times');
    // Check if the desired number of iterations (e.g., 10 times) is reached
    if (count === 10) {
      clearInterval(intervalId); // Stop the interval
      console.log('Interval stopped after 10 times');
    }
  }, 1000);

  setTimeout(() => console.log('From timeout 2'), 1000);

  Promise.resolve().then(() => setTimeout(() => console.log('From Timeout Promise'), 1000));


// Output Order Explanation:
// 1. Synchronous code is executed first, logging "Console log" to the console.
// 2. Microtasks are executed before the next rendering phase. The microtask queue contains the promise from Example 2 and the additional microtask from Example 4.
// 3. Microtask 1: The promise from Example 2 is executed, logging "From promise" to the console.
// 4. Microtask 2: The additional microtask from Example 4 is executed, logging "From additional microtask" to the console.
// 5. After processing all microtasks, the event loop moves to the task queue. It contains the setTimeout from Example 3 and setInterval from Example 5.
// 6. Task 1: The setTimeout from Example 3 is executed, logging "From timeout" to the console.
// 7. Task 2: The setInterval from Example 5 will execute repeatedly every 1000ms, logging "From setInterval" to the console in intervals.

// Output Order Example:
// Console log
// From promise
// From additional microtask
// From timeout (after 0 milliseconds)
// From setInterval (repeatedly every 1000ms)

// Additional Note:
// The exact output timing may vary based on the JavaScript engine and system performance. The examples show the expected order in a typical scenario.
