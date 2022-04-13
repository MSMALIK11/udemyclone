import React, { useEffect } from "react";
import "../styles/singleCourse.scss";

import CourseTopRightDetails from "./courseDetails/CourseTopRightDetails";

import { useLocation, useNavigate } from "react-router-dom";
import Description from "./courseDescription/Description";
import { Context } from "./context";
import { useContext } from "react";
import ReactVideoPlayer from "./courseDetails/ReactVideoPlayer";
import CourseByCard from "./courseDetails/CourseByCard";
import MainDiscription from "./courseDescription/MainDiscription";
import CourseStructure from "./courseDetails/CourseStructure";

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
        {/* course free  price card */}
        <CourseByCard />
        <div className="container pb-4">
          <div className="row d-flex">
            <div className="col-sm-12 col-md-12 col-lg-6   order-lg-first order-md-last order-sm-last ">
              {/* <ReactVideoPlayer videoLink={course.lacture[0].link} /> */}
              <CourseTopRightDetails course={course} classTitle={classTitle} />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6  order-lg-last order-md-first  order-sm-first ">
              <div className="d-sm-block d-md-block d-lg-none">
                <ReactVideoPlayer videoLink={course.lacture[0].link} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* course description  */}
      <div className="container mt-5">
        <Description />
        <div className="mt-5">
          <MainDiscription />
        </div>
        <div className="mt-5">
          <CourseStructure />
        </div>
      </div>
    </div>
  );
};

export default SongleCourse;
