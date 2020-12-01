import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:4000`)
      .then(function (response) {
        if (response.data) {
          setAPIData(response.data);
        }
      })
      .catch(function (error) {
        console.log("error", error);
      });
  }, []);

  console.log({ APIData });
  return (
    <div>
      <h1>recipes</h1>
    </div>
  );
}

export default Home;
