import React from "react";

const RecipeCard = ({ recipe, onClick, onSelect }) => {
  // Fallback to use `onClick` if `onSelect` isn't provided
  const handleClick = () => {
    if (onSelect) {
      onSelect(recipe); // Call onSelect with the recipe
    } else if (onClick) {
      onClick(); // Call onClick if no recipe is needed
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border p-4 m-2 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <h3 className="font-bold mt-2">{recipe.strMeal}</h3>
      <p className="text-gray-500">Category: {recipe.strCategory}</p>
      <p className="text-gray-500">Cuisine: {recipe.strArea}</p>
    </div>
  );
};

export default RecipeCard;
