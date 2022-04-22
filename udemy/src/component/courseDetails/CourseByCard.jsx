import React from "react";
import ReactVideoPlayer from "./ReactVideoPlayer";
import Securepayment from "./Securepayment";
import { useNavigate } from "react-router-dom";
const CourseByCard = ({ course, classTitle }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="course-buy-container ">
        <div className="tutorial-video">
          <h1 className="">video</h1>
        </div>
        <div className="course-buy-wraper">
          <div className="course-buy-card-details">
            <h4>Free</h4>
            <button
              className="btn btn-primary start-your-course-btn"
              onClick={() =>
                navigate(`/course/${course.title}/${classTitle[0]}`, {
                  state: { courses: course },
                })
              }
            >
              Start Your Course
            </button>
            <div className="course-buy-content">
              <h2>course content</h2>
              <ul>
                <li>
                  <span>
                    <i className="bi-check-circle-fill "></i>
                  </span>
                  1 hour+ on-demand video content
                </li>
                <li>
                  <span>
                    {" "}
                    <i className="bi-check-circle-fill "></i>
                  </span>{" "}
                  Full Time Access
                </li>
                <li>
                  <span>
                    <i className="bi-check-circle-fill "></i>
                  </span>{" "}
                  certificate of completion
                </li>
              </ul>
              <hr />
              {/* secure payment  component goese here */}
              <Securepayment />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseByCard;
