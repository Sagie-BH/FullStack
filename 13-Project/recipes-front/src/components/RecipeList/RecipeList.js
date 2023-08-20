import axios from "axios"; // Importing axios for HTTP requests.
import { useState } from "react"; // Importing hooks: useState for state management.
import RecipeCard from "../RecipeCard/RecipeCard"; // Importing the RecipeCard component.
import styles from './RecipeList.module.css' // Importing CSS module for styling.

/* 
    RecipeList Component:
    Functionality: Allows users to search for recipes based on an ingredient and displays the resulting recipes.
    Use: Acts as a container for the search feature and lists individual RecipeCard components.
*/
const RecipeList = () => {
    const [ingredient, setIngredient] = useState(''); // State for the ingredient search input.
    const [recipes, setRecipes] = useState([]); // State for the list of recipes.

    // Function to handle the search for recipes based on the ingredient.
    const handleSearch = async () => {
        try {
            // Sending a GET request to fetch recipes based on the ingredient.
            const response = await axios.get(`http://localhost:3300/recipes/${ingredient}`);

            // Updating the recipes state with the fetched recipes.
            setRecipes(response.data);
        } catch (err) {
            console.error("Error getting recipes");
        }
    }

    return (
        <div className={styles.recipeSearchContainer}>
            <h2 className={styles.recipeSearchTitle}>Recipe Search</h2>
            <div className={styles.searchContainer}>
                <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                    className="searchInput"
                    placeholder="Enter ingredient"
                />
                <button onClick={handleSearch} className={styles.searchButton}>Search</button>
            </div>
            <div className={styles.recipeCardContainer}>
                {recipes.map((recipe) => (
                    <RecipeCard recipe={recipe} key={recipe.uri} />
                ))}
            </div>
        </div>
    )
}

export default RecipeList;