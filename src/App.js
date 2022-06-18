
import { Routes, Route, useNavigate } from 'react-router-dom'
import {React, useState, useEffect, Fragment} from "react";
import './App.css';
import Home from './pages/Home.js'
import Fsd from './pages/Fsd.js'
import Ds from './pages/Ds.js'
import Login from './pages/Login.js'
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { set, ref, onValue, remove, update } from "firebase/database";
import { auth, db } from "./firebase-config";

import Local from './helpers/Local';
import AuthenticatedRoute from './AuthenticatedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const ROLES = {
    'Fe-instructor': 1901,
    'Ds-instructor': 1984,
    'FS-instructor': 1923,
    'Admin': "admin"
  }
  

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
       setRole(data.users.role);
      // console.log(data.students);
      // if (data !== null) {
      //   Object.values(data).map((todo) => {
      //     setTodos((oldArray) => [...oldArray, todo]);
      //   });
      // }
    });
  }, []);

  const login = async (name,pass) => {    
    setIsLoggedIn(true);
    setUsername(name);
    setPassword(pass);

      try {
        const user = await signInWithEmailAndPassword(auth, name, pass);
        Local.saveUserInfo(user.user.accessToken, user.user.uid,role);
        
        console.log("loged in", user);
        navigate('/');
      } catch (error) {
        console.log(error.message);
      }
      
    }

  
  const logout = async () => {
    Local.removeUserInfo();
    navigate('/login');
    return auth.signOut()
  };
  return (
    <div className="App">
    <main>
      <Fragment>
        <Routes>
        <Route exact path='/' element={<AuthenticatedRoute allowedRoles={["admin"]}/>}>
            <Route path='/' element={<Home logout={() => logout()}/>}/>
        </Route>
        
        
        <Route exact path='/fsd' element={<AuthenticatedRoute allowedRoles={["fs-instructor","admin"]} />}>

            <Route exact path='/fsd' element={<Fsd />}/>
        </Route>
        <Route exact path='/ds' element={<AuthenticatedRoute allowedRoles={["ds-instructor","admin"]} />}>
            <Route exact path='/ds' element={<Ds />}/>
        </Route>    
          <Route path="/login" element={<Login login={(name,pass) => login(name,pass)} />} />
        </Routes>
      </Fragment>
    </main>
  </div>

  );
}

export default App;
