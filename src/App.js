import { Routes, Route, useNavigate } from "react-router-dom";
import { React, useState, useEffect, Fragment } from "react";
import "./App.css";
import Home from "./pages/Home.js";
import Fsd from "./pages/Fsd.js";
import Ds from "./pages/Ds.js";
import Unauthorized from "./pages/Unauthorized.js";
import Login from "./pages/Login.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { ref, onValue } from "firebase/database";
import { auth, db } from "./firebase-config";

import Local from "./helpers/Local";
import AuthenticatedRoute from "./AuthenticatedRoute";
import AttendanceList from "./pages/AttendanceList";
import Fe from "./pages/Fe";
import Pm from "./pages/Pm";
import Courses from "./pages/Courses";

function App() {
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
              <Route path="/" element={<Home logout={() => logout()} />} />
            </Route>
            <Route
              exact
              path="/courses/fsd"
              element={
                <AuthenticatedRoute allowedRoles={["fs-instructor", "admin"]} />
              }
            >
              <Route
                exact
                path="/courses/fsd"
                element={<Fsd logout={() => logout()} />}
              />
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
                element={
                  <Pm attendanceList={attendanceList} logout={() => logout()} />
                }
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
                element={
                  <AttendanceList
                    attendanceList={attendanceList}
                    logout={() => logout()}
                  />
                }
              />
            </Route>
            <Route
              exact
              path="/courses/ds"
              element={
                <AuthenticatedRoute allowedRoles={["ds-instructor", "admin"]} />
              }
            >
              <Route
                exact
                path="/courses/ds"
                element={<Ds logout={() => logout()} />}
              />
            </Route>
            <Route
              exact
              path="/courses/fe"
              element={
                <AuthenticatedRoute allowedRoles={["fe-instructor", "admin"]} />
              }
            >
              <Route
                exact
                path="/courses/fe"
                element={<Fe logout={() => logout()} />}
              />
            </Route>
            <Route
              exact
              path="/courses"
              element={
                <AuthenticatedRoute allowedRoles={["fe-instructor", "admin"]} />
              }
            >
              <Route
                exact
                path="/courses"
                element={<Courses logout={() => logout()} />}
              />
            </Route>
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </Fragment>
      </main>
    </div>
  );
}

export default App;
