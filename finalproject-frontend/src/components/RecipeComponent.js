import React, { useState, useEffect } from "react";

import axios from "axios";

function RecipeComponent() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://final-project-fall2020-web.herokuapp.com/`)
      .then(function (response) {
        const data = response.data;
        setAPIData(data);
      })
      .catch(function (error) {
        console.warn("error", error);
      });
  }, []);

  return (
    <div>
      {APIData.map((APIData, i) => (
        <div key={i}>
          <h1 className="PageTitles"> {APIData.recipeName}</h1>
          <p className="SubPageTitles">By: {APIData.recipeAuthor}</p>
          <ul>
            ingredients:
            <li>{APIData.ingredients}</li>
          </ul>
          <ul>
            steps:
            <li>{APIData.steps}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeComponent;
