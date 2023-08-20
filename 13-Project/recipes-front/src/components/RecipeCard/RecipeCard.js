import { useState } from 'react';
/*
useState is a Hook in React that lets you add state management to functional components. 
State in React represents any data that might change over time and affects what is rendered on the screen. 
By using useState, you can declare a state variable and a function to update it. 

For example:
const [count, setCount] = useState(0);

Here, `count` is the state variable initialized with a value of 0, and `setCount` is the function to update it.

When you update the state using the provided function (like setCount), React schedules a re-render of the component. 
This means that the UI will automatically reflect the changes in the state. This reactivity is one of the core features 
of React, ensuring the UI is always in sync with the underlying data.

Without using state (like useState), changes to variables won't trigger a re-render, and thus the UI won't update to reflect those changes.
*/
import styles from './RecipeCard.module.css';
/*
CSS Modules is a technique in which you write CSS in a way that's scoped to a single component. 
When you import styles from a `.module.css` file, you get an object with class names that are locally scoped to the component.

Advantages:
1. **Local Scope**: Each CSS class is scoped to the component, preventing global side effects. This means you can have 
   the same class name in different module files without worrying about clashes.
2. **Eliminates Naming Collisions**: Since class names are locally scoped, you don't have to worry about naming collisions 
   in the global namespace.
3. **Better Code Organization**: It's clear which styles are used by which component, making the codebase easier to maintain.
4. **Performance**: Only the styles that are used by a component are loaded, rather than loading a large global CSS file. 
   This can lead to faster load times.

By using CSS Modules, you avoid the pitfalls of global CSS, where styles from one part of an application might inadvertently 
affect another part. Instead, each component gets its own set of styles, ensuring that components are truly encapsulated.
*/
import axios from 'axios';

/* 
  RecipeCard Component:
  Functionality: Showcases individual recipe details, allows users to submit and view reviews.
  Use: Represents a single recipe, displaying its information and associated reviews.
*/
const RecipeCard = ({ recipe }) => {
  const [review, setReview] = useState(""); // State for the new review input.
  const [reviews, setReviews] = useState(recipe.reviews || []); // State for the list of reviews.

  // Mapping over the ingredients to get a list of ingredient text for the display.
  const ingredients = recipe.ingredients.map(i => i.text);

  // Function to handle the submission of a review.
  const handleReviewSubmit = async () => {
    try {
      if (review.trim() === ""){
        console.log('No review added');
        return;
      } 
      // Sending a POST request to add a review for the given recipe and getting back the updated review list.
      const response = await axios.post(`http://localhost:3300/recipes/reviews/${recipe.label}`, { review });

      // Updating the reviews state with the new list of reviews.
      setReviews(response.data);
      setReview(''); // Clearing the review input, to make room for new input

    } catch(err) {
      console.error("Error submitting review:", err);
    }
  }

  // Rendering the RecipeCard component.
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
              <li key={index}>{reviewObj}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard