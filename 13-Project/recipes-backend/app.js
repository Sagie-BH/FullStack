const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const fs = require('fs');
const path = require('path');


const recipesFilePath = path.join(__dirname, 'recipes.json');

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
        const recipes = response.data.hits.map(hit =>({
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

app.post('/recipes/reviews/:name', (req, res) => {
    const name = req.params.name;
    const { review } = req.body;

    // Check if recipes file exists, create if not
    if (!fs.existsSync(recipesFilePath)) {
        fs.writeFileSync(recipesFilePath, '[]', 'utf8');
    }

    // Read recipes from the file
    const recipes = JSON.parse(fs.readFileSync(recipesFilePath, 'utf8'));

    const recipe = recipes.find(recipe => recipe.name === name);

    if(recipe) {
        recipe.reviews = [...recipe.reviews] || [];
        const newReview = {
            recipeId: recipe.id,
            review
        };
        recipe.reviews.push(newReview);

        fs.writeFileSync(recipesFilePath, JSON.stringify(recipes, null, 2), 'utf8');

        res.json(recipe.reviews);
    } else {
        res.status(404).json({ error: 'Recipe not found' });
    }
})


app.use((err, req, res, next) => {
    console.log(err);
});


app.listen(port, () => {
    console.log('Server is running');
});