import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipes from './data';
import "./RecipeDetails.css"

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  return (
    <div className="container">
      <div className="recipe-details">
        <h2 className="title-recipe">{recipe.title}</h2>
        <p className="description">{recipe.description}</p>
        <div className="row">
            <div className="col-md-3">
            {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.title} className="recipe-picture" />}
          </div>
         
          <div className="col-md-3">
            <div className="ingredients-container">
              <h3 className="ingredients">Ingredients:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className="steps-container">
          <h3 className="steps">Method:</h3>
          <ol className="preparation-steps">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        <br/> 
        
        <Link className="back-to-recipes" to="/">
          Return to Homepage
        </Link>

      
      </div>
    </div>
  );
};;

export default RecipeDetails;