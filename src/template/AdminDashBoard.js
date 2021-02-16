// role admin
// see total students

import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../static/const";

import MediaControlCard from "../components/MediaControlCard";
import { render } from "@testing-library/react";
import TempComponent from "./temp";

// see total teachers
export default function AdminDashBoard() {
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
      <MediaControlCard title={"Total Student " + totalStudent} />
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
