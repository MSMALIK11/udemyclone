import React from "react";
import "./style/maindescription.scss";
const MainDiscription = () => {
  return (
    <div className="main-description-container">
      <h1 className="description-title">Descrition</h1>
      <p className="w-50 ">
        This is the perfect course to learn{" "}
        <span className="text-bold">ReactJS</span> if you are a beginner. Most
        programmers agree that the best way to learn a language or a technology
        is to build something. Therefore this course will teach you guys
        everything you would need to know in order to build your own awesome
        website.
      </p>
    </div>
  );
};

export default MainDiscription;
