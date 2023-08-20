import React, { useEffect } from 'react'

const RecipeCard = ({ recipe }) => {
  const ingredients = recipe.ingredients.map(i => i.text);
  
  useEffect(() => {
    console.log(ingredients);

  }, [ingredients]);

  return (
    <div>
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.label} />
      <p>{ingredients.join(', ')}</p>
      <a href={recipe.uri} target="_blank" rel="noopener noreferrer">View Recipe</a>
    </div>
  )
}

export default RecipeCard