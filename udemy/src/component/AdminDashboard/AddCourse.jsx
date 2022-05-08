import React, { useState } from "react";
import InputBox from "../common/InputBox";
import InputTextArea from "../common/InputTextArea";
import ImagePreview from "./ImagePreview";

const AddCourse = () => {
  const [preview, setPreview] = useState("");
const[course,setCourse]=useState({
  title:'',
description:''
});

  const handleImage = (e) => {
    if (e.target.files !== 0) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleChange=(e)=>{
    setCourse({...course,[e.target.name]:e.target.value})

  }
  
  return (
    <div className="container  create-course-container shadow p-4">
      <h1>Add new Course </h1>

      <form action="">
        <InputBox
          handleChange={handleChange}
          name="title"
          value={course.title.length}
        />
        <InputTextArea handleChange={handleChange} />
      </form>

      <ImagePreview handleImage={handleImage} preview={preview} />
    </div>
  );
};

export default AddCourse;
