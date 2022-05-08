import React from 'react'

const InputBox = ({ handleChange,name,value }) => {

  return (
    <div className="input-box-wraper">
      <label htmlFor="">Course Title *</label>
      <div className="input-box-element">
        <input
          type="text"
          placeholder="enter Course title"
          onChange={handleChange}
          name={name}
          min="1"
          max="60"
        />
        <span
          
          className={` title-lenght-tag ${value > 60 ? "bg-danger" : ""}`}
        >
          <span>{value < 60 ? 200 - value : "0"}</span>
        </span>
      </div>
      {value > 60 && (
        <span className="text-danger text">
          {" "}
          Title must be less than 60 word
        </span>
      )}
    </div>
  );
};

export default InputBox