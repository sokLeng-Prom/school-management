import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import CustomizedSelect from "../components/CustomizedSelect";
import CheckboxList from "./CheckboxList";
import axios from "axios";
import { BASE_URL } from "../static/const";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [options, setOptions] = useState([]);

  const [option, setOption] = useState("");
  const optionHandler = (e) => {
    setOption(e.target.value);
  };

  // checklist
  const [checkedCourse, setCheckedCourse] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checkedCourse.indexOf(value);
    const newChecked = [...checkedCourse];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedCourse(newChecked);
  };

  // onsubmit form
  const onSubmitTeacher = async () => {
    const username = option.split(" - ")[1];
    const query = props.optionsData.filter(
      (data) => data.username === username
    )[0];
    // query.id

    const resp = await axios.get(`${BASE_URL}/users/${query.id}`);
    var user = resp.data;
    checkedCourse.map((course) => {
      const prefix = course.split(" - ")[0];
      user.data.class[prefix] = user.data.class[prefix] || {
        students: [],
        assignment: [],
        quiz: [],
      };
    });
    await axios.patch(`${BASE_URL}/users/${query.id}`, user);
  };

  const onSubmitStudent = async () => {
    const username = option.split(" - ")[1];
    const query = props.optionsData.filter(
      (data) => data.username === username
    )[0];
    // query.id

    const resp = await axios.get(`${BASE_URL}/users/${query.id}`);
    var user = resp.data;
    checkedCourse.map((course) => {
      const prefix = course.split(" - ")[0];
      user.data.class[prefix] = user.data.class[prefix] || {
        courseCode: course.split(" - ")[0],
        courseName: course.split(" - ")[1],
        data: {
          attendance: [],
          assignment: [],
          quiz: [],
          notice: [],
        },
      };
    });
    await axios.patch(`${BASE_URL}/users/${query.id}`, user);
  };

  const onSubmit = () => {
    if (props.role === "teacher") onSubmitTeacher();
    if (props.role === "student") onSubmitStudent();
  };

  // const [coursesList, setCoursesList] = useState([]);
  // const [courseOption, setCourseOption] = useState("");

  // const courseOptionHandler = (e) => {
  //   setCourseOption(e.target.value);
  //   console.log(e.target.value);
  // };

  // const fetchCourse = async () => {
  //   const resp = await axios.get(`${BASE_URL}/courses`);
  //   console.log(resp.data);

  //   const newArray = resp.data.map(
  //     (map) => `${map.courseCode} - ${map.courseName}`
  //   );

  //   setCoursesList(newArray);
  // };

  useEffect(() => setOptions(props.options), []);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Assign Course For Teacher
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Select Course(s) to add</DialogContentText> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          /> */}
          <CustomizedSelect
            options={props.options}
            option={option}
            optionHandler={optionHandler}
          />
          <CheckboxList
            checked={checkedCourse}
            handleToggle={handleToggle}
            list={props.coursesList}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Assign
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
