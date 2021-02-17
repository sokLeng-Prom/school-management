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

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [courses, setCourses] = useState([]);
  const fetchCourse = async () => {
    const resp = await axios.get(`${BASE_URL}/courses`);
    console.log(resp.data);
  };

  useEffect(() => fetchCourse(), []);

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
            options={["A", "B", "C"]}
            option={"Please Choose Something"}
          />
          <CheckboxList />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Assign
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
