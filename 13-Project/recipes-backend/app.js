const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

const port = 3300;

app.use(bodyParser.json());

app.use(cors());

app.use(recipeRoutes);

app.use((err, req, res, next) => {
    console.log(err);
});

app.listen(port, () => {
    console.log('Server is running');
});