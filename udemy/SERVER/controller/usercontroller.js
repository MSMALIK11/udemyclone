import User from "../model/signupmodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password) {
    return res
      .status(401)
      .json({ status: false, message: "all fields are required" });
  }
  try {
    const exist = await User.findOne({ email });
    if (exist) {
      return res
        .status(401)
        .json({ status: false, message: "user already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 12);
    console.log("hash password ", hashPassword);

    const user = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      phone: phone,
    });

    const save = await user.save();
    if (save) {
      return res.status(200).json({
        status: true,
        message: "user successfully signup in database",
        data: save,
      });
    } else {
      return res.status(401).json({ status: false, message: "login denied.." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

/*
 *  user Login
 */

export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    res.status(400).json({ message: "email or password required" });
  }
  try {
    const user = await User.findOne({ email });
 

    if (!user) {
      res.json({ message: "invalid email...." });
    }

    const match = await bcrypt.compare(password, user.password);
 
     const token = await user.generateToken();
     const options = {
       expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
       httpOnly: true,
     };


    console.log(token);
    if (match) {
      user.password = undefined;
         return res
           .status(200)
           .cookie("token", token, options)
           .json({ success: true, user, token });
    } else {
      res.status(400).json({ message: "password not match" });
    }
    res.status(200).json({ user: user, token: token });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "internal server error",
      warning: error.message,
    });
  }
};

export const userLogout = async (req, res) => {
  res.clearCookie("jwt");
  return res.json({ message: "signout success" });
};


// get current user 
export const currentUser = async (req, res) => {
  console.log("req user ", req.user);
 
  try {
    const user = await User.findById(req.user._id).select("-password").exec();
    return res.status(200).json({success:true,user});
  } catch (error) {
    console.log("current user not found ", error);
  }
};
