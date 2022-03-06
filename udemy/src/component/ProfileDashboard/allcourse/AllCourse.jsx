import React from "react";
import Card from "./Card";

const AllCourse = () => {
  const card = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {/* <div className="row">
        <div className="col-sm-4 col-md-4">
          <h1>left side bar here</h1>
          <div className="account-sidebar"></div>
        </div>
        <div className="col-sm-8 col-md-8"> */}
      <div className="row">
        {!card ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          card.map((val) => (
            <div className="col-sm-6 col-md-6 col-lg-3">
              <Card />
            </div>
          ))
        )}
      </div>
      <nav aria-label="Page navigation example ">
        <ul class="pagination  ">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default AllCourse;
