import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter your name "],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "enter your email"],
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },

  avatar: {
    type: String,
    default: "i am default image",
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
