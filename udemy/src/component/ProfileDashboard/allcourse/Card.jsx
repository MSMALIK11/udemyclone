import React from "react";
import img from "../../../images/img-1.jpg";
import "../style/allcourse.scss";
const Card = () => {
  const prog = 40;
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
              style={{ width: `${prog}%`, background: "palevioletred" }}
              ariaValuenow="25"
              ariaValuemin="0"
              ariaValuemax="100"
            >
              {prog}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
