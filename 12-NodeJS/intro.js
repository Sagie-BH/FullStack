// Step 1: Introduction to Node.js
// Node.js is a JavaScript runtime that allows us to execute JavaScript code outside the browser.
// It is used for building server-side applications and provides various modules to work with file systems, networking, and more.

// Step 2: Downloading Node.js and Checking Version
// To download Node.js, go to the official website: https://nodejs.org/
// Download the appropriate version for your operating system and install it.

// To check the installed version of Node.js, open the terminal or command prompt and run:
console.log("Node.js version:", process.version);

// You can also check the installed version of npm:
console.log("npm version:", process.env.npm_package_version);

// Step 3: Importing Modules using ES6 and require
// In modern JavaScript (ES6+), we can use 'import' and 'export' statements to import and export functions or variables between files.

// For example, let's create a file named 'math.js' with the following content:
// math.js
export function add(a, b) {
  return a + b;
}

// In another file, we can import the 'add' function from 'math.js' as follows:
// index.js
import { add } from './math.js';

console.log(add(5, 3)); // Output: 8

// In older versions of Node.js (before ES6), we used 'require' to import modules:
// math.js
module.exports.add = function(a, b) {
  return a + b;
};

// In the older version, we import the 'add' function as follows:
// index.js
const math = require('./math.js');

console.log(math.add(5, 3)); // Output: 8

// Note: You cannot mix 'import' and 'require' in the same file. They are two different ways of importing modules and should not be used together.

// Step 4: Using Basic Modules like fs and http
// Node.js provides several core modules like 'fs' (File System) and 'http' (HTTP Server) that allow us to work with files and create servers.

// For example, let's use the 'fs' module to read a file:
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    console.log("File content:", data);
  }
});

// Step 5: Summary
// In this section, we introduced Node.js as a JavaScript runtime for server-side development.
// We downloaded and checked the version of Node.js.
// We explored how to import modules using both the ES6 'import' and the older 'require' methods.

// Step 6: Description
// Node.js allows us to use JavaScript on the server-side, making it a versatile choice for full-stack development.
// With Node.js, we can easily import functions or files using 'import' (ES6) or 'require' (older version).
// Mixing 'import' and 'require' can lead to issues, so it's essential to choose one method consistently.
// The 'fs' and 'http' modules are just a glimpse of the vast Node.js ecosystem that offers powerful capabilities for building server-side applications.
