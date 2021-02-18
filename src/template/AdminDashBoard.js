// role admin
// see total students

import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../static/const";
import { makeStyles } from "@material-ui/core/styles";
import MediaControlCard from "../components/MediaControlCard";
import { render } from "@testing-library/react";
import TempComponent from "./temp";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "30%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  card: {
    width: "23rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#47A3F5"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
}));
// see total teachers
export default function AdminDashBoard() {
  const classes = useStyles();
  const [totalStudent, setTotalStudent] = useState();
  const [totalTeacher, setTotalTeacher] = useState();

  const [teachers, setTeachers] = useState();
  const [students, setStudents] = useState();

  const [dataFetched, setDataFetched] = useState(false);
  // var teachers, students;

  const fetchDB = async () => {
    const queryStudent = await axios.get(`${BASE_URL}/users?role=student`);
    setTotalStudent(queryStudent.data.length);
    setStudents(queryStudent.data);

    const queryTeacher = await axios.get(`${BASE_URL}/users?role=teacher`);
    setTotalTeacher(queryTeacher.data.length);
    setTeachers(queryTeacher.data);

    setDataFetched(true);
  };

  const rendererA = () => {
    if (dataFetched) {
      return teachers.map((teacher, index) => (
        <MediaControlCard key={index} title={teacher.personal_info.name} />
      ));
    }
  };

  const rendererB = () => {
    if (dataFetched) {
      return students.map((student, index) => (
        <MediaControlCard key={index} title={student.personal_info.name} />
      ));
    }
  };

  useEffect(() => fetchDB(), []);
  return (
    <div>
      
      <MediaControlCard className = {classes.card} title={"Total Student \n" + totalStudent} />
      <MediaControlCard title={"Total Teacher " + totalTeacher} />
      <h1>Employee:</h1>
      {/* <temp /> */}
      {/* <TempComponent data={teachers} /> */}
      {rendererA()}
      <h1>Students</h1>
      {rendererB()}
      {/* {teachers.map((teacher) => (
        <MediaControlCard title={teacher.personal_info.name} />
      ))} */}
    </div>
  );
}
