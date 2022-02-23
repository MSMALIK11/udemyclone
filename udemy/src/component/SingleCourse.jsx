import React, { useEffect } from "react";
import "../styles/singleCourse.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faUser,
  faCheckCircle,
  faDotCircle,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import ReactPlayer from "react-player";

import { useLocation, useNavigate } from "react-router-dom";
import Description from "./courseDescription/Description";
import { Context } from "./context";
import { useContext } from "react";

const SongleCourse = () => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const course = location.state;
  console.log(location.state);
  useEffect(() => {
    dispatch({
      type: "GET_COURSE",
      payload: course,
    });
  }, []);
  useEffect(() => {
    window.localStorage.setItem("courseList", JSON.stringify(course));
  }, []);

  const classTitle = course.lacture.map((session) => session.title);

  return (
    <div className="main-container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="player-wraper pt-5">
            <ReactPlayer
              url={course.lacture[0].link}
              className="react-pl"
              width="100%"
              height="40vh"
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="course-baner">
            <div className="container  details">
              <h4 className="course-title my-4">{course.title}</h4>
              <p className="my-4">A Quick and Easy Intro into MERN STACK</p>

              <div className="rating">
                <span className="me-3">
                  <mark>free tutorials</mark>
                </span>
                <span className="rating-box"> 4.9 </span>

                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning ms-2"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning ms-2"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning ms-2"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-warning ms-2"
                  />
                </span>
                <span>
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    className="text-warning ms-2"
                  />
                </span>

                <span className="ms-4 text-dark">
                  <FontAwesomeIcon icon={faUser} className="text-dark me-1" />{" "}
                  199 Enrolled
                </span>
              </div>
              <h5 className="mt-4 text-uppercase">created by maximillion</h5>
              <h5>Last update 9/2021</h5>

              <div className="enroll ">
                <button
                  // to={{
                  //   pathname: `/course/${course.title}/${classTitle[0]}`,
                  //   state: {
                  //     name: "msmalik",
                  //   },
                  // }}
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* right box  */}

      {/* description  */}

      {/* <div className="session">
        <ContentTab course={course} />
      </div> */}
      <div className="container-fluid">
        <Description />
      </div>

      <div className="main-content mt-4">
        <div className="container">
          <div className="description">
            <h1 className="des-title  text-uppercase">description</h1>
            <p className="des-para w-50 mt-4">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat
            </p>
          </div>
          <div className="features text-capitalize">
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success me-2"
                />{" "}
              </span>{" "}
              <span className="text-grey">setting up the environment</span>
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success me-2"
                />
              </span>{" "}
              <span>advanced HTML practice</span>
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success me-2"
                />
              </span>{" "}
              <span>build portfolio website</span>
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success me-2"
                />
              </span>{" "}
              <span>responsive design </span>
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success me-2"
                />
              </span>{" "}
              <span>understand HTML </span>
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success me-2"
                />
              </span>{" "}
              <span>code HTML</span>
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success me-2"
                />
              </span>{" "}
              <span>start building beautiful websites</span>
            </h2>
          </div>
          <div className="requirement mt-5 text-capitalize">
            <h1>Requirements</h1>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="text-success me-2 "
                />
              </span>
              <span>Any computer will work: Windows, macOS or Linux</span>{" "}
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="text-success me-2"
                />
              </span>
              <span>Basic programming HTML and CSS.</span>{" "}
            </h2>
            <h2>
              <span>
                <FontAwesomeIcon
                  icon={faDotCircle}
                  className="text-success me-2"
                />
              </span>
              <span>Basic/Minimal understanding of JavaScrip</span>{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongleCourse;
