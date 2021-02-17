import MediaControlCard from "../components/MediaControlCard";
import FormDialogue from "../components/FormDialogue";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../static/const";
export default function AssignCourse() {
  const [coursesList, setCoursesList] = useState([]);
  // const [courseOption, setCourseOption] = useState("");

  const [teachersOptionData, setTeachersOptionData] = useState([]);
  const [teachersOption, setTeachersOption] = useState([]);

  const [studentsOptionData, setStudentsOptionData] = useState([]);
  const [studentsOption, setStudentsOption] = useState([]);

  const courseOptionHandler = (e) => {
    // setCourseOption(e.target.value);
    console.log(e.target.value);
  };

  const fetchCourse = async () => {
    const resp = await axios.get(`${BASE_URL}/courses`);
    console.log(resp.data);

    const newArray = resp.data.map(
      (map) => `${map.courseCode} - ${map.courseName}`
    );

    setCoursesList(newArray);
  };

  const fetchTeachers = async () => {
    const resp = await axios.get(`${BASE_URL}/users?role=teacher`);
    console.log(resp.data);

    const newArray = resp.data.map(
      (map) => `${map.personal_info.name} - ${map.username}`
    );
    setTeachersOption(newArray);
    setTeachersOptionData(resp.data);
    console.log(resp.data);
  };

  const fetchStudents = async () => {
    const resp = await axios.get(`${BASE_URL}/users?role=student`);
    console.log(resp.data);

    const newArray = resp.data.map(
      (map) => `${map.personal_info.name} - ${map.username}`
    );
    setStudentsOption(newArray);
    setStudentsOptionData(resp.data);
    console.log(resp.data);
  };

  const fetchDB = () => {
    fetchTeachers();
    fetchStudents();
    fetchCourse();
  };

  useEffect(() => {
    fetchDB();
    // fetchCourse();
    // fetchTeachers();
  }, []);

  return (
    <div>
      <MediaControlCard title={"Teacher"} />
      <MediaControlCard title={"Student"} />
      <FormDialogue
        optionsData={teachersOptionData}
        options={teachersOption}
        coursesList={coursesList}
        role={"teacher"}
      />
      <FormDialogue
        role={"student"}
        optionsData={studentsOptionData}
        options={studentsOption}
        coursesList={coursesList}
      />
    </div>
  );
}
