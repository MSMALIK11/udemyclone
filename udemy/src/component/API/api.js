import axios from "axios";

const URL = "http://localhost:8000";

export const userSignup = async (user) => {

  try {
    return await axios.post(`${URL}/api/signup`, user);
  } catch (error) {
    console.log("error while calling userSignup API", error);
  }
};

export const userLogin = async (user) => {
  console.log(user);
  try {
    const res = await axios.post(`${URL}/api/login`, user);
    return res.data;
  } catch (error) {
    console.log("error while calling login api ", error.message);
  }
};
// user logout
export const userLogout = async () => {
  const res = await axios.get(`${URL}/api/logout`);
  return res;
};

export const getUserInfo = async (token) => {
  try {
    const res = await axios.get(`${URL}/api/profile`, {
   headers:{
     token:token
   }
     
    });
    return res.data;
  } catch (error) {
    console.log("error while getting user informations", error);
  }
};



