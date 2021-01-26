import "./App.css";
// import Button from "@material-ui/core/Button";
import SignIn from "./template/SignIn";
import SignUp from "./template/SignUp";
import AttendanceSheet from "./template/AttendanceSheet";
import ScoreSheet from "./template/ScoreSheet";
import PageNotFound from "./template/PageNotFound";
import { useEffect, useState } from "react";
import { useBeforeunload } from "react-beforeunload";

import { BASE_URL, UUID_API_URL, stringToBoolean } from "./static/const";

import Home from "./test/Home";
import AfterSignIn from "./test/AfterSignIn";

import axios from "axios";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
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

  // remember me function
  // Note:
  // 1. Remove id and remember me from local storage if the remember me is unchecked after use close the browser or refresh it (one time login)
  // 2. Keep id and remember me from local storage if the remember is checked, session kept
  useBeforeunload((e) => {
    if (!stringToBoolean(localStorage.getItem("rememberMe"))) {
      localStorage.removeItem("id");
      localStorage.removeItem("rememberMe");
    }
  });

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

  // retrive uuid from open source api
  const getUUID = async () => {
    const res = await axios.get(UUID_API_URL);
    return res.data;
  };

  // to be done
  const fSignUp = async () => {
    // uuid req
    const uuid = await getUUID();
  };

  return (
    <div className="App">
      {/* <ScoreSheet /> */}
      <Router>
        <Switch>
          <PublicRoute
            restricted={true}
            component={SignIn}
            path="/sign-in"
            exact
            props={{ onSubmit: fSignIn }}
          />
          <PrivateRoute component={Home} path="/dashboard" exact />
          {/* <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp onSubmit={fSignUp} />
          </Route>
          <Route path="/sign-in">
            <SignIn onSubmit={fSignIn} />
          </Route>
          <Route path="/sign-in-success">
            <AfterSignIn />
          </Route> */}
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
