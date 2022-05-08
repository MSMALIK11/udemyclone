import mongoose from "mongoose";
import User from "./signupmodel.js";
const lessionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    
    slug: {
      type: String,
      lowercase: true,
    },
    video_link: {type:String},
  },
  { timestamps: true }
);

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: User },
  imagepreview: { type: String },
  lessons: [lessionSchema],
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
