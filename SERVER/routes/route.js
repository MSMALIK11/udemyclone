import express from "express";
import {
  signup,
  userLogin,
  userLogout,
  currentUser,
} from "../controller/usercontroller.js";
import { requireSignin } from "../middleware/index.js";

const router = express.Router();

router.route("/signup").post(signup).get(userLogin);
router.route("/login").post(userLogin);
router.route("/logout").get(userLogout);
router.route("/profile").get(currentUser);

export default router;
