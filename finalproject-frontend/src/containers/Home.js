import React, { useState, useEffect } from "react";

import axios from "axios";

function Home() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://final-project-fall2020-web.herokuapp.com/`)
      .then(function (response) {
        const data = response.data;
        setAPIData(data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <h1 className="PageTitles">FIND RECIPES:</h1>
      {APIData.map((APIData, i) => (
        <div className="recipes" key={i}>
          <a href="/">{APIData.recipeName}</a>
        </div>
      ))}
    </div>
  );
}

export default Home;
