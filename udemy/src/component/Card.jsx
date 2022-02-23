import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Context } from "./context";
import content from "./videoscontent";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [data, setCourseList] = useState([]);
  const { state, dispatch } = useContext(Context);

  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch({
  //     type: "GET_COURSE",
  //     payload: content,
  //   });
  // }, []);
  // useEffect(() => {
  //   window.localStorage.setItem("courseList", JSON.stringify(content));
  // }, []);

  return (
    <>
      <div className="heading-wraper  mt-5 ms-4">
        {/* <div className="wraper">
          <h1 className="text-capitalize">web development </h1>
          <p>
            choose from +10.000 courses with new additions published every
            months
          </p>
        </div> */}
        {/* trending component */}
        {/* <div className="wraper">
          <div class="dropdown">
            <button
              class="btn  dropdown-toggle me-5"
              type="button"
              title="Trending"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Trending
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-course" href="#">
                  Newest
                </a>
              </li>
              <li>
                <a class="dropdown-course" href="#">
                  Populer
                </a>
              </li>
              <li>
                <a class="dropdown-course" href="#">
                  Free
                </a>
              </li>
              <li>
                <a class="dropdown-course" href="#">
                  Premium
                </a>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      {data === null ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {content.courses.map((course, index) => {
            return (
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                onClick={() =>
                  navigate(`/course/${course.title}`, {
                    state: course,
                    index: index,
                  })
                }
              >
                <div className="card my-4 rounded shadow v-course">
                  <img src={course.image} className="card-img-top" />
                  <p className="views">143k views</p>
                  <div className="best-seller">
                    <p>Best seller</p>
                  </div>
                  <div className="card-body p-4">
                    <h3 className="card-title">
                      {course.title.slice(0, 53) + "..."}
                    </h3>

                    <h4 className="card-author"> by {course.author}</h4>
                    <h3 className="card-duration">
                      <span className="hour">{course.duritation} .</span>
                      <span>{course.lactures}</span>
                    </h3>
                    <h3 className="card-text card-price">
                      <span className="free">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                      </span>
                      <span className="bold">{course.price}</span>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Card;
