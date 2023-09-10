
    const express = require('express');
    const axios = require('axios');
    const fs = require('fs');
    const path = require('path');
    const recipesFilePath = path.join(__dirname, 'recipes.json');
    
    const appId = process.env.APP_ID;
    const appKey = process.env.APP_KEY;
    
    const recipesRouter = express.Router();
    
    // Helper function to find a recipe by its label.
    const findRecipeByLabel = (label, recipes) => {
        return recipes.find(recipe => recipe.label === label);
    }
    
    // GET route to fetch recipes based on an ingredient.
    recipesRouter.get('/:ingredient', async (req, res) => {
        const ingredient = req.params.ingredient;
        try {
            // Fetch recipes from the Edamam API based on the ingredient.
            const response = await axios.get(`https://api.edamam.com/search?q=${ingredient}&app_id=${appId}&app_key=${appKey}`);

            const recipes = response.data.hits.map(hit => ({
                label: hit.recipe.label,
                image: hit.recipe.image,
                uri: hit.recipe.uri,
                ingredients: hit.recipe.ingredients
            }));
    
            // Check if there's a local recipes JSON file and read from it. if not initializes an empty array
            const allRecipes = fs.existsSync(recipesFilePath) ?
             JSON.parse(fs.readFileSync(recipesFilePath, 'utf8')) : [];
    
            // Merge incoming recipes with existing ones, adding reviews if they exist.
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
    
            // Save the merged list back to the JSON file.
            fs.writeFileSync(recipesFilePath, JSON.stringify(allRecipes, null, 2), 'utf8');
    
            // Send the merged list as the response.
            res.status(200).json(recipesToSend);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });
    
    // POST route to add reviews to a specific recipe.
    recipesRouter.post('/reviews/:label', (req, res) => {
        const name = req.params.label;
        const { review } = req.body;
    
        // Check if the recipes JSON file exists, if not, create it.
        if (!fs.existsSync(recipesFilePath)) {
            fs.writeFileSync(recipesFilePath, '[]', 'utf8');
        }
    
        // Read existing recipes from the JSON file.
        const recipes = JSON.parse(fs.readFileSync(recipesFilePath, 'utf8'));
    
        // Find the recipe by its label.
        const recipe = recipes.find(recipe => recipe.label === name);
    
        // If the recipe exists, add the review.
        if (recipe) {
            recipe.reviews = recipe.reviews || [];
            recipe.reviews.push(review);
    
            // Save the updated recipes list back to the JSON file.
            fs.writeFileSync(recipesFilePath, JSON.stringify(recipes, null, 2), 'utf8');
    
            // Send the updated reviews as the response.
            res.json(recipe.reviews);
        } else {
            res.status(404).json({ error: 'Recipe not found' });
        }
    })
    
    module.exports = recipesRouter;
    