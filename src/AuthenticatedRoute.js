import {React, useEffect, useState} from "react";
import { Navigate, Outlet } from 'react-router-dom';
import Local from "./helpers/Local";
import {ref, onValue} from "firebase/database";
import { db } from "./firebase-config";


function AuthenticatedRoute({ allowedRoles }) {
    // Redirect to /login if anonymous user
   
    useEffect(() => {
      onValue(ref(db), (snapshot) => {
        
        // const data = snapshot.val();
        // data.users.map((user) => {
        //   if (user.uid === Local.getUserId()) {
        //   allowedRoles.map((role) => {
        //     if (data.users.role === role) {
        //       console.log("allowed");
        //     } else {
        //       console.log("not allowed");
        //     }
        //   });
        // if (data !== null) {
        //   Object.values(data).map((todo) => {
        //     setTodos((oldArray) => [...oldArray, todo]);
        //   });
        // }
      });
    }, []);
    
    let userId = Local.getToken();   
    let role = Local.getRole();
    return allowedRoles?.includes(role) ? <Outlet /> : userId ? <Navigate to="/unauthorized" /> : <Navigate to="/login" />;
    // if (!userId) {
    //     return <Navigate to="/login" />;
    // }

    // Render <Route> containing child component(s)
    // return (
    //     <Route exact path={props.path}>
    //         {props.children}
    //     </Route>
    // );
}

export default AuthenticatedRoute;