import React from "react";
import img from "../../../images/img-1.jpg";
import "../style/allcourse.scss";
const Card = () => {
  const min = 10;
  const max = 100;
  const prog = min + Math.random() * (max - min);

  return (
    <>
      <div className="  my-4 all-course-cards">
        <div className="course-img">
          <img src={img} alt="" />
          <span className="start-icon">
            <span className="icon">
              <i className="bi bi-play-circle-fill "></i>
            </span>
          </span>
        </div>
        <div className="card-details p-4">
          <h5>Frond End Development Ultimate Course 2022</h5>
          <hr />

          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${prog}%` }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {Math.ceil(prog)} %
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
