import StudentCard from "../components/StudentCard";
import { useEffect, useState } from "react";
import axios from "axios";
function AttendanceSheet() {
  const [students, setStudents] = useState([]);
  const getDB = async () => {
    const res = await axios.get("http://localhost:3001/users");
    setStudents(res.data[0].data.students);
  };

  useEffect(() => getDB(), []);
  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} name={student.name}></StudentCard>
      ))}
    </div>
  );
}

export default AttendanceSheet;
