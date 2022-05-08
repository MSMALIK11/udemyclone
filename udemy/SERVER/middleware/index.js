import  jwt from "jsonwebtoken";
import User from "../model/signupmodel.js";



export const isAuthenticated = async(req,res,next)=>{
  try {
    const token=req.headers.token; 
    // const {token} =req.cookies;
console.log('token',token)
    if(!token){
      return res.status(401).json({message:'Login First'})
    }
    const decode=await jwt.verify(token,process.env.JWT_SECRET)
    console.log('decode',decode);
    req.user=await User.findById(decode._id)
next();

  } catch (error) {
    
    return res.status(500).json({message:error.message})
  }
}