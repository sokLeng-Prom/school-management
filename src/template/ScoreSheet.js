import { useEffect, useState } from "react";
import { isNumber, BASE_URL } from "../static/const";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import CustomizedSelect from "../components/CustomizedSelect";

import IconLabelButton from "../components/IconLabelButton";
import { Button, Icon, InputAdornment, TextField } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteBackground: {
    background: "white",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
  },
  grayBackground: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#ebecf0",
    margin: "1rem",
    // height: "90%",
    padding: "1rem",
    // width: "80%",
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
  },
  test: {
    borderColor: "text.primary",
    width: "50%",
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
  Spacing: {
    padding: "30px",
  },
  button: {
    margin: theme.spacing(1),
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EBECF0",
    width: "25rem",
    padding: "4rem",
    alignItems: "center",
  },
  submitScoreBtn: {
    width: "10rem",
    marginTop: "2rem",
  },
}));

export default function ScoreSheet() {
  const classStyle = useStyles();
  const [types, setTypes] = useState(["quiz", "assignment"]);
  const [type, setType] = useState();

  const typeHandler = (e) => {
    setType(e.target.value);
  };

  const [_class, setClass] = useState("");
  const [classes, setClasses] = useState([]);

  const classHandler = (e) => {
    setClass(e.target.value);
  };

  const [data, setData] = useState([]);

  const fetchDB = async () => {
    const res = await axios.get(
      `${BASE_URL}/users/${localStorage.getItem("id")}`
    );
    let data = res.data.data;
    setData(data);
    setClasses(Object.keys(data.class));
    console.log(data);
  };

  useEffect(() => fetchDB(), []);

  const [sheetData, setSheetData] = useState([]);

  const [students, setStudents] = useState();
  // new Array(sheetData.length)
  const [scores, setScores] = useState();
  // const clickHandler = () => {
  //   console.log(JSON.stringify(scores));
  // };

  const reset = () => {
    setClass("");
    setType("");
    setSheetData([]);
    setData([]);
  };

  const submitScoreHandler = () => {
    scores.map(async (score, index) => {
      let resp = await axios.get(`${BASE_URL}/users/${sheetData[index].id}`);

      var data = resp.data.data;
      const lastIndex = data.class[_class].data[type].length;
      // score Object.values(score)[0]
      data.class[_class].data[type].push({
        index: lastIndex + 1,
        score: Object.values(score)[0],
      });

      await axios.patch(`${BASE_URL}/users/${sheetData[index].id}`, {
        data: data,
      });
      // const lastIndex =
      reset();
    });
  };

  const renderSubmitScoreBtn = () => {
    if (sheetData.length > 0) {
      return (
        <Button
          variant="contained"
          color="primary"
          className={(classStyle.button, classStyle.submitScoreBtn)}
          endIcon={<Icon>send</Icon>}
          onClick={submitScoreHandler}
        >
          Submit Score
        </Button>
      );
    }
  };

  const renderStudentsScoreInput = sheetData.map((map, index) => {
    return (
      <label title={map.name} key={index}>
        {/* {map.name} */}
        {/* <InputWithIcon title={map.name} onChange={scoreInputHandler} /> */}
        <TextField
          className={classStyle.margin}
          id="input-with-icon-textfield"
          label={map.name}
          onChange={(e) => {
            if (isNumber(e.target.value)) {
              var newScores = scores;
              const newData = {
                [map.name]: !e.target.value ? 0 : parseInt(e.target.value),
              };
              newScores[index] = newData;
              setScores(newScores);
              console.log(e.target.parentElement.title);
              console.log(
                `newScore[${index}]: ${JSON.stringify(newScores[index])}`
              );
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        {/* <input
          type="text"
          required
          onChange={(e) => {
            if (isNumber(e.target.value)) {
              var newScores = scores;
              const newData = {
                [map.name]: !e.target.value ? 0 : parseInt(e.target.value),
              };
              newScores[index] = newData;
              setScores(newScores);
              console.log(e.target.parentElement.title);
              console.log(
                `newScore[${index}]: ${JSON.stringify(newScores[index])}`
              );
            }
          }}
        /> */}
      </label>
    );
  });

  const clickHandler = () => {
    if (type && _class) {
      const newArray = data.class[_class].students.map((student) => ({
        id: student.id,
        name: student.name,
      }));
      setSheetData(newArray);
      setScores(new Array(sheetData.length));
    }
  };

  return (
    <div>
      <div className={classStyle.whiteBackground}>
        <h2>Score Sheet</h2>
        <div className={classStyle.grayBackground}>
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
          </div>
          <IconLabelButton
            title={"Create score sheet"}
            onClick={clickHandler}
          />
        </div>
        <div className={sheetData.length > 0 ? classStyle.scoreContainer : ""}>
          {renderStudentsScoreInput}
          {renderSubmitScoreBtn()}
        </div>
      </div>
      {/* <CustomizedSelect options={types} option={type} />
      <CustomizedSelect options={classes} option={_class} />
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
      <IconLabelButton
        title={"Create attendance sheet"}
        onClick={clickHandler}
      />

      {renderStudentsScoreInput} */}
      {/* <button onClick={clickHandler}>Log Array</button> */}
    </div>
  );
}
