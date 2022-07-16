import { Routes, Route, useNavigate } from "react-router-dom";
import { React, useState, useEffect, Fragment } from "react";
import "./App.css";
import Home from "./pages/Home.js";
import Fsd from "./pages/Fsd.js";
import Ds from "./pages/Ds.js";
import Unauthorized from "./pages/Unauthorized.js";
import Login from "./pages/Login.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { auth, db } from "./firebase-config";

import Local from "./helpers/Local";
import AuthenticatedRoute from "./helpers/AuthenticatedRoute";
import AttendanceList from "./pages/AttendanceList";
import Fe from "./pages/Fe";
import Pm from "./pages/Pm";
import Courses from "./pages/Courses";
import Cohorts from "./pages/Cohorts";
import Cohort from "./pages/Cohort";
import Admin from "./pages/Admin";
import Surveys from "./pages/Surveys";
import GuestSpeaker from "./pages/surveys/GuestSpeaker";
import Navbar from "./components/Navbar";
import PostBootCamp from "./pages/surveys/PostBootcamp";

function App() {
  const [cohorts, setCohorts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [todos, setTodos] = useState([]);
  const [attendanceList, setAttendanceList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      setAttendanceList(data.attendance);
      setCohorts(data.cohorts);
    });
  }, []);

  const login = async (name, pass) => {
    setIsLoggedIn(true);
    setUsername(name);
    setPassword(pass);

    try {
      const user = await signInWithEmailAndPassword(auth, name, pass);
      let userRole = "none";
      onValue(ref(db), (snapshot) => {
        const data = snapshot.val();

        for (const key in data.users) {
          if (data.users[key].uid === user.user.uid) {
            userRole = data.users[key].role;
          }
        }
        Local.saveUserInfo(user.user.accessToken, user.user.uid, userRole);
        switch (userRole.toString()) {
          case "admin":
            navigate("/");
            break;
          case "fs-instructor":
            navigate("/courses/fsd");
            break;
          case "ds-instructor":
            navigate("/courses/ds");
            break;
          case "pm-instructor":
            navigate("/courses/pm");
            break;
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    Local.removeUserInfo();
    navigate("/login");
    return auth.signOut();
  };
  return (
    <div className="App">
      <Navbar logout={() => logout()} />
      <main>
        <Fragment>
          <Routes>
            <Route
              path="/login"
              element={<Login login={(name, pass) => login(name, pass)} />}
            />
            <Route
              exact
              path="/"
              element={<AuthenticatedRoute allowedRoles={["admin"]} />}
            >
              <Route path="/" element={<Home />} />
            </Route>
            <Route
              exact
              path="/courses/fsd"
              element={
                <AuthenticatedRoute allowedRoles={["fs-instructor", "admin"]} />
              }
            >
              <Route exact path="/courses/fsd" element={<Fsd />} />
            </Route>
            <Route
              exact
              path="/courses/pm"
              element={
                <AuthenticatedRoute allowedRoles={["pm-instructor", "admin"]} />
              }
            >
              <Route
                exact
                path="/courses/pm"
                element={<Pm attendanceList={attendanceList} />}
              />
            </Route>
            <Route
              exact
              path="/attendance-list"
              element={<AuthenticatedRoute allowedRoles={["admin"]} />}
            >
              <Route
                exact
                path="/attendance-list"
                element={<AttendanceList attendanceList={attendanceList} />}
              />
            </Route>
            <Route
              exact
              path="/courses/ds"
              element={
                <AuthenticatedRoute allowedRoles={["ds-instructor", "admin"]} />
              }
            >
              <Route exact path="/courses/ds" element={<Ds />} />
            </Route>
            <Route
              exact
              path="/courses/fe"
              element={
                <AuthenticatedRoute allowedRoles={["fe-instructor", "admin"]} />
              }
            >
              <Route exact path="/courses/fe" element={<Fe />} />
            </Route>
            <Route
              exact
              path="/courses"
              element={
                <AuthenticatedRoute allowedRoles={["fe-instructor", "admin"]} />
              }
            >
              <Route exact path="/courses" element={<Courses />} />
            </Route>
            <Route
              exact
              path="/cohorts"
              element={
                <AuthenticatedRoute allowedRoles={["fe-instructor", "admin"]} />
              }
            >
              <Route
                exact
                path="/cohorts"
                element={<Cohorts cohorts={cohorts} />}
              />
            </Route>
            <Route
              exact
              path="/admin"
              element={<AuthenticatedRoute allowedRoles={["admin"]} />}
            >
              <Route exact path="/admin" element={<Admin />} />
            </Route>
            <Route
              exact
              path="/admin/surveys"
              element={<AuthenticatedRoute allowedRoles={["admin"]} />}
            >
              <Route exact path="/admin/surveys" element={<Surveys />} />
            </Route>
            <Route
              exact
              path="/admin/surveys/guest-speaker"
              element={<AuthenticatedRoute allowedRoles={["admin"]} />}
            >
              <Route
                exact
                path="/admin/surveys/guest-speaker"
                element={<GuestSpeaker />}
              />
            </Route>
            <Route
              exact
              path="/admin/surveys/post-bootcamp"
              element={<AuthenticatedRoute allowedRoles={["admin"]} />}
            >
              <Route
                exact
                path="/admin/surveys/post-bootcamp"
                element={<PostBootCamp />}
              />
            </Route>
            {cohorts &&
              cohorts.map((cohort) => (
                <>
                  <Route
                    exact
                    path={`/cohorts/${cohort.name}`}
                    element={<AuthenticatedRoute allowedRoles={["admin"]} />}
                  >
                    <Route
                      exact
                      path={`/cohorts/${cohort.name}`}
                      element={<Cohort cohort={cohort} />}
                    />
                  </Route>
                </>
              ))}
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </Fragment>
      </main>
    </div>
  );
}

export default App;
