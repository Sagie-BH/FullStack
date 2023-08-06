// Step 1: Import the fs module
const fs = require('fs');

// Step 2: Reading Files
// The fs module provides methods to read files asynchronously and synchronously.

// Asynchronous Read
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
  } else {
    console.log("Asynchronous Read Result:");
    console.log(data);
  }
});

// Synchronous Read
try {
  const content = fs.readFileSync('example.txt', 'utf8');
  console.log("Synchronous Read Result:");
  console.log(content);
} catch (err) {
  console.error("Error reading the file synchronously:", err);
}

// Step 3: Writing Files
// The fs module allows you to write files asynchronously and synchronously.

// Asynchronous Write
const contentToWrite = "This is some content to write to the file.";
fs.writeFile('newfile.txt', contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error("Error writing the file:", err);
  } else {
    console.log("Asynchronous Write Successful!");
  }
});

// Synchronous Write
const contentToWriteSync = "This is some content to write synchronously to the file.";
try {
  fs.writeFileSync('newfile_sync.txt', contentToWriteSync, 'utf8');
  console.log("Synchronous Write Successful!");
} catch (err) {
  console.error("Error writing the file synchronously:", err);
}

// Step 4: Appending to Files
// The fs module allows you to append data to a file.

const contentToAppend = "This is some additional content to append to the file.";
fs.appendFile('example.txt', contentToAppend, 'utf8', (err) => {
  if (err) {
    console.error("Error appending to the file:", err);
  } else {
    console.log("Append Successful!");
  }
});

// Step 5: Deleting Files
// The fs module can be used to delete files. 

fs.unlink('newfile.txt', (err) => {
  if (err) {
    console.error("Error deleting the file:", err);
  } else {
    console.log("File Deleted Successfully!");
  }
});
