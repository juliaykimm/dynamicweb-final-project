import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000`)
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
      <h1>recipes</h1>
      {APIData.map((APIData, i) => (
        <div key={i}>
          <p>{APIData.recipeName}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
