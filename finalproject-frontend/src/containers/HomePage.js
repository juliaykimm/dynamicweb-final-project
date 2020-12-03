import React from "react";
import HomePageComponent from "../components/HomePageComponent";
import Home from "./Home";

function HomePage({ homeInformation }) {
  return (
    <div>
      <HomePageComponent homeInformation={homeInformation} />
    </div>
  );
}

export default HomePage;
