import "./styles/main.scss";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import HomeCard from "./component/HomeCard.jsx";
import SingleCourse from "./component/SingleCourse.jsx";
import { Routes, Route } from "react-router-dom";
import CoursePlayer from "./component/CoursePlayer";
import Home from "./component/Home";
import BannerReuse from "./component/BannerReuse";
import SingleCourseDetails from "./component/TextCourse/SingleCourseDetails";
import HomeBlog from "./component/blog/HomeBlog";
import SinglePost from "./component/blog/SinglePost";

import Profile from "./component/ProfileDashboard/Profile";
import { Provider } from "./component/context";
import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
function App() {
  return (
    <Provider>
      <Navbar />

      <div style={{ paddingTop: "5rem" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/* videos lacture routes */}
          <Route exact path="/course" element={<HomeCard />} />
          <Route exact path="/course/:title" element={<SingleCourse />} />
          <Route
            exact
            path="/course/:title/:classTitle"
            element={<CoursePlayer />}
          />

          {/* text course route  */}
          <Route
            exact
            path="/textcourse/:id"
            element={<SingleCourseDetails />}
          />
          {/* blog routes */}
          <Route exact path="/blog" element={<HomeBlog />} />
          <Route exact path="/blog/:title" element={<SinglePost />} />
          {/* auth route */}
          <Route path="/login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route exact path="/Dashboard/profile" element={<Profile />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
