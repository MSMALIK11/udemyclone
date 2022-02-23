import React from "react";
import "../styles/homecard.scss";
import Category from "./Category";
import CourseCard from "./CourseCard";

import Hero from "./Hero";
const HomeCard = () => {
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-lg-3 d-md-none d-sm-none d-lg-block">
          <Category />
        </div>
        <div className="col-lg-9  col-sm-12">
          <CourseCard />
        </div>
      </div>

      {/* <CourseSlider /> */}
    </div>
  );
};

export default HomeCard;
