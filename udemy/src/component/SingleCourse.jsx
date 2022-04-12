import React, { useEffect } from "react";
import "../styles/singleCourse.scss";

import CourseTopRightDetails from "./courseDetails/CourseTopRightDetails";

import { useLocation, useNavigate } from "react-router-dom";
import Description from "./courseDescription/Description";
import { Context } from "./context";
import { useContext } from "react";
import ReactVideoPlayer from "./courseDetails/ReactVideoPlayer";
import CourseByCard from "./courseDetails/CourseByCard";

const SongleCourse = () => {
  const { state, dispatch } = useContext(Context);

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
    <div className="main-container mt-4 ">
      <div className="bg-dark position-relative">
        <CourseByCard />
        <div className="container pb-4">
          <div className="row d-flex">
            <div className="col-sm-12 col-md-12 col-lg-6   order-lg-first order-md-last order-sm-last ">
              {/* <ReactVideoPlayer videoLink={course.lacture[0].link} /> */}
              <CourseTopRightDetails course={course} classTitle={classTitle} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6  order-lg-last order-md-first  order-sm-first ">
              <ReactVideoPlayer videoLink={course.lacture[0].link} />
            </div>
          </div>
        </div>
      </div>

      {/* course description  */}
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
          <h1>Course Content</h1>
        </div>
      </div>
    </div>
  );
};

export default SongleCourse;
