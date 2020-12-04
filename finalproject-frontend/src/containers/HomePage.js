import React from "react";
import HomePageComponent from "../components/HomePageComponent";

function HomePage({ homeInformation }) {
  return (
    <div>
      <HomePageComponent homeInformation={homeInformation} />
    </div>
  );
}

export default HomePage;
