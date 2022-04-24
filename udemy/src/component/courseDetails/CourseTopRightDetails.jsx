import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faUser,

} from "@fortawesome/free-solid-svg-icons";

import CustomButton from "./CustomButton";
const CourseTopRightDetails = ({ course, classTitle }) => {

  return (
    <div>
      <div className="course-baner">
        <div className="container  details">
          <h4 className="course-title mt-5 mb-4 text-capitalize">
            {course.title}
          </h4>

          <div className="rating">
            <span className="me-3 text-light ">Rating's</span>
            <span className="rating-box"> 4.9 </span>

            <span>
              <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
            </span>
            <span>
              <FontAwesomeIcon icon={faStar} className="text-warning ms-2" />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faStarHalfAlt}
                className="text-warning ms-2"
              />
            </span>

            <span className="ms-4 text-light">
              <FontAwesomeIcon icon={faUser} className="text-light me-1" /> 199
              Enrolled
            </span>
          </div>
          <h5 className="mt-4 text-uppercase text-light">
            created by maximillion
          </h5>
          <h5 className="text-muted">Last update 4/12/2022</h5>

          <div className="enroll sm-d-block md-d-none lg-d-none   sm-justify-content-center">
            <CustomButton title="Free" />
            {/* <button
              onClick={() =>
                navigate(`/course/${course.title}/${classTitle[0]}`, {
                  state: { courses: course },
                })
              }
              className="start-btn mt-4 start-course shadow "
            >
              By now
            </button>
            <button className=" start-btn ms-4  bg-danger mt-md-4 mt-sm-4 shadow">
              <span>
                <i className="bi bi-cart me-3"></i>
              </span>
              Add to cart
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTopRightDetails;
