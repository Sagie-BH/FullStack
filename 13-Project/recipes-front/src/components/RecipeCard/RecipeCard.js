import { useEffect, useState } from 'react';
import styles from './RecipeCard.module.css';
import axios from 'axios';

const RecipeCard = ({ recipe }) => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState(recipe.reviews || []);


  const ingredients = recipe.ingredients.map(i => i.text);

  const handleReviewSubmit = async () => {
    try {
      if (review.trim() === ""){
        console.log('No review added')
        return;
      } 
      const response = await axios.post(`'
      http://localhost:3300/recipes/reviews/${recipe.label}`, { review });

      setReviews(...reviews, response.data.review);
      setReview('');

    } catch(err) {
      console.error("Error submitting review:", err);
    }
  }

  return (
    <div className={styles.recipeCard}>
      <div className={styles.details}>
        <h3 className={styles.recipeLabel}>{recipe.label}</h3>
        <img
          src={recipe.image}
          alt={recipe.label}
          className={styles.recipeImg}
        />
        <a
          className={styles.recipeUrl}
          href={recipe.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Recipe
        </a>
        <p className={styles.recipeIngredients}>
          {ingredients.join(", ")}
        </p>
      </div>
      <div>
        <div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Write a review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className={styles.input}
            />
            <button className={styles.button} onClick={handleReviewSubmit}>
              Submit
            </button>
          </div>
        </div>
        <div>
          <h4>Reviews:</h4>
          <ul>
            {reviews.map((reviewObj, index) => (
              <li key={index}>{reviewObj.review}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard