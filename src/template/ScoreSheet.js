import { useEffect, useState } from "react";
import { isNumber, BASE_URL } from "../static/const";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import CustomizedSelect from "../components/CustomizedSelect";

import IconLabelButton from "../components/IconLabelButton";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  whiteBackground: {
    background: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  grayBackground: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#ebecf0",
    margin: "1rem",
    height: "90%",
    width: "80%"

  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  test:{
    borderColor: 'text.primary',
    width: "50%"
    
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(10, 15, 20),
     
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(5),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  section1: {
    margin: theme.spacing(10, 10),
  },
  Spacing:{
    padding: "30px",
  }
}));

export default function ScoreSheet() {
  const classStyle = useStyles()
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
      <div className = {classStyle.whiteBackground}>
        <h2>Score Sheet</h2>
        <div className = {classStyle.grayBackground}>
          <CustomizedSelect options={types} option={type} />
          <CustomizedSelect options={classes} option={_class} />
          <IconLabelButton
            title={"Create attendance sheet"}
            onClick={clickHandler}
          />
          {renderStudentsScoreInput}
           <button onClick={clickHandler}>Log Array</button>
        </div>
      </div>
      {/* <CustomizedSelect options={types} option={type} />
      <CustomizedSelect options={classes} option={_class} />
      <IconLabelButton
        title={"Create attendance sheet"}
        onClick={clickHandler}
      />

      {renderStudentsScoreInput} */}
      {/* <button onClick={clickHandler}>Log Array</button> */}
    </div>
  );
}
