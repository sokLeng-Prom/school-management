import "./App.css";
// import Button from "@material-ui/core/Button";
import SignIn from "./template/SignIn";
import SignUp from "./template/SignUp";
import AttendanceSheet from "./template/AttendanceSheet";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const getDB = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setUsers(res.data);
  };

  return (
    <div className="App">
      <SignIn />
      {/* <SignUp />
      <AttendanceSheet></AttendanceSheet> */}
      {/* {console.log(users[0].data.students)} */}
    </div>
  );
}

export default App;
