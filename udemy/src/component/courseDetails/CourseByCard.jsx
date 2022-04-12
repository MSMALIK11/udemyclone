import React from "react";
import ReactVideoPlayer from "./ReactVideoPlayer";
const CourseByCard = () => {
  return (
    <>
      <div className="course-buy-wraper">
        <div className="tutorial-video">
          <h1>video</h1>
        </div>
        <div className="course-buy-card-details">
          <h4>Free</h4>
          <button className="btn btn-primary start-your-course-btn">
            Start Your Course
          </button>
          <div className="course-buy-content">
            <h2>course content</h2>
            <ul>
              <li>
                <span>icon</span> 1 hour+ on-demand video content
              </li>
              <li>
                <span>icon</span> Full Time Access
              </li>
              <li>
                <span>icon</span> certificate of completion
              </li>
            </ul>
            <hr />
            {/* secure payment  component goese here */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseByCard;
