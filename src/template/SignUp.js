import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import Divider from "@material-ui/core/Divider";

import { useState } from "react";
import { BASE_URL, isNumber, isEmail } from "../static/const";

import AlertError from "../components/AlertError";
import AlertSuccess from "../components/AlertSuccess";
import { set } from "date-fns";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
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

export default function SignUp(props) {
  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [ageInputValidation, setAgeInputValidation] = useState(true);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailInputValidation, setEmailInputValidation] = useState(true);
  const [nationalIDNumber, setNationalIDNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [role, setRole] = useState("");
  // const [major, setMajor] = useState();

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const resetInputFields = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setEmailAddress("");
    setNationalIDNumber("");
    setUserName("");
    setPassWord("");
    setRole("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const resp = await props.onSubmit({
      username: userName,
      password: passWord,
      personal_info: {
        name: firstName + " " + lastName,
        age: age,
        national_id_num: nationalIDNumber,
        email: emailAddress,
      },
      role: role,
    });

    if (resp.status) {
      setSuccessMsg(resp.msg);
      resetInputFields();
    } else {
      setErrorMsg(resp.msg);
      // console.log("Success");
    }
  };
  // info needed: age, name, email, national_id_num, role, major, username, password
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          Registration Page(Admin Access Only)
        </Typography>
        <AlertError errorMsg={errorMsg} />
        <AlertSuccess successMsg={successMsg} />
        <form className={classes.form} onSubmit={submitHandler}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                Personal Information
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <br></br>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={ageInputValidation ? false : true}
                helperText={
                  ageInputValidation
                    ? ""
                    : "Input must be a number with value less than 100"
                }
                variant="outlined"
                required
                fullWidth
                id="Age"
                label="Age"
                name="Age"
                value={age}
                onChange={(e) => {
                  if (
                    !isNumber(e.target.value) ||
                    parseInt(e.target.value) > 100
                  ) {
                    setAgeInputValidation(false);
                  } else {
                    setAgeInputValidation(true);
                    setAge(e.target.value);
                  }
                }}
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={emailInputValidation ? false : true}
                helperText={emailInputValidation ? "" : "Input must an email"}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={emailAddress}
                autoComplete="email"
                onChange={(e) => {
                  if (!isEmail(e.target.value)) {
                    setEmailInputValidation(false);
                  } else {
                    setEmailInputValidation(true);
                    setEmailAddress(e.target.value);
                  }
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="national_id_num"
                value={nationalIDNumber}
                label="National ID Number"
                name="National ID Number"
                onChange={(e) => setNationalIDNumber(e.target.value)}
                autoComplete="national_id_num"
              />
            </Grid>
          </Grid>
          <br></br>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h6">
                Login Information
              </Typography>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <br></br>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                value={userName}
                name="username"
                autoComplete="username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={passWord}
                autoComplete="password"
                onChange={(e) => setPassWord(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Role
                </InputLabel>
                <NativeSelect
                  required
                  // value={state.age}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  // inputProps={{
                  //   name: "age",
                  //   id: "age-native-label-placeholder",
                  // }}
                >
                  <option value="">None</option>
                  <option value={"student"}>Student</option>
                  <option value={"teacher"}>Teacher</option>
                  <option value={"admin"}>Admin</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            {/* <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="age-native-label-placeholder">
                  Major
                </InputLabel>
                <NativeSelect
                  required
                >
                  <option value="">None</option>
                  <option value={10}>Computer Science</option>
                  <option value={20}>Business</option>
                  onChange={(e) => setMajor(e.target.value)}
                </NativeSelect>
              </FormControl>
            </Grid> */}

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox required value="allowExtraEmails" color="primary" />
                }
                label="I agree that the information above is correct and accurate."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
