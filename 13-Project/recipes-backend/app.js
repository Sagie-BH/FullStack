/*
    Purpose: Initializes the server, sets up middleware, and listens on a specified port.
    Functionality:

    Uses express for server creation and routing.
    Uses body-parser to parse incoming request bodies.
    Uses cors to enable Cross-Origin Resource Sharing.
    Imports and uses recipeRoutes for handling recipe-related routes.
*/

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

const port = 3300;

// Middleware to parse incoming request bodies.
app.use(bodyParser.json());

// Middleware to enable Cross-Origin Resource Sharing.
app.use(cors());

// Use the recipe routes for handling recipe-related endpoints.
app.use(recipeRoutes);

// Middleware to handle errors.
app.use((err, req, res, next) => {
    console.log(err);
});

// Start the server and listen on the specified port.
app.listen(port, () => {
    console.log('Server is running');
});
