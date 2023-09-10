
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes')
const app = express();

const port = 3300;

// Middleware to parse incoming request bodies.
app.use(bodyParser.json());

app.use(cors());

app.use(router);

app.use((err, req, res, next) => {
    console.log(err);
});

// Start the server and listen on the specified port.
app.listen(port, () => {
    console.log('Server is running');
});
