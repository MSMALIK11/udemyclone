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
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          card.map((val,i) => (
            <div className="col-sm-6 col-md-6 col-lg-3" key={i}>
              <Card />
            </div>
          ))
        )}
      </div>
      
    </>
  );
};

export default AllCourse;
