import CustomizedSelect from "../components/CustomizedSelect";
import TextField from "@material-ui/core/TextField";
import IconLabelButton from "../components/IconLabelButton";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../static/const";
export default function CreateNotice() {
  const types = ["announcement", "quiz", "assignment"];
  const [type, setType] = useState("");

  const [description, setDescription] = useState("");

  const [_class, setClass] = useState("");
  const [classes, setClasses] = useState([]);

  const typeHandler = (e) => {
    setType(e.target.value);
  };

  const classHandler = (e) => {
    setClass(e.target.value);
  };

  const [data, setData] = useState(null);

  const getDB = async () => {
    const res = await axios.get(
      `${BASE_URL}/users/${localStorage.getItem("id")}`
    );
    let data = res.data.data;
    setData(data);
    setClasses(Object.keys(data.class));
  };

  useEffect(() => getDB(), []);

  // const res = await axios.get(`${BASE_URL}/users/${studentID}`);
  // let data = res.data.data;
  // // let attendances = [...res.data.data.class[_class].data.attendance];
  // let newData = {
  //   status: status,
  //   date: `${selectedDate.getDate()}/${
  //     selectedDate.getMonth() + 1
  //   }/${selectedDate.getFullYear()}`,
  // };
  // data.class[_class].data.attendance.push(newData);

  // await axios.patch(`${BASE_URL}/users/${studentID}`, {
  //   data: data,
  // });

  // setStudents(students.filter((student) => student.id != studentID));

  const clickHandler = async () => {
    if (type && description && _class) {
      // const res = await axios.get(
      //   `${BASE_URL}/users/${localStorage.getItem("id")}`
      // );
      // let data = res.data.data;
      let newData = {
        type: type,
        description: description,
      };
      data.class[_class].students.map(async (student) => {
        const res = await axios.get(`${BASE_URL}/users/${student.id}`);
        let updatedData = res.data.data;
        updatedData.class[_class].data.notice.push(newData);
        await axios.patch(`${BASE_URL}/users/${student.id}`, {
          data: updatedData,
        });
        console.log("SUCCESS");
        // await axios.patch()
      });
      // data.class[_class].data.
    }
  };

  return (
    <div>
      <CustomizedSelect
        options={types}
        option={type}
        optionHandler={typeHandler}
      />
      <CustomizedSelect
        options={classes}
        option={_class}
        optionHandler={classHandler}
      />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={7}
        // defaultValue="Default Value"
        variant="outlined"
      />
      <IconLabelButton title={"Create Notice"} onClick={clickHandler} />
    </div>
  );
}
