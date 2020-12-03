import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://mysterious-atoll-42977.herokuapp.com/`)
      .then(function (response) {
        const data = response.data;
        setAPIData(data);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ APIData });

  return (
    <div>
      <h1 className="PageTitles">FIND RECIPES:</h1>
      {APIData.map((APIData, i) => (
        <div className="recipes" key={i}>
          <p>{APIData.recipeName}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
