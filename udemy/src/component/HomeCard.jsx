import React from "react";
import "../styles/homecard.scss";
import Category from "./Category";
import CourseCard from "./CourseCard";

const HomeCard = () => {
  return (
    <div className="card-header">
      <div className="row">
        <div className="col-lg-3 course-left-category">
          {/* <Category /> */}
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
