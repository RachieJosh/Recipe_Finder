import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState("");

  const fetchRecipes = async (query) => {
    setError("");
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        setError("No recipes found.");
      }
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center">Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onClick={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
};

export default App;
