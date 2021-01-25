import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { FormControl } from "@material-ui/core";

import { Redirect, useHistory } from "react-router-dom";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  // state
  const [username, setUserName] = useState("");
  const [password, setPassWord] = useState("");
  const [userNameValid, setUserNameValid] = useState(false);
  const [passWordValid, setPassWordValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [submitValid, setSubmitValid] = useState(false);

  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = await props.onSubmit({
      username: username,
      password: password,
    });
    if (data === null) {
      setSubmitValid(true);
      setTimeout(() => {
        setSubmitValid(false);
      }, 5000);
    } else {
      console.log("SIGN-IN SUCCESS");
      let [user] = data.filter((user) => user.password === password);
      if (rememberMe === true) localStorage.setItem("id", user.id);
      // redirect user to other route based on their role
      history.push("/sign-up");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Alert
          severity="error"
          style={{ display: submitValid ? "flex" : "none" }}
        >
          Incorrect login credentials
        </Alert>
        <form className={classes.form} onSubmit={submitHandler}>
          <TextField
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setPassWord(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                checked={rememberMe}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
