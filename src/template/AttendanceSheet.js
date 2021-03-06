import StudentCard from "../components/StudentCard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomizedSelect from "../components/CustomizedSelect";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "../components/DatePicker";

import IconLabelButton from "../components/IconLabelButton";

import { BASE_URL } from "../static/const";

import { unmountComponentAtNode } from "react-dom";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    marginRight: theme.spacing(5),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  displayAttendance:{

    padding: "4rem"
  },
  
}));
// 

function AttendanceSheet() {
  const [data, setData] = useState([]);
  const [classes, setClasses] = useState([]);
  const [_class, setClass] = useState("");
  const [valid, setValid] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [students, setStudents] = useState([]);

  const dateHandler = (date) => {
    setSelectedDate(date);
  };

  const classHandler = (e) => {
    setClass(e.target.value);
  };

  const updateAttendance = async (studentID, status) => {
    const res = await axios.get(`${BASE_URL}/users/${studentID}`);
    let data = res.data.data;
    // let attendances = [...res.data.data.class[_class].data.attendance];
    let newData = {
      status: status,
      date: `${selectedDate.getDate()}/${
        selectedDate.getMonth() + 1
      }/${selectedDate.getFullYear()}`,
    };
    data.class[_class].data.attendance.push(newData);

    await axios.patch(`${BASE_URL}/users/${studentID}`, {
      data: data,
    });

    setStudents(students.filter((student) => student.id != studentID));
  };

  const renderer = () => {
    if (valid) {
      return students.map((student) => (
        <StudentCard 
          updateAttendance={updateAttendance}
          key={student.id}
          id={student.id}
          name={student.name}
        ></StudentCard>
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

  const generateAttedanceSheet = () => {
    if (_class) {
      setValid(true);
      setStudents(data[_class].students);
    }
  };

  useEffect(() => getDB(), []);
      {/* <Button/> */}

  return (
    <div >
      <CustomizedSelect 
        option={_class}
        optionHandler={classHandler}
        options={classes}
        
      />
      <DatePicker selectedDate={selectedDate} dateHandler={dateHandler} />
      <IconLabelButton
        title={"Generate Attendance"}
        onClick={generateAttedanceSheet}
      />
      <div className={classes.displayAttendance}>
      {renderer()}
      </div>
    </div>
  );
}

export default AttendanceSheet;
