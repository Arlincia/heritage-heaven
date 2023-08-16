import React from 'react';
import { Link } from 'react-router-dom';
import recipes from './data';
import "./RecipeList.css"


const RecipeList = () => {
  return (
    <div className='head'>
      <br/>
        <div className='about-us'><h2 >About Us</h2>
        <p>TasteBuds from South Africa is a web app made by Arlincia in hopes that 
            our South African heritage can reach international heights and be celebrated around the world.
            We want our South African heritage to be tasted and yes! we mean literally.
            We set up this recipe page for everyone who is keen on exploring what we prepare in our South African 
            kitchen in theirs.</p>
            </div>     
        <br/><br/><br/>
      <div className="card-deck">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
           
            <div className="card-body">
              <h3 className="card-title">{recipe.title}</h3>
              <p className="card-text">{recipe.description}</p>
              

                 <img
               src={recipe.imageUrl}
              className="card-img"
             alt={recipe.title}/>
              </div>

              <Link to={`/recipe/${recipe.id}`} className="go-to-recipe">
                Explore full recipe...
              </Link>
            </div>
           
        ))}
      </div>
       <footer><p>Coded in React by Arlincia</p></footer>
    </div>
  );
};

export default RecipeList;