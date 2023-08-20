import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import styles from './RecipeList.module.css'

const RecipeList = () => {
    const [ingredient, setIngredient] = useState('');
    const [recipes, setRecipes] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3300/recipes/${ingredient}`);

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