import React from "react";
import { Navigate, Outlet } from 'react-router-dom';
import Local from "./helpers/Local";


function AuthenticatedRoute({children}) {
    // Redirect to /login if anonymous user
    let userId = Local.getToken();
    return userId ? <Outlet /> : <Navigate to="/login" />;
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