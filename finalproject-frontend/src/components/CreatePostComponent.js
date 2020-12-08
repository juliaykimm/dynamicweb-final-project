import React from "react";

function CreatePostComponent() {
  return (
    <div>
      <h1 className="PageTitles">CREATE A NEW RECIPE!</h1>
      <iframe name="hiddenFrame"></iframe>
      <form
        className="FormStyling"
        action="https://final-project-fall2020-web.herokuapp.com/create/submit"
        method="get"
        target="hiddenFrame"
      >
        <input
          className="FormBoxes"
          type="text"
          name="recipeName"
          placeholder="Recipe name"
        />
        <input
          className="FormBoxes"
          type="text"
          name="recipeAuthor"
          placeholder="Author"
        />
        <input
          className="FormBoxes"
          type="text"
          name="ingredients"
          placeholder="Ingredients"
        />
        <input
          className="FormBoxes"
          type="text"
          name="steps"
          placeholder="Steps"
        />
        <button className="SubmitButton" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostComponent;
