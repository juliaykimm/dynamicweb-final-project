import React from "react";
import RecipeComponent from "../components/RecipeComponent";

function Recipe({ recipeInformation }) {
  return (
    <div>
      <RecipeComponent recipeInformation={recipeInformation} />
    </div>
  );
}

export default Recipe;
