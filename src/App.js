import "./App.css";
// import Button from "@material-ui/core/Button";
import SignIn from "./template/SignIn";
import SignUp from "./template/SignUp";
import AttendanceSheet from "./template/AttendanceSheet";
import { useEffect, useState } from "react";

import { BASE_URL } from "./static/const";

import Home from "./test/Home";
import AfterSignIn from "./test/AfterSignIn";

import axios from "axios";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
function App() {
  const [users, setUsers] = useState([]);
  const getUsersDB = async () => {
    const res = await axios.get(`${BASE_URL}/users`);
    setUsers(res.data);
  };

  useEffect(() => getUsersDB(), []);

  // data as username and password to check with the users db
  const fSignIn = async (data) => {
    console.log("FUNCTION IS RUNNING");
    const res = await axios.get(`${BASE_URL}/users?username=${data.username}`);
    if (res.data.length === 0) return null;
    else return res.data;
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/sign-in">
            <SignIn onSubmit={fSignIn} />
          </Route>
          <Route path="/sign-in-success">
            <AfterSignIn />
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
