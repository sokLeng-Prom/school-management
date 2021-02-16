import { useEffect, useState } from "react";
import { isNumber, BASE_URL } from "../static/const";

import axios from "axios";

import CustomizedSelect from "../components/CustomizedSelect";

import IconLabelButton from "../components/IconLabelButton";
export default function ScoreSheet() {
  const [types, setTypes] = useState(["quiz", "assignments"]);
  const [type, setType] = useState();

  const [_class, setClass] = useState("");
  const [classes, setClasses] = useState([]);

  const [data, setData] = useState();

  const fetchDB = async () => {
    const res = await axios.get(
      `${BASE_URL}/users/${localStorage.getItem("id")}`
    );
    let data = res.data.data;
    setData(data);
    setClasses(Object.keys(data.class));
  };

  useEffect(() => fetchDB(), []);

  const mockData = [
    "John",
    "Abe",
    "Susan",
    "Lucy",
    "Jeff",
    "Grace",
    "Einstein",
    "Ricky",
    "Morty",
    "Jord",
    "Karen",
    "Hora",
  ];

  const [students, setStudents] = useState();

  const [scores, setScores] = useState(new Array(mockData.length));
  // const clickHandler = () => {
  //   console.log(JSON.stringify(scores));
  // };
  const renderStudentsScoreInput = mockData.map((name, index) => {
    return (
      <label title={name} key={index}>
        {name}
        <input
          type="text"
          required
          onChange={(e) => {
            if (isNumber(e.target.value)) {
              var newScores = scores;
              const newData = {
                [name]: !e.target.value ? 0 : parseInt(e.target.value),
              };
              newScores[index] = newData;
              setScores(newScores);
              console.log(e.target.parentElement.title);
              console.log(
                `newScore[${index}]: ${JSON.stringify(newScores[index])}`
              );
            }
          }}
        />
      </label>
    );
  });

  const clickHandler = () => {
    if (type && _class) {
    }
  };

  return (
    <div>
      <CustomizedSelect options={types} option={type} />
      <CustomizedSelect options={classes} option={_class} />
      <IconLabelButton
        title={"Create attendance sheet"}
        onClick={clickHandler}
      />

      {renderStudentsScoreInput}
      {/* <button onClick={clickHandler}>Log Array</button> */}
    </div>
  );
}
