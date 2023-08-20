import axios from "axios";
import { useState } from "react";
import RecipeCard from "./RecipeCard";


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
        <>
            <div className="">RecipeList</div>
            <input
                type="text"
                value={ingredient}
                className="search-input"
                placeholder="write an ingredient"
                onChange={(e) => setIngredient(e.target.value)}></input>

            <button onClick={handleSearch} className="search-button">Search</button>

            <div>
                {recipes.map((recipe) => (<RecipeCard key={recipe.uri} recipe={recipe} />))}
            </div>
            {/* <div>
                <div>The count now is <div>{number}</div> </div>
                <button style={{width: "60px", height: "30px"}} onClick={add}>Add 1</button>
            </div> */}
        </>
    )
}

export default RecipeList;