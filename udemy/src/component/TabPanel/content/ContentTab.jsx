import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./content.scss";
import { NavLink } from "react-router-dom";

const ContentTab = ({ course, setLink }) => {
  // console.log('tab course',course);

  return (
    <div className="shadow con-wraper">
      <h4>All Lacture (101)</h4>

      {course.lacture.map((session, index) => {
        return (
          <div className="con-item " key={index}>
            <NavLink
              to={{
                pathname: `/course/${course.title}/${session.title}`,
                state: {
                  course,
                  session,
                  index,
                },
              }}
              key={index}
              className="nav-link text-dark text-capitalize"
            >
              <h4>
                <span className="me-3">
                  <i className="bi bi-check-circle "></i>
                </span>
                {session.title}
              </h4>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default ContentTab;
