const express = require('express');
const app = express();
const path = require('path');

// Set the static folder to serve the HTML files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file when the user accesses the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
 
// Serve the about.html file when the user accesses /about
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Serve the contact.html file when the user accesses /contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
