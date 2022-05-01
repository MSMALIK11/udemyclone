import "./styles/main.scss";
import Navbar from "./component/Navbar";

import HomeCard from "./component/HomeCard.jsx";
import SingleCourse from "./component/SingleCourse.jsx";
import { Routes, Route } from "react-router-dom";
import CoursePlayer from "./component/CoursePlayer";

import SingleCourseDetails from "./component/TextCourse/SingleCourseDetails";
import HomeBlog from "./component/blog/HomeBlog";
import SinglePost from "./component/blog/SinglePost";

import Profile from "./component/ProfileDashboard/Profile";
import { Provider } from "./component/context";
import Login from "./component/Auth/Login";
import Signup from "./component/Auth/Signup";
import { Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./component/ProfileDashboard/Dashboard";
import Sidebar from "./component/ProfileDashboard/Sidebar";
import Mylearning from "./component/ProfileDashboard/Mylearning";
function App() {
  const user = "login";

  return (
    <Provider>
      <Navbar />

      <div style={{ paddingTop: "5rem" }}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />

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
          {/* <Route
            exact
            path="/Dashboard/profile"
            element={user === "login" ? <Profile /> : <Navigate to="/" />}
          /> */}
          {/* student  dashboard route  */}
          <Route path="/admin" element={<Sidebar />}>
            <Route
              exact
              path="/admin"
              element={<Navigate replace to="profile" />}
            />
            <Route exact path="profile" element={<Profile />} />
            <Route exact path="courses" element={<Mylearning />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
