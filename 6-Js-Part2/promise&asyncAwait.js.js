// Summary: Promises vs. Async/Await in JavaScript

// Promises and Async/Await are two approaches used to handle asynchronous operations in JavaScript.
// They provide a cleaner and more organized way to work with asynchronous code compared to traditional callbacks.

// Example 1: Using Promises
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { name: "John", age: 30 };
            resolve(userData);
        }, 2000);
    });
}

fetchUserData()
    .then((data) => {
        console.log(data); // Output: { name: "John", age: 30 }
    })
    .catch((error) => {
        console.error(error);
    });

/*
Explanation:
In Example 1, we define a function called "fetchUserData" that returns a Promise.
Inside the Promise constructor, we use setTimeout to mimic an asynchronous operation that resolves with user data after 2 seconds.
When "fetchUserData()" is called, it returns a Promise, and we use the "then" method to handle the resolved value (user data) and log it to the console.
If an error occurs during the asynchronous operation, it will be caught and logged using the "catch" method.
*/

// Example 2: Using Async/Await
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { name: "Alice", age: 25 };
            resolve(userData);
        }, 2000);
    });
}

async function getUser() {
    try {
        const userData = await fetchUserData();
        console.log(userData); // Output: { name: "Alice", age: 25 }
    } catch (error) {
        console.error(error);
    }
}

getUser();

/*
Explanation:
In Example 2, we define the same "fetchUserData" function that returns a Promise, as shown in Example 1.
We create an async function called "getUser," which allows us to use the "await" keyword inside it.
The "await" keyword is used to wait for the Promise to resolve, and it simplifies the handling of asynchronous code.
Inside "getUser," we call "fetchUserData()" using "await," and it will pause the execution until the Promise is resolved.
Once resolved, the user data is stored in "userData," and we log it to the console.
If an error occurs during the asynchronous operation, it will be caught and logged using a try-catch block.
*/

// Example 3: Promise.all vs. Async/Await (Parallel Execution)
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = { name: "Bob", age: 28 };
            resolve(userData);
        }, 2000);
    });
}

function fetchAdditionalData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const additionalData = { hobby: "Reading" };
            resolve(additionalData);
        }, 1500);
    });
}

// Using Promise.all
Promise.all([fetchUserData(), fetchAdditionalData()])
    .then(([userData, additionalData]) => {
        console.log(userData); // Output: { name: "Bob", age: 28 }
        console.log(additionalData); // Output: { hobby: "Reading" }
    })
    .catch((error) => {
        console.error(error);
    });

    
// Using Async/Await
async function getData() {
    try {
        const [userData, additionalData] = await Promise.all([fetchUserData(), fetchAdditionalData()]);
        console.log(userData); // Output: { name: "Bob", age: 28 }
        console.log(additionalData); // Output: { hobby: "Reading" }
    } catch (error) {
        console.error(error);
    }
}
getData();

/*
Explanation:
In Example 3, we have two functions: "fetchUserData" and "fetchAdditionalData," both returning Promises with user data and additional data.
With Promise.all, we can execute both Promises in parallel, waiting for both to resolve, and then handle their results together in an array using the "then" method.
Alternatively, with async/await, we can use the "await" keyword with Promise.all, which also allows us to execute both Promises in parallel and store their results in variables when resolved.
Both approaches achieve the same result of fetching data concurrently and handling it together.
*/

// Differences between Promises and Async/Await:
// - Syntax: Promises use the "then" and "catch" methods to handle resolved and rejected states, while Async/Await uses the "await" keyword within an async function.
// - Error Handling: With Promises, error handling is done using the "catch" method or chaining "catch" to each Promise. In Async/Await, error handling is done using a try-catch block around the await statements.
// - Readability: Async/Await often provides more readable and sequential code as it resembles synchronous code, making it easier to understand.
// - Error Stacks: Promises provide better error stack traces, making it easier to track errors to their origin, while Async/Await might lose some stack trace information due to the use of "await."

// Pros and Cons of Promises:
// Pros: Clear separation of resolved and rejected states, good error handling with "catch," support for chaining, and ability to handle multiple asynchronous operations concurrently with "Promise.all."
// Cons: May lead to callback hell if not used properly, requires understanding of Promise chaining, and can be harder to read when dealing with complex asynchronous flows.

// Pros and Cons of Async/Await:
// Pros: Readable and sequential code, easy error handling with try-catch, more intuitive and easier to understand for developers familiar with synchronous code.
// Cons: Requires a more recent version of JavaScript (ES2017+), may not be supported in older browsers, and it might lose some stack trace information.

// Promise Chaining:
// Both Promises and Async/Await support Promise chaining, allowing multiple asynchronous operations to be executed sequentially.
// Promise chaining is achieved by returning a Promise from the "then" method or using "await" within an async function.
// For example:
fetchUserData()
    .then((userData) => fetchAdditionalData(userData.id))
    .then((additionalData) => console.log(additionalData))
    .catch((error) => console.error(error));

// End of Summary
