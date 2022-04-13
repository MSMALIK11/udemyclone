import React from "react";
import "./style/description.scss";
import avatar from "../../images/avatar-2.jpg";
const SubscribeAuthor = () => {
  return (
    <>
      <div className="author container mt-5">
        <div className="author-avatar">
          <div className="img shadow">
            <img src={avatar} alt="" />
          </div>
          <div className="author-info">
            <h1 className="author-name">John Smith</h1>
            <button className=" subscribe-btn shadow">Subscribe</button>
          </div>
        </div>
        {/* <div className="author-like">
          <div className="box">
            <i className="bi bi-eye"></i>
            <h5>1452</h5>
          </div>
          <div className="box">
            <i className="bi bi-hand-thumbs-up"></i>
            <h5>50</h5>
          </div>
          <div className="box">
            <i className="bi bi-hand-thumbs-down"></i>
            <h5>7</h5>
          </div>
          <div className="box">
            <i className="bi bi-share"></i>
            <h5>20</h5>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default SubscribeAuthor;
