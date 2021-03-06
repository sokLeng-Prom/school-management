import "./App.css";
// import Button from "@material-ui/core/Button";
import SignIn from "./template/SignIn";
import SignUp from "./template/SignUp";
import AttendanceSheet from "./template/AttendanceSheet";
import ScoreSheet from "./template/ScoreSheet";
import PageNotFound from "./template/PageNotFound";

// import DrawerLeft from "./template/DrawerLeft";
import ResponsiveDrawer from "./template/ResponsiveDrawer";

import { useEffect, useState } from "react";
import { useBeforeunload } from "react-beforeunload";

import { BASE_URL, UUID_API_URL, stringToBoolean } from "./static/const";

import axios from "axios";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import PublicRoute from "./components/route/PublicRoute";
import PrivateRoute from "./components/route/PrivateRoute";
function App() {
  // state for keeping all users data
  const [users, setUsers] = useState([]);

  const getUsersDB = async () => {
    const res = await axios.get(`${BASE_URL}/users`);
    setUsers(res.data);
  };

  // retreive data from database server as soon as the component mounted
  useEffect(() => getUsersDB(), []);

  // data as username and password to check with the users db
  const fSignIn = async (data) => {
    console.log("FUNCTION IS RUNNING");
    const res = await axios.get(`${BASE_URL}/users?username=${data.username}`);
    if (res.data.length === 0 || res.data[0].password !== data.password) {
      return null;
    } else {
      return res.data[0];
    }
  };

  return (
    <div className="App">
      {/* <ScoreSheet /> */}
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/sign-in" />
          </Route>
          <PublicRoute
            restricted={true}
            component={SignIn}
            path="/sign-in"
            exact
            props={{ onSubmit: fSignIn }}
          />
          {/* <PublicRoute
            restricted={false}
            component={SignUp}
            path="/sign-up"
            exact
            props={{ onSubmit: fSignUp }}
          /> */}
          <PrivateRoute
            component={ResponsiveDrawer}
            path="/dashboard"
            props={{ selected: "Dashboard" }}
            exact
          />
          <PrivateRoute
            component={ResponsiveDrawer}
            path="/classroom"
            props={{ selected: "Classroom" }}
            exact
          />
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>

      {/* <SignIn onSubmit={fSignIn} /> */}
      {/* <AttendanceSheet></AttendanceSheet> */}
      {/* {console.log(users[0].data.students)} */}
    </div>
  );
}

export default App;
