const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const recipesFilePath = path.join(__dirname, 'recipes.json');

const appId = '29c38e73';
const appKey = 'd39ac38d6045736379b1e3f28762cbff';

const router = express.Router();

const findRecipeByLabel = (label, recipes) => {
    return recipes.find(recipe => recipe.label === label);
}

router.get('/recipes/:ingredient', async (req, res) => {
    const ingredient = req.params.ingredient;
    try {
        const response = await axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${appId}&app_key=${appKey}`);
        const recipes = response.data.hits.map(hit => ({
            label: hit.recipe.label,
            image: hit.recipe.image,
            uri: hit.recipe.uri,
            ingredients: hit.recipe.ingredients
        }));
        // Gets recipes if there is a json file
        const allRecipes = fs.existsSync(recipesFilePath) ?
         JSON.parse(fs.readFileSync(recipesFilePath, 'utf8')) : [];

        const recipesToSend = recipes.map(incomingRecipe => {
            const existingRecipe = findRecipeByLabel(incomingRecipe.label, allRecipes);
            if(existingRecipe) {
                incomingRecipe.reviews = existingRecipe.reviews
            } else {
                incomingRecipe.reviews = [];
                allRecipes.push(incomingRecipe);
            }
            return incomingRecipe;
        });

        fs.writeFileSync(recipesFilePath, JSON.stringify(allRecipes, null, 2), 'utf8');

        res.status(200).json(recipesToSend);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/recipes/reviews/:label', (req, res) => {
    const name = req.params.label;
    const { review } = req.body;

    // Check if recipes file exists, create if not
    if (!fs.existsSync(recipesFilePath)) {
        fs.writeFileSync(recipesFilePath, '[]', 'utf8');
    }

    // Read recipes from the file
    const recipes = JSON.parse(fs.readFileSync(recipesFilePath, 'utf8'));

    const recipe = recipes.find(recipe => recipe.label === name);

    if (recipe) {
        recipe.reviews = recipe.reviews || [];
        recipe.reviews.push(review);

        fs.writeFileSync(recipesFilePath, JSON.stringify(recipes, null, 2), 'utf8');

        res.json(recipe.reviews);
    } else {
        res.status(404).json({ error: 'Recipe not found' });
    }

})

module.exports = router;
