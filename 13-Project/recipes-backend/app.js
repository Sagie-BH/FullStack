const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();

const appId = '29c38e73';
const appKey = 'd39ac38d6045736379b1e3f28762cbff';

const port = 3300;

app.use(bodyParser.json());

app.use(cors());

app.get('/recipes/:ingredient', async (req, res) => {
    const ingredient = req.params.ingredient;
    try {
        const response = await axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${appId}&app_key=${appKey}`);
        const recipes = response.data.hits.map(hit =>  ({
            name: hit.recipe.label,
            image: hit.recipe.image,
            uri: hit.recipe.uri,
            ingredients: hit.recipe.ingredients
        }));

        res.status(200).json(recipes);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


app.use((err, req, res, next) => {
    console.log(err);
});


app.listen(port, () => {
    console.log('Server is running');
});