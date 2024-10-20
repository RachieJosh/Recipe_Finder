import React from "react";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return null;

  const ingredients = Object.keys(recipe)
    .filter((key) => key.startsWith("strIngredient") && recipe[key])
    .map((key) => `${recipe[key]} - ${recipe[`strMeasure${key.slice(13)}`]}`);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-60 object-cover"
      />
      <h3 className="font-semibold mt-4">Ingredients</h3>
      <ul className="list-disc ml-5">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="font-semibold mt-4">Instructions:</h3>
      <p>{recipe.strInstructions}</p>
      {recipe.strYoutube && (
        <div className="mt-4">
          <h3 className="font-semibold">Watch on YouTube:</h3>
          <iframe
            width="100%"
            height="315"
            src={recipe.strYoutube.replace("watch?v=", "embed/")}
            title="YouTube video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      )}
      <a
        href={recipe.strSource}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-4 block"
      ></a>
    </div>
  );
};

export default RecipeDetails;
