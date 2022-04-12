import React from "react";
import { useState, useContext } from "react";

import { Context } from "../context/index.js";
import "./style/profile.scss";
import avatar from "./images/avatar.png";
import img1 from "./images/p-1.svg";
import img2 from "./images/p-2.svg";
import Mylearning from "./Mylearning.jsx";

const Profile = () => {
  const { state } = useContext(Context);
  const { user } = state.user;

  return (
    <>
      <div className="mt-4 user-profile-wraper">
        <div className="user-profile">
          <div className="user-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="user-details">
            {user !== null && (
              <h2 className="text-capitalize"> MR. {user.name}</h2>
            )}
            <h5>Web Designer</h5>
          </div>
        </div>
        <div className="container top-box-container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="shadow shadow-box">
                <div className="left">
                  <h1>Total Purchase Courses</h1>
                  <h3>15</h3>
                  <div className="new">
                    <h5>new 5</h5>
                  </div>
                </div>
                <div className="right-img">
                  <img src={img1} alt="sales" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="shadow shadow-box">
                <div className="left">
                  <h1>Total Instructor Subscribing</h1>
                  <h3>15</h3>
                  <div className="new">
                    <h5 className="new-2">new 5</h5>
                  </div>
                </div>
                <div className="right-img">
                  <img src={img2} alt="sales" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mylearning />
    </>
  );
};

export default Profile;
