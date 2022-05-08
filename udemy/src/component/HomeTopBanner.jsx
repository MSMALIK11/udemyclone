import React from "react";
import "../styles/banner.scss";
import HomeCard from "./HomeCard";
import HomeTabOption from "./HomeTabOption";

const HomeTopBanner = () => {
  return (
    <div className="banner-main card">
      <div className="banner  container">
        <div className="banner-heading">
          <span className="heading">BECOME A FULL STACK DEVELOPER </span>
        </div>
        <button className="banner-btn">DISCOVER NOW</button>
      </div>

      <div className="banner-reuse">
        <h1>WEB TECHNOLOGY </h1>
        {/* <HomeTabOption /> */}
        <HomeCard />
      </div>
    </div>
  );
};

export default HomeTopBanner;
