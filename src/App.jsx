import React from 'react';
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';




const App = () => {
  return (
    <Router>
      <div>
        <h1>TasteBuds from South Africa</h1>
        <hr/>
        <Routes>
          <Route exact path="/" element={<RecipeList /> }/>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
