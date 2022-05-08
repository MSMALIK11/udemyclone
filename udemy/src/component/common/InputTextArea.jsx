import React from 'react'

const InputTextArea = ({ handleChange }) => {
  return (
    <div className="input-box-wraper">
      <label>Description</label>

      <textarea className="text-area" onChange={handleChange} />
    </div>
  );
};

export default InputTextArea