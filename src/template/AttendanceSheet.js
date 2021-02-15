import StudentCard from "../components/StudentCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomizedSelect from "../components/CustomizedSelect";

import DatePicker from "../components/DatePicker";
function AttendanceSheet() {
  const [data, setData] = useState([]);
  const [classes, setClasses] = useState([]);
  const [_class, setClass] = useState("");

  const classHandler = (e) => {
    setClass(e.target.value);
  };

  const renderer = () => {
    if (_class) {
      return data[_class].students.map((student) => (
        <StudentCard key={student.id} name={student.name}></StudentCard>
      ));
    }
  };

  const getDB = async () => {
    const res = await axios.get(
      `http://localhost:3001/users/${localStorage.getItem("id")}`
    );
    // setStudents(res.data);
    // console.log(Object.keys(res.data));
    setData(res.data.data.class);
    setClasses(Object.keys(res.data.data.class));

    // console.log(Object.keys(res.data.data.class));
  };

  useEffect(() => getDB(), []);
  return (
    <div>
      <CustomizedSelect
        _class={_class}
        classHandler={classHandler}
        classes={classes}
      />
      <DatePicker />
      {/* {students.map((student) => (
        <StudentCard key={student.id} name={student.name}></StudentCard>
      ))} */}
      {renderer()}
    </div>
  );
}

export default AttendanceSheet;
